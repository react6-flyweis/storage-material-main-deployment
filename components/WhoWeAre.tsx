import React from "react";
import Container from "./Container";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <Container as="div">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Who We Are
          </h2>

          <div className="max-w-[1130px] mx-auto space-y-10 font-['Inter'] font-normal text-[#3A3A3A] text-xl md:text-[28px] leading-relaxed md:leading-[40px]">
            <p>
              Steel Building Depot is a trusted provider of custom steel building
              solutions, offering everything from garages and workshops to
              large-scale commercial and agricultural structures.
            </p>

            <p>
              We combine engineering expertise, advanced manufacturing and
              customer-first service to deliver steel buildings designed for
              real-world performance—no matter the size or complexity of your
              project.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
