"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import NewsletterForm from "./NewsletterForm";
import FooterSection from "./FooterSection";

// Import types if needed, but since we are passing props we can just use any or define them here
interface FooterClientProps {
  address: string;
  email: string;
  fb: string | null;
  linkedin: string | null;
  twitter: string | null;
  copyRight: string;
  logos: {
    theSteelLogo: any;
    fbLogo: any;
    linkedinLogo: any;
    twitterLogo: any;
    footer1: any;
    footer2: any;
    footer3: any;
  };
}

export default function FooterClient({
  address,
  email,
  fb,
  linkedin,
  twitter,
  copyRight,
  logos,
}: FooterClientProps) {
  const [openSection, setOpenSection] = useState<string | null>("contact");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-slate-50 text-slate-900 font-sans border-t border-slate-200">
      <Container className="py-12 lg:py-16">
        {/* Top: Logo Centered (as requested) */}
        <div className="flex flex-col items-center mb-6 lg:mb-8 text-center">
          <Image
            src={logos.theSteelLogo}
            alt="Steel Building Depot"
            className="w-auto h-24 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-10 border-t border-slate-200 pt-8 md:pt-16">
          {/* Column 1: Contact */}
          <FooterSection
            title="Contact Info"
            isOpen={openSection === "contact"}
            onToggle={() => toggleSection("contact")}
          >
            <div className="flex flex-col gap-6 text-sm items-center md:items-start text-center md:text-left">
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase tracking-tighter text-[10px] mb-1">Customer Support</span>
                <div className="flex flex-col gap-1 items-center md:items-start">
                  <Link href="tel:8888688680" className="text-slate-800 hover:text-primary transition-colors font-semibold text-base">
                    +1 888-868-8680 <span className="text-[10px] font-bold text-primary uppercase ml-1">(Toll Free)</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase tracking-tighter text-[10px] mb-1">Office</span>
                <span className="text-slate-600 leading-snug">{address}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase tracking-tighter text-[10px] mb-1">Email</span>
                <Link href={`mailto:${email}`} className="text-slate-800 hover:text-primary transition-colors font-semibold">{email}</Link>
              </div>
            </div>
          </FooterSection>

          {/* Column 2: Quick Links */}
          <FooterSection
            title="Quick Links"
            isOpen={openSection === "links"}
            onToggle={() => toggleSection("links")}
            className="lg:pl-4"
          >
            <nav className="flex flex-col gap-5 text-sm font-medium items-center md:items-start text-center md:text-left">
              <Link href="/building-types" className="text-slate-600 hover:text-primary transition-colors">Building Types</Link>
              <Link href="/why-us" className="text-slate-600 hover:text-primary transition-colors">Why Us</Link>
              <Link href="/projects" className="text-slate-600 hover:text-primary transition-colors">Projects</Link>
              <Link href="#" className="text-slate-600 hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </FooterSection>

          {/* Column 3: Newsletter */}
          <FooterSection
            title="Stay Updated"
            isOpen={openSection === "newsletter"}
            onToggle={() => toggleSection("newsletter")}
          >
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <p className="text-sm text-slate-600 leading-relaxed">Join our newsletter for the latest building trends and offers.</p>
              <div className="w-full max-w-sm md:max-w-none">
                <NewsletterForm />
              </div>
            </div>
          </FooterSection>

          {/* Column 4: Follow Us & Accreditation */}
          <FooterSection
            title="Follow Us"
            isOpen={openSection === "follow"}
            onToggle={() => toggleSection("follow")}
          >
            <div className="flex flex-col gap-10 items-center md:items-start text-center md:text-left">
              <div className="flex gap-6 items-center">
                <Link href={fb || "#"} aria-label="Facebook" className="hover:scale-110 transition-transform">
                  <Image src={logos.fbLogo} alt="Facebook" className="h-9 w-9" />
                </Link>
                <Link href={linkedin || "#"} aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                  <Image src={logos.linkedinLogo} alt="LinkedIn" className="h-9 w-9" />
                </Link>
{/* <Link href={twitter || "#"} aria-label="Twitter" className="hover:scale-110 transition-transform">
                  <Image src={logos.twitterLogo} alt="Twitter" className="h-9 w-9" />
                </Link> */}
              </div>
              
              <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start pt-8 border-t border-slate-200 w-full md:w-auto">
                <Image src={logos.footer1} alt="Accreditation 1" className="h-10 w-auto" />
                <Image src={logos.footer2} alt="Accreditation 2" className="h-10 w-auto" />
                <Image src={logos.footer3} alt="Accreditation 3" className="h-10 w-auto" />
              </div>
            </div>
          </FooterSection>
        </div>
      </Container>

      <div className="bg-slate-900 py-6">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs md:text-sm">
          <p>{copyRight}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
