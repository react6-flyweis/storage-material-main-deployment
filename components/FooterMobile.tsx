import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowRight, MessageCircle } from "lucide-react";
import ContactUsDialog from "./ContactUsDialog";
import NewsletterForm from "./NewsletterForm";
import footer1 from "@/assets/footer/footer1.png";
import footer2 from "@/assets/footer/footer2.png";
import footer3 from "@/assets/footer/footer3.png";

export default function FooterMobile() {
  const address = `1995 G Ave, Red Oak, IA 51566`;
  const phone = "888-868-8680";
  const email = "info@steelbuildingdepot.com";
  const fb = "https://www.facebook.com/profile.php?id=61582635286885";
  const linkedin = "https://www.linkedin.com/company/113053006/admin/dashboard/";

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
            { name: "About Us", href: "/about-us" },
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
          { icon: Phone, title: "TOLL FREE", value: phone, href: `tel:${phone.replace(/-/g, "")}` },
          { icon: Mail, title: "EMAIL", value: email, href: `mailto:${email}` },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-5 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#0932A2] flex items-center justify-center flex-shrink-0 shadow-lg">
              <item.icon className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#0065E6] font-bold text-xs tracking-widest mb-1 uppercase">{item.title}</h4>
              {item.href ? (
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
          <Link href={fb} target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href={linkedin} target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 opacity-70">
          <Image src={footer1} alt="BBB" className="h-10 w-auto object-contain" />
          <Image src={footer2} alt="IAS" className="h-10 w-auto object-contain" />
          <Image src={footer3} alt="Google Reviews" className="h-10 w-auto object-contain grayscale brightness-0 invert" />
        </div>

        {/* Floating elements placeholder - usually these would be separate components */}
        <div className="absolute right-6 -top-6">
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-xl">
             <ArrowRight className="text-white w-6 h-6 -rotate-90" />
          </button>
        </div>
        
        <div className="absolute right-6 bottom-10">
           <div className="w-14 h-14 bg-[#0065E6] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0B1E3E]">
             <MessageCircle className="text-white w-7 h-7" />
           </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
{/* <div className="flex items-center justify-center gap-4 text-sm font-medium text-white/70 mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-of-services" className="hover:text-white transition-colors">Terms of Service</Link>
          </div> */}
          <p className="text-white/40 text-xs font-medium tracking-wide">
            Copyright © 2024 Steel Building Depot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
