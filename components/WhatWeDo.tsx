import whatWeDoImg from "@/assets/what-we-do.png";

export default function WhatWeDo() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${whatWeDoImg.src})`,
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
        aria-hidden
      />

      <div className="relative mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          What We Do
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Complete Steel Building Solutions by Steel Building Depot
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          At Steel Building Depot, we design, manufacture and deliver
          pre-engineered steel building kits customized for:
        </p>

        <ul className="list-disc list-inside text-center text-lg text-gray-700 space-y-2">
          <li>Residential garages &amp; workshops</li>
          <li>Agricultural barns &amp; storage buildings</li>
          <li>Commercial warehouses &amp; industrial facilities</li>
          <li>Barndominiums &amp; multi-use structures</li>
          <li>Aircraft hangars &amp; specialty buildings</li>
        </ul>

        <p className="text-lg text-gray-700 mt-6">
          Each building is engineered to meet local wind, snow, and seismic
          codes, ensuring safety, compliance, and long-term performance.
        </p>
      </div>
    </section>
  );
}
