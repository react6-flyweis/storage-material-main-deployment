import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import NewsletterForm from "./NewsletterForm";
import theSteelLogo from "@/assets/logo/logo.svg";
import footer1 from "@/assets/footer/footer1.png";
import footer2 from "@/assets/footer/footer2.png";
import footer3 from "@/assets/footer/footer3.png";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import ContactUsDialog from "./ContactUsDialog";
import { useContactDetails } from "@/lib/hooks/useContactDetails";

export default function FooterDesktop() {
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
    <div className="hidden lg:block bg-white text-foreground border-t border-gray-100 w-full">
      <Container fluid className="max-w-[1512px] py-20 px-8 xl:px-12">
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_1.4fr_0.6fr] gap-16 xl:gap-20 items-start">
          
          {/* Column 1: Logo & Contact */}
          <div className="space-y-10 min-w-0">
            <Image
              src={theSteelLogo}
              alt="Steel Building Depot"
              className="w-auto h-14 object-contain"
            />
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="w-[50px] h-[50px] rounded-full bg-[#0932A2] border-2 border-[#0065E6] flex items-center justify-center shrink-0 mt-1 shadow-sm transition-transform group-hover:scale-105">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#0065E6] font-bold text-[20px] font-roboto leading-none mb-1">ADDRESS:</h4>
                  {isLoading ? (
                    <div className="h-6 w-60 bg-gray-200 animate-pulse rounded mt-1" />
                  ) : address ? (
                    <p className="text-[#3A3A3A] font-roboto text-[20px] leading-relaxed">{address}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-[50px] h-[50px] rounded-full bg-[#0932A2] border-2 border-[#0065E6] flex items-center justify-center shrink-0 mt-1 shadow-sm transition-transform group-hover:scale-105">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#0065E6] font-bold text-[20px] font-roboto leading-none mb-1">TOLL FREE:</h4>
                  {isLoading ? (
                    <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mt-1" />
                  ) : phone ? (
                    <Link href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-[#3A3A3A] font-roboto text-[20px] hover:text-[#0065E6] transition-colors">
                      {phone}
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-[50px] h-[50px] rounded-full bg-[#0932A2] border-2 border-[#0065E6] flex items-center justify-center shrink-0 mt-1 shadow-sm transition-transform group-hover:scale-105">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#0065E6] font-bold text-[20px] font-roboto leading-none mb-1">EMAIL:</h4>
                  {isLoading ? (
                    <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mt-1" />
                  ) : email ? (
                    <Link href={`mailto:${email}`} className="text-[#3A3A3A] font-roboto text-[20px] hover:text-[#0065E6] transition-colors break-words">
                      {email}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-8 lg:pl-4">
            <div className="space-y-1.5">
              <h3 className="text-[#0065E6] font-bold text-2xl font-work-sans" style={{ fontVariant: 'all-small-caps' }}>USEFUL LINKS</h3>
              <div className="w-[76px] h-[3px] bg-[#0065E6]" />
            </div>
            
            <nav className="flex flex-col gap-2.5 mt-12">
              {[
                { name: "Home", href: "/" },
                { name: "Building Types", href: "/building-types" },
                { name: "Why Us", href: "/why-us" },
                { name: "Projects", href: "/projects" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center gap-3 text-black font-medium text-[18px] font-roboto hover:text-[#0065E6] transition-colors group py-0.5"
                >
                  <ChevronRight className="text-[#0065E6] w-4 h-4" strokeWidth={3} />
                  {link.name}
                </Link>
              ))}
              <ContactUsDialog>
                <button className="flex items-center gap-3 text-black font-medium text-[18px] font-roboto hover:text-[#0065E6] transition-colors group py-0.5 text-left w-full">
                  <ChevronRight className="text-[#0065E6] w-4 h-4" strokeWidth={3} />
                  Contact
                </button>
              </ContactUsDialog>
            </nav>
          </div>

          {/* Column 3: Updates & Offers */}
          <div className="space-y-8 min-w-0">
            <div className="space-y-1.5">
              <h3 className="text-[#0065E6] font-bold text-2xl font-work-sans" style={{ fontVariant: 'all-small-caps' }}>GET UPDATES & OFFERS</h3>
              <div className="w-[76px] h-[3px] bg-[#0065E6]" />
            </div>
            
            <div className="space-y-8">
              <p className="text-[#6D6D6D] text-[20px] leading-[31px] font-roboto max-w-[400px]">
                Subscribe to get the latest updates, special offers, and building tips.
              </p>
              
              <NewsletterForm />

              <div className="flex flex-wrap gap-6 items-center pt-2">
                <Image src={footer1} alt="BBB" className="h-[50px] w-auto object-contain transition-all cursor-pointer" />
                <Image src={footer2} alt="IAS" className="h-[50px] w-auto object-contain transition-all cursor-pointer" />
                <Image src={footer3} alt="Google Reviews" className="h-[50px] w-auto object-contain grayscale transition-all cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-8 flex flex-col items-end">
            <div className="space-y-1.5 w-full flex flex-col items-end">
              <h3 className="text-[#0065E6] font-bold text-2xl font-work-sans" style={{ fontVariant: 'all-small-caps' }}>FOLLOW US</h3>
              <div className="w-[76px] h-[3px] bg-[#0065E6]" />
            </div>
            
            <div className="flex flex-col gap-6 pt-4 lg:pr-4">
              {isLoading ? (
                <>
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-200 animate-pulse" />
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-200 animate-pulse" />
                </>
              ) : (
                <>
                  {fb && (
                    <Link href={fb} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-[#3D445C] flex items-center justify-center hover:bg-[#0065E6] transition-all group shadow-sm">
                      <Facebook className="text-white w-6 h-6 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                  {linkedin && (
                    <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-[#3D445C] flex items-center justify-center hover:bg-[#0065E6] transition-all group shadow-sm">
                      <Linkedin className="text-white w-6 h-6 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                  {twitter && (
                    <Link href={twitter} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-[#3D445C] flex items-center justify-center hover:bg-[#0065E6] transition-all group shadow-sm">
                      <Twitter className="text-white w-6 h-6 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                  {instagram && (
                    <Link href={instagram} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-[#3D445C] flex items-center justify-center hover:bg-[#0065E6] transition-all group shadow-sm">
                      <Instagram className="text-white w-6 h-6 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                  {youtube && (
                    <Link href={youtube} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-[#3D445C] flex items-center justify-center hover:bg-[#0065E6] transition-all group shadow-sm">
                      <Youtube className="text-white w-6 h-6 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-[#0B1E3E] py-6 text-white border-t border-white/10">
        <Container fluid className="max-w-[1512px] px-8 xl:px-12">
          <div className="flex items-center justify-center gap-8 text-base font-work-sans">
            {isLoading ? (
              <div className="h-5 w-72 bg-white/20 animate-pulse rounded" />
            ) : (
              <p className="opacity-90">{copyRight || ""}</p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
