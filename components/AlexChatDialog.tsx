"use client";

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { io, type Socket } from "socket.io-client";
import {
  chatInit,
  getChatHistory,
  getChatSocketClientOptions,
  getChatSocketUrl,
  type ChatHistoryMessage,
} from "@/lib/chat";

type Role = "alex" | "user" | "sales" | "admin";

type ChatMessage = {
  id: string;
  role: Role;
  text: string;
  senderName?: string;
  sortTs?: number;
};

const STORAGE_LEAD = "sbd_chat_lead_id";
const STORAGE_CUSTOMER = "sbd_chat_customer_id";
const STORAGE_PROFILE_NAME = "sbd_chat_profile_name";
const STORAGE_PROFILE_EMAIL = "sbd_chat_profile_email";
const STORAGE_PROFILE_PHONE = "sbd_chat_profile_phone";

function sortChatMessagesByTime(list: ChatMessage[]): ChatMessage[] {
  return [...list]
    .map((m, index) => ({ m, index }))
    .sort((a, b) => {
      const ta = a.m.sortTs ?? 0;
      const tb = b.m.sortTs ?? 0;
      if (ta !== tb) return ta - tb;
      return a.index - b.index;
    })
    .map(({ m }) => m);
}

function loadSavedProfile(): { name: string; email: string; phone: string } {
  try {
    return {
      name: localStorage.getItem(STORAGE_PROFILE_NAME) || "",
      email: localStorage.getItem(STORAGE_PROFILE_EMAIL) || "",
      phone: localStorage.getItem(STORAGE_PROFILE_PHONE) || "",
    };
  } catch {
    return { name: "", email: "", phone: "" };
  }
}

function persistProfile(name: string, email: string, phone: string) {
  try {
    localStorage.setItem(STORAGE_PROFILE_NAME, name.trim());
    localStorage.setItem(STORAGE_PROFILE_EMAIL, email.trim());
    localStorage.setItem(STORAGE_PROFILE_PHONE, phone.trim());
  } catch {
    /* private mode */
  }
}

function persistSession(customerId: string, leadId: string) {
  try {
    localStorage.setItem(STORAGE_CUSTOMER, customerId);
    localStorage.setItem(STORAGE_LEAD, leadId);
  } catch {
    /* ignore */
  }
}

function isEmailOk(email: string) {
  const s = email.trim().toLowerCase();
  if (!s || s.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function phoneDigitsCount(phone: string) {
  return String(phone || "").replace(/\D/g, "").length;
}

function isStoredProfileComplete(saved: {
  name: string;
  email: string;
  phone: string;
}): boolean {
  return (
    Boolean(saved.name.trim()) &&
    isEmailOk(saved.email) &&
    phoneDigitsCount(saved.phone) >= 8
  );
}

function mapHistoryRow(m: ChatHistoryMessage): ChatMessage | null {
  if (!m?.content?.trim()) return null;
  const sortTs = m.createdAt ? new Date(m.createdAt).getTime() : Date.now();
  if (m.senderType === "customer") {
    return { id: crypto.randomUUID(), role: "user", text: m.content, sortTs };
  }
  if (m.senderType === "sales" || m.senderType === "admin") {
    return {
      id: crypto.randomUUID(),
      role: m.senderType as Role,
      text: m.content,
      senderName: m.senderName || (m.senderType === "admin" ? "Admin" : "Sales team"),
      sortTs,
    };
  }
  return { id: crypto.randomUUID(), role: "alex", text: m.content, sortTs };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function TypingIndicator({ label }: { label: string }) {
  return (
    <div
      className="animate-chat-bubble-in flex items-center gap-1.5 px-4 py-3"
      role="status"
      aria-label={label}
    >
      <span className="chat-typing-dot bg-muted-foreground/45 size-2 rounded-full" />
      <span className="chat-typing-dot bg-muted-foreground/45 size-2 rounded-full" />
      <span className="chat-typing-dot bg-muted-foreground/45 size-2 rounded-full" />
    </div>
  );
}

type AlexChatDialogProps = PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>;

export default function AlexChatDialog({
  open,
  onOpenChange,
  children,
}: AlexChatDialogProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"profile" | "connecting" | "ready" | "error">(
    "profile"
  );
  const [gateName, setGateName] = useState("");
  const [gateEmail, setGateEmail] = useState("");
  const [gatePhone, setGatePhone] = useState("");
  const [gatePhoneFormat, setGatePhoneFormat] = useState<string | null>(null);
  const [gateErrors, setGateErrors] = useState<string | null>(null);
  const [identity, setIdentity] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);
  const [session, setSession] = useState<{ customerId: string; leadId: string } | null>(
    null
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [alexTyping, setAlexTyping] = useState(false);
  const [salesTyping, setSalesTyping] = useState<{ active: boolean; name?: string }>({
    active: false,
  });
  const [handedToSales, setHandedToSales] = useState(false);
  const [assignedSalesName, setAssignedSalesName] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);
  const [draft, setDraft] = useState("");
  const [bannerError, setBannerError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const connectErrorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const appendUser = useCallback((text: string) => {
    const sortTs = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text, sortTs },
    ]);
  }, []);

  const appendIncoming = useCallback(
    (payload: {
      senderType: string;
      content: string;
      createdAt?: string | Date;
      senderName?: string;
    }) => {
      const sortTs = payload.createdAt
        ? new Date(payload.createdAt).getTime()
        : Date.now();
      if (payload.senderType === "ai") {
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "alex", text: payload.content, sortTs },
        ]);
      } else if (payload.senderType === "sales" || payload.senderType === "admin") {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: payload.senderType as Role,
            text: payload.content,
            senderName: payload.senderName || (payload.senderType === "admin" ? "Admin" : "Sales team"),
            sortTs,
          },
        ]);
      }
    },
    []
  );

  useLayoutEffect(() => {
    if (!open) {
      socketRef.current?.disconnect();
      socketRef.current = null;
      setIdentity(null);
      setSession(null);
      return;
    }

    const saved = loadSavedProfile();
    setGateName(saved.name);
    setGateEmail(saved.email);
    setGatePhone(saved.phone);
    setGateErrors(null);
    setMessages([]);
    setAlexTyping(false);
    setSalesTyping({ active: false });
    setHandedToSales(false);
    setAssignedSalesName(null);
    setSessionReady(false);
    setDraft("");
    setBannerError(null);

    if (isStoredProfileComplete(saved)) {
      setPhase("connecting");
      setIdentity({
        name: saved.name.trim(),
        email: saved.email.trim(),
        phone: saved.phone.trim(),
      });
    } else {
      setPhase("profile");
      setIdentity(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !identity) return;

    let cancelled = false;

    const bootstrap = async () => {
      try {
        const init = await chatInit({
          firstName: identity.name.split(/\s+/)[0] || identity.name,
          email: identity.email,
          phone: identity.phone,
        });
        if (cancelled) return;

        persistSession(init.customerId, init.leadId);
        setSession({ customerId: init.customerId, leadId: init.leadId });
        setHandedToSales(Boolean(init.isHandedToSales));

        const history = await getChatHistory(init.leadId);
        if (cancelled) return;

        const hydrated = sortChatMessagesByTime(
          history.map(mapHistoryRow).filter(Boolean) as ChatMessage[]
        );

        if (hydrated.length === 0) {
          hydrated.push({
            id: crypto.randomUUID(),
            role: "alex",
            text: `Hi ${init.customerName || identity.name.split(/\\s+/)[0]}! I'm Alex. How can I help you today?`,
            sortTs: Date.now() - 1000,
          });
        }

        setMessages(hydrated);
        setPhase("ready");
        setSessionReady(true);
        setBannerError(null);
      } catch (err) {
        if (cancelled) return;
        setPhase("error");
        setBannerError(
          err instanceof Error ? err.message : "Could not start chat session"
        );
      }
    };

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, [open, identity]);

  useEffect(() => {
    if (!open || !session) return;

    const socket = io(getChatSocketUrl(), getChatSocketClientOptions());
    socketRef.current = socket;

    const joinLead = () => {
      socket.emit("join_lead", {
        leadId: session.leadId,
        customerId: session.customerId,
      });
    };

    const clearConnectErrorTimer = () => {
      if (connectErrorTimerRef.current != null) {
        clearTimeout(connectErrorTimerRef.current);
        connectErrorTimerRef.current = null;
      }
    };

    const onConnect = () => {
      clearConnectErrorTimer();
      joinLead();
    };

    socket.on("connect", onConnect);
    if (socket.connected) onConnect();

    // connect_error fires per failed transport (e.g. WS before polling). Wait before showing error UI.
    socket.on("connect_error", () => {
      clearConnectErrorTimer();
      connectErrorTimerRef.current = setTimeout(() => {
        if (!socket.connected) {
          setPhase("error");
          setBannerError("Could not reach the chat server. Is it running?");
        }
      }, 12_000);
    });

    socket.on(
      "new_message",
      (payload: {
        senderType: string;
        content: string;
        createdAt?: string;
        senderName?: string;
      }) => {
        appendIncoming(payload);
      }
    );

    socket.on("ai_typing", (payload: { isTyping?: boolean } | boolean) => {
      const typing =
        typeof payload === "boolean" ? payload : Boolean(payload?.isTyping);
      setAlexTyping(typing);
    });

    socket.on(
      "sales_typing",
      (payload: { isTyping?: boolean; name?: string }) => {
        setSalesTyping({
          active: Boolean(payload?.isTyping),
          name: payload?.name,
        });
      }
    );

    socket.on("lead_handed_to_sales", (payload: { assignedSales?: string }) => {
      setHandedToSales(true);
      setAlexTyping(false);
      const name = payload?.assignedSales?.trim() || "a sales representative";
      setAssignedSalesName(name);
    });

    socket.on("chat_error", (payload: { message?: string }) => {
      setAlexTyping(false);
      setBannerError(payload?.message?.trim() || "Something went wrong.");
    });

    return () => {
      clearConnectErrorTimer();
      socket.off("connect", onConnect);
      socket.disconnect();
      if (socketRef.current === socket) socketRef.current = null;
    };
  }, [open, session, appendIncoming]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [messages, alexTyping, salesTyping.active, phase, reducedMotion]);

  const canSend =
    sessionReady &&
    phase === "ready" &&
    !alexTyping &&
    !bannerError?.toLowerCase().includes("could not reach");

  const onStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    setGateErrors(null);
    const name = gateName.trim();
    const email = gateEmail.trim();
    const phone = gatePhone.trim();
    if (!name || !email || !phone) {
      setGateErrors("Name, email, and phone are required.");
      return;
    }
    if (!isEmailOk(email)) {
      setGateErrors("Enter a valid email address.");
      return;
    }
    const digits = phoneDigitsCount(phone);
    if (digits < 8) {
      setGateErrors("Enter a valid phone number.");
      return;
    }
    if (gatePhoneFormat) {
      const requiredDigits = (gatePhoneFormat.match(/\./g) || []).length;
      if (requiredDigits > 0 && digits < requiredDigits) {
        setGateErrors("Enter a complete phone number for the selected country.");
        return;
      }
    }
    persistProfile(name, email, phone);
    setPhase("connecting");
    setIdentity({ name, email, phone });
  };

  const replyToUser = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || !canSend || !session) return;
      appendUser(text);
      setDraft("");
      socketRef.current?.emit("customer_message", {
        leadId: session.leadId,
        customerId: session.customerId,
        content: text,
      });
    },
    [canSend, session, appendUser]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    replyToUser(draft);
  };

  const retryConnect = () => {
    onOpenChange(false);
    window.setTimeout(() => onOpenChange(true), 0);
  };

  const headerSubtitle = handedToSales
    ? assignedSalesName
      ? `${assignedSalesName} · Sales team`
      : "Sales team"
    : sessionReady
      ? "Connected"
      : "Connecting…";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
      <DialogContent
        showCloseButton
        className={cn(
          "flex h-[min(580px,85dvh)] w-[calc(100vw-1.5rem)] max-w-[420px] flex-col gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl sm:max-w-md",
          "bg-[#f4f6f8] dark:bg-zinc-900",
          "!fixed !top-auto !left-auto right-3 bottom-20 z-50 max-w-[calc(100vw-1.5rem)] !translate-x-0 !translate-y-0 sm:right-6 sm:bottom-24",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=open]:slide-in-from-bottom-4 data-[state=open]:slide-in-from-right-4",
          "data-[state=closed]:slide-out-to-bottom-4 data-[state=closed]:slide-out-to-right-4"
        )}
      >
        <DialogTitle className="sr-only">
          Chat with Alex — Steel Building Depot
        </DialogTitle>
        <DialogDescription className="sr-only">
          Live chat with Alex at Steel Building Depot. A sales team member may join when your project details are complete.
        </DialogDescription>

        <header className="border-border/60 from-card to-card/95 flex shrink-0 items-center gap-3 border-b bg-gradient-to-b px-4 py-3 pr-12 shadow-sm">
          <div className="relative shrink-0">
            <div
              className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-md"
              aria-hidden
            >
              {handedToSales ? "S" : "A"}
            </div>
            <span
              className={cn(
                "border-card absolute right-0 bottom-0 size-3 rounded-full border-2 shadow-sm",
                phase === "profile" ? "bg-zinc-400" : sessionReady ? "bg-emerald-500" : "bg-amber-500"
              )}
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-foreground truncate text-base font-semibold tracking-tight">
              {handedToSales ? assignedSalesName || "Sales team" : "Alex"}
            </p>
            <p className="text-muted-foreground text-xs">
              Steel Building Depot · {phase === "profile" ? "Your details" : headerSubtitle}
            </p>
          </div>
        </header>

        {handedToSales && phase === "ready" && (
          <div
            className="border-primary/20 bg-primary/5 text-foreground border-b px-4 py-2.5 text-xs leading-relaxed"
            role="status"
          >
            You&apos;re connected to{" "}
            <span className="font-semibold">{assignedSalesName || "our sales team"}</span>.
            They&apos;ll follow up with your quote. You can keep messaging here.
          </div>
        )}

        {phase === "profile" && (
          <form
            onSubmit={onStartChat}
            className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Save once on this device: name, email, and phone.
            </p>
            {gateErrors && (
              <div
                className="border-destructive/30 bg-destructive/10 text-destructive rounded-lg border px-3 py-2 text-sm"
                role="alert"
              >
                {gateErrors}
              </div>
            )}
            <div className="space-y-1.5">
              <label htmlFor="sbd-gate-name" className="text-muted-foreground text-xs font-medium">
                Full name <span className="text-destructive">*</span>
              </label>
              <Input
                id="sbd-gate-name"
                value={gateName}
                onChange={(e) => setGateName(e.target.value)}
                autoComplete="name"
                required
                className="bg-background h-11 rounded-xl"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="sbd-gate-email" className="text-muted-foreground text-xs font-medium">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="sbd-gate-email"
                type="email"
                value={gateEmail}
                onChange={(e) => setGateEmail(e.target.value)}
                autoComplete="email"
                required
                className="bg-background h-11 rounded-xl"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5 [&_.react-tel-input_.form-control]:border-input [&_.react-tel-input_.form-control]:focus:ring-ring [&_.react-tel-input_.form-control]:focus:border-input">
              <label htmlFor="sbd-gate-phone" className="text-muted-foreground text-xs font-medium">
                Phone <span className="text-destructive">*</span>
              </label>
              <PhoneInput
                country={"us"}
                value={gatePhone}
                onChange={(phone, country: any) => {
                  setGatePhone(phone);
                  setGatePhoneFormat(country?.format || null);
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                  id: "sbd-gate-phone",
                }}
                containerClass="!w-full"
                inputClass="!w-full !h-11 !rounded-xl !bg-background !border-input !text-foreground !text-sm focus:!ring-1 focus:!ring-ring focus:!outline-none"
                buttonClass="!bg-transparent !border-input !rounded-l-xl hover:!bg-accent"
                dropdownClass="!bg-popover !text-popover-foreground !rounded-xl !border-border !shadow-md"
              />
            </div>
            <Button type="submit" className="mt-1 h-11 w-full rounded-xl font-semibold">
              Save & open chat
            </Button>
          </form>
        )}

        {phase === "connecting" && (
          <div
            className={cn(
              "border-primary/15 bg-primary/5 text-primary flex items-center gap-2 border-b px-4 py-2.5 text-sm font-medium",
              !reducedMotion && "animate-pulse"
            )}
            role="status"
          >
            <span
              className={cn(
                "border-primary size-2 shrink-0 rounded-full border-2 border-t-transparent",
                !reducedMotion && "animate-spin"
              )}
              aria-hidden
            />
            Connecting…
          </div>
        )}

        {phase === "error" && (
          <div
            className="border-destructive/30 bg-destructive/10 text-destructive flex flex-col gap-2 border-b px-4 py-3 text-sm"
            role="alert"
          >
            <p>{bannerError || "Connection failed."}</p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="self-start"
              onClick={retryConnect}
            >
              Try again
            </Button>
          </div>
        )}

        {bannerError && phase === "ready" && (
          <div
            className="border-destructive/25 bg-destructive/8 text-destructive border-b px-4 py-2 text-xs font-medium"
            role="status"
          >
            {bannerError}
          </div>
        )}

        {phase !== "profile" && (
          <div
            ref={listRef}
            className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-3"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "animate-chat-bubble-in flex w-full",
                  m.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : m.role === "sales" || m.role === "admin"
                        ? "bg-emerald-50 text-emerald-950 border border-emerald-200/80 rounded-bl-md dark:bg-emerald-950/40 dark:text-emerald-50"
                        : "bg-card text-card-foreground border-border/80 rounded-bl-md border"
                  )}
                >
                  {m.role !== "user" && (
                    <p className="text-muted-foreground mb-1 text-[10px] font-semibold tracking-wide uppercase">
                      {m.role === "sales" ? m.senderName || "Sales" : m.role === "admin" ? m.senderName || "Admin" : "Alex"}
                    </p>
                  )}
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {alexTyping && !handedToSales && (
              <TypingIndicator label="Alex is typing" />
            )}
            {salesTyping.active && (
              <TypingIndicator
                label={`${salesTyping.name || "Sales"} is typing`}
              />
            )}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className={cn(
            "border-border/60 bg-card/90 flex shrink-0 gap-2 border-t p-3 backdrop-blur-sm",
            phase !== "ready" && "hidden"
          )}
        >
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={handedToSales ? "Message sales…" : "Message Alex…"}
            disabled={!canSend}
            className="bg-background border-border/80 h-11 flex-1 rounded-xl text-sm shadow-none"
            autoComplete="off"
            aria-label="Chat message"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!draft.trim() || !canSend}
            className="size-11 shrink-0 rounded-xl"
            aria-label="Send message"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
