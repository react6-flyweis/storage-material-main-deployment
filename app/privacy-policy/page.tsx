import React from "react";
import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Steel Building Depot",
  description: "Our privacy policy outlines how we handle and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold text-[#0B1E3E] mb-4 font-work-sans">Privacy Policy</h1>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <p className="text-amber-700 font-medium">
            Note: This page contains dummy/placeholder content for demonstration purposes.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700 font-roboto text-lg leading-relaxed">
          <p className="font-medium italic">Last updated: May 7, 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">1. Introduction</h2>
            <p>
              Welcome to Steel Building Depot. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on our website or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact data (Email, Phone, Address)</li>
              <li>Project details and building requirements</li>
              <li>Information provided through contact forms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with the requested building quotes</li>
              <li>To facilitate communication regarding your project</li>
              <li>To send you updates, special offers, and building tips (if subscribed)</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">4. Information Sharing</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0065E6] font-work-sans">5. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at info@steelbuildingdepot.com or by post to:
            </p>
            <p className="font-medium">
              Steel Building Depot<br />
              1995 G Ave, Red Oak, IA 51566<br />
              Toll Free: 888-868-8680
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
