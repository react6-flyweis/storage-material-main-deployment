import Image from "next/image";
import p1 from "../../assets/partners/customer-1.png";
import p2 from "../../assets/partners/customer-2.png";
import p3 from "../../assets/partners/customer-3.png";
import p4 from "../../assets/partners/customer-4.png";
import p5 from "../../assets/partners/customer-5.png";
import p6 from "../../assets/partners/customer-6.png";
import p7 from "../../assets/partners/customer-7.png";
import p8 from "../../assets/partners/customer-8.png";
import p9 from "../../assets/partners/customer-9.png";
import p10 from "../../assets/partners/customer-10.png";
import p11 from "../../assets/partners/customer-11.png";
import p12 from "../../assets/partners/customer-12.png";

const logos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

export default function TrustedBy() {
  return (
    <section className="py-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[22px] md:text-3xl font-extrabold tracking-tight text-left md:text-center mb-10 leading-[1.2]">
          <span className="text-primary">Trusted by</span>
          <span className="text-foreground">
            {" "}thousands of <br className="md:hidden" />
            homeowners, farmers & <br className="md:hidden" />
            businesses.
          </span>
        </h2>
      </div>
      <div className="marquee overflow-hidden relative">
        <div className="marquee__inner flex items-center gap-10 will-change-transform animate-marquee">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="marquee__item flex-none size-16 inline-flex items-center justify-center rounded-lg overflow-hidden"
              aria-hidden={idx >= logos.length}
              style={{
                background: "color-mix(in srgb, var(--card) 92%, transparent)",
              }}
            >
              <Image
                src={logo}
                alt={`partner ${(idx % logos.length) + 1}`}
                // width={64}
                // height={64}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
