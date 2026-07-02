"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import theSteelLogo from "@/assets/logo/logo2.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import GetAQuoteDialog from "./GetAQuoteDialog";
import ContactUsDialog from "./ContactUsDialog";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Building Types", href: "/building-types" },
  { label: "Why Us", href: "/why-us" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <header className="bg-secondary text-white">
      <Container className="h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Steel Building Depot Home"
            className="flex items-center gap-3"
          >
            <Image
              className="h-8 w-auto"
              src={theSteelLogo}
              alt="Steel Building Depot Logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          {/* Center: Nav */}
          <nav className="hidden md:flex items-center gap-12  font-medium">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-md font-medium hover:text-primary transition-colors",
                    active ? "text-primary" : "text-white/90"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTAs + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <ContactUsDialog>
                <Button
                  className="text-primary rounded min-w-36"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </ContactUsDialog>
              <GetAQuoteDialog>
                <Button className="rounded min-w-36">Get a Quote</Button>
              </GetAQuoteDialog>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block text-sm font-medium py-2 px-2 rounded-md hover:bg-white/5",
                  pathname === item.href ? "text-[#64A9FF]" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 flex gap-2">
              <ContactUsDialog>
                <Button
                  variant="outline"
                  className="flex-1 text-primary border-primary rounded"
                >
                  Contact Us
                </Button>
              </ContactUsDialog>
              <GetAQuoteDialog>
                <Button className="flex-1 rounded">Get a Quote</Button>
              </GetAQuoteDialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
