import React from "react";
import Container from "@/components/Container";

export const metadata = {
  title: "Terms of Services | Steel Building Depot",
  description: "Terms and conditions for using the Steel Building Depot website and services.",
};

export default function TermsOfServices() {
  return (
    <main className="min-h-screen bg-white py-20">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold text-[#0B1E3E] mb-8 font-work-sans">Terms of Services</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700 font-roboto text-lg leading-relaxed">
          <p className="font-medium italic">Effective date: May 7, 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">1. Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Services and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Steel Building Depot's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">3. Disclaimer</h2>
            <p>
              The materials on Steel Building Depot's website are provided on an 'as is' basis. Steel Building Depot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">4. Limitations</h2>
            <p>
              In no event shall Steel Building Depot or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States and the State of Iowa, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium">
              Steel Building Depot<br />
              1995 G Ave, Red Oak, IA 51566<br />
              Email: info@steelbuildingdepot.com
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
