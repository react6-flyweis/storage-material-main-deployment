"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import GetAQuoteDialog from "../GetAQuoteDialog";
import theSteelLogo from "@/assets/logo/logo2.svg";
import Container from "../Container";
import {
  RotateCcw,
  Share2,
  Home,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import ContactUsDialog from "../ContactUsDialog";
import { OptionsMenu } from "./OptionsMenu";

export default function DesignerHeader() {
  return (
    <header className="bg-secondary text-white">
      <Container className="h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Steel Building Depot Logo"
            className="flex items-center gap-3"
          >
            <Image
              src={theSteelLogo}
              alt="Steel Building Depot Logo"
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden sm:flex items-center gap-3">
            <Button size="sm" className="bg-white/20 rounded">
              <RotateCcw size={16} />
              Reset View
            </Button>

            <OptionsMenu>
              <Button
                size="sm"
                className="rounded bg-white/20 flex items-center gap-2"
              >
                Options
                <ChevronDown size={16} />
              </Button>
            </OptionsMenu>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <GetAQuoteDialog>
              <Button className="rounded" size="default">
                Get a Quote
              </Button>
            </GetAQuoteDialog>
            <Button
              variant="ghost"
              size="icon"
              className="p-2 relative group"
              onClick={() => {
                const url = window.location.href;
                if (navigator.share) {
                  navigator
                    .share({
                      title: "My Building Design",
                      url: url,
                    })
                    .catch(() => { });
                } else {
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard!");
                }
              }}
            >
              <Share2 />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Share Design
              </span>
            </Button>
            <Link href="/" aria-label="Home" className="text-white/90">
              <Button variant="ghost" size="icon" className="p-2">
                <Home />
              </Button>
            </Link>
          </div>

          {/* Mobile: show compact contact button, hide quote per request */}
          <div className="sm:hidden flex items-center gap-2">
            <ContactUsDialog>
              <Button variant="ghost" size="icon" className="text-white">
                <MessageSquare size={20} />
              </Button>
            </ContactUsDialog>
          </div>
        </div>
      </Container>
    </header>
  );
}
