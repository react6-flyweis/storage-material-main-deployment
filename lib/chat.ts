/**
 * Mr-Storage-Backend — chat REST + socket base URL.
 */
export function getChatBackendUrl(): string {
  const direct = process.env.NEXT_PUBLIC_CHAT_BACKEND_URL?.trim()
  return direct?.replace(/\/$/, "") || ""
}

export type ChatInitResponse = {
  customerId: string
  leadId: string
  customerName: string
  isReturning: boolean
  isHandedToSales?: boolean
  isQuoteReady?: boolean
}

export type ChatHistoryMessage = {
  senderType: "customer" | "ai" | "sales" | "admin"
  content: string
  createdAt: string
  isRead?: boolean
  senderName?: string
}

type ApiEnvelope<T> = {
  success: boolean
  message?: string
  data: T
}

export async function chatInit(body: {
  firstName: string
  email: string
  phone: string
  countryCode?: string
}): Promise<ChatInitResponse> {
  const base = getChatBackendUrl()
  const res = await fetch(`${base}/api/public/chat/init`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      countryCode: body.countryCode || "+1",
    }),
  })
  const json = (await res.json()) as ApiEnvelope<ChatInitResponse>
  if (!res.ok || !json.success) {
    throw new Error(json.message || "Could not start chat")
  }
  return json.data
}

export async function getChatHistory(leadId: string): Promise<ChatHistoryMessage[]> {
  const base = getChatBackendUrl()
  const res = await fetch(`${base}/api/public/chat/history/${leadId}`)
  const json = (await res.json()) as ApiEnvelope<{ messages: ChatHistoryMessage[] }>
  if (!res.ok || !json.success) {
    throw new Error(json.message || "Could not load chat history")
  }
  return json.data.messages || []
}

/** Socket.io namespace URL for /chat */
export function getChatSocketUrl(): string {
  const base = getChatBackendUrl()
  return `${base}/chat`
}



/**
 * Socket.IO transports. Apache/nginx often proxy polling but not WS upgrade.
 * - Proxied (same-origin): polling only (Next rewrite).
 * - Direct cross-origin backend URL: polling only (matches curl polling success).
 * - Same host: allow websocket upgrade when available.
 */
export function getChatSocketTransports(): Array<"polling" | "websocket"> {
  return ["polling", "websocket"]
}

export function getChatSocketClientOptions(): {
  transports: Array<"websocket" | "polling">
  autoConnect: true
} {
  return {
    transports: getChatSocketTransports(),
    autoConnect: true,
  }
}
