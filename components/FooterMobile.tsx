import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import ContactUsDialog from "./ContactUsDialog";
import NewsletterForm from "./NewsletterForm";
import footer1 from "@/assets/footer/footer1.png";
import footer2 from "@/assets/footer/footer2.png";
import footer3 from "@/assets/footer/footer3.png";
import { useContactDetails } from "@/lib/hooks/useContactDetails";

export default function FooterMobile() {
  const { data: contactData, isLoading } = useContactDetails();

  const address = contactData?.address;
  const phone = contactData?.phone;
  const email = contactData?.email;
  const fb = contactData?.fb;
  const linkedin = contactData?.linkedIn || contactData?.linkedin;
  const twitter = contactData?.twitter;
  const instagram = contactData?.instagram;
  const youtube = contactData?.youtube;
  const copyRight = contactData?.copyRight;

  return (
    <div className="lg:hidden bg-[#F8FAFC] text-foreground w-full font-roboto">

      {/* USEFUL LINKS Section */}
      <div className="py-10 px-6 bg-white">
        <div className="mb-8 text-center">
          <h3 className="text-[#0B1E3E] font-extrabold text-2xl uppercase tracking-wider mb-2">Useful Links</h3>
          <div className="w-12 h-1 bg-[#0065E6] mx-auto rounded-full" />
        </div>
        <div className="flex flex-col">
          {[
            { name: "Home", href: "/" },
            { name: "Building Types", href: "/building-types" },
            { name: "Why Us", href: "/why-us" },
            { name: "Projects", href: "/projects" },
            { name: "About Us", href: "/about" },
          ].map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between py-4 px-2 border-b border-gray-50 text-[#1E293B] font-semibold text-lg active:bg-gray-50 transition-colors ${idx === 0 ? "border-t" : ""}`}
            >
              {link.name}
              <ArrowRight className="text-[#0065E6] w-5 h-5" />
            </Link>
          ))}
          <ContactUsDialog>
            <button className="flex items-center justify-between py-4 px-2 border-b border-gray-50 text-[#1E293B] font-semibold text-lg active:bg-gray-50 transition-colors w-full text-left">
              Contact Us
              <ArrowRight className="text-[#0065E6] w-5 h-5" />
            </button>
          </ContactUsDialog>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="py-10 px-6 space-y-4">
        {[
          { icon: MapPin, title: "ADDRESS", value: address, href: null },
          { icon: Phone, title: "TOLL FREE", value: phone, href: phone ? `tel:${phone.replace(/[^0-9+]/g, "")}` : null },
          { icon: Mail, title: "EMAIL", value: email, href: email ? `mailto:${email}` : null },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-5 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#0932A2] flex items-center justify-center flex-shrink-0 shadow-lg">
              <item.icon className="text-white w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[#0065E6] font-bold text-xs tracking-widest mb-1 uppercase">{item.title}</h4>
              {isLoading ? (
                <div className="h-5 w-40 bg-gray-200 animate-pulse rounded mt-1" />
              ) : item.href ? (
                <Link href={item.href} className="text-[#1E293B] text-base font-semibold transition-colors break-all">
                  {item.value}
                </Link>
              ) : (
                <p className="text-[#1E293B] text-base font-semibold">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-6 bg-[#0B1E3E] text-white relative">
        <div className="text-center mb-8">
          <h3 className="font-bold text-2xl uppercase tracking-wider mb-3">Get Updates & Offers</h3>
          <p className="text-white/80 text-base leading-relaxed max-w-xs mx-auto">
            Subscribe for the latest building tips and special offers.
          </p>
        </div>

        <div className="mb-10 max-w-sm mx-auto">
          <NewsletterForm />
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          {isLoading ? (
            <>
              <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse" />
              <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse" />
            </>
          ) : (
            <>
              {fb && (
                <Link href={fb} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Facebook className="w-6 h-6" />
                </Link>
              )}
              {linkedin && (
                <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Linkedin className="w-6 h-6" />
                </Link>
              )}
              {twitter && (
                <Link href={twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Twitter className="w-6 h-6" />
                </Link>
              )}
              {instagram && (
                <Link href={instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Instagram className="w-6 h-6" />
                </Link>
              )}
              {youtube && (
                <Link href={youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Youtube className="w-6 h-6" />
                </Link>
              )}
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 opacity-70">
          <Image src={footer1} alt="BBB" className="h-10 w-auto object-contain" />
          <Image src={footer2} alt="IAS" className="h-10 w-auto object-contain" />
          <Image src={footer3} alt="Google Reviews" className="h-10 w-auto object-contain grayscale brightness-0 invert" />
        </div>

        {/* Floating elements placeholder */}
        <div className="absolute right-6 -top-6">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-xl">
            <ArrowRight className="text-white w-6 h-6 -rotate-90" />
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          {isLoading ? (
            <div className="h-4 w-60 bg-white/20 animate-pulse rounded mx-auto" />
          ) : (
            <p className="text-white/40 text-xs font-medium tracking-wide">
              {copyRight || ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
