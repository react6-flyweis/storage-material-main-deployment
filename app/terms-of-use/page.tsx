import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "Terms of Use | Steel Building Depot",
  description:
    "Terms of Use - Steel Investments LLC (dba Steel Building Depot). Effective / last updated: October 29, 2026.",
};

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 md:py-20 text-gray-900 font-roboto">
        <Container className="max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1E3E] font-work-sans mb-3">
              Terms of Use
            </h1>
            <p className="text-lg font-medium text-gray-700">
              Steel Investments LLC (dba Steel Building Depot)
            </p>
            <p className="text-base text-gray-600">
              <a
                href="https://www.steelbuildingdepot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0065E6] hover:underline"
              >
                https://www.steelbuildingdepot.com
              </a>
            </p>
            <p className="text-sm font-semibold text-gray-500 mt-2">
              Effective / last updated: October 29, 2026
            </p>
          </div>

          <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-800">
            <p>
              By using our website, apps, chat, forms, portals, or related online tools (&ldquo;Services&rdquo;),
              you agree to these Terms. If you do not agree, do not use the Services. Our{" "}
              <Link href="/privacy-policy" className="text-[#0065E6] hover:underline font-medium">
                Privacy Policy
              </Link>{" "}
              explains how we handle personal data.
            </p>

            {/* Company */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Company</h2>
              <p>
                Steel Investments LLC &middot; 1851 Madison Ave, Suite 300, Council Bluffs, IA 51503
              </p>
              <p>
                <a href="mailto:info@steelbuildingdepot.com" className="text-[#0065E6] hover:underline">
                  info@steelbuildingdepot.com
                </a>{" "}
                &middot;{" "}
                <a href="tel:7124663825" className="text-[#0065E6] hover:underline">
                  712-466-3825
                </a>
              </p>
            </section>

            {/* Scope */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Scope</h2>
              <p>
                These Terms cover online use of Steel Building Depot properties (website, apps, chat,
                quoting, invoicing, and related tools).
              </p>
              <p>
                They do not replace a signed project contract, accepted quote, or invoice for a specific
                job. If those documents conflict on price, delivery, or warranty,{" "}
                <strong>the project documents control that job.</strong>
              </p>
              <p>
                You must be 18+ and able to enter a contract. If you act for a company, you represent you
                are authorized to bind it.
              </p>
            </section>

            {/* Accounts and security */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Accounts and security</h2>
              <p>
                Keep passwords and OTP codes private. You are responsible for activity under your account.
                Contact{" "}
                <a href="mailto:info@steelbuildingdepot.com" className="text-[#0065E6] hover:underline">
                  info@steelbuildingdepot.com
                </a>{" "}
                for access issues.
              </p>
            </section>

            {/* Chat, forms, and quotes */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Chat, forms, and quotes</h2>
              <p>
                Information you submit should be accurate. Online estimates are for general information
                until we send an <strong>approved quote</strong> or you sign a project agreement and pay any
                required deposit.
              </p>
            </section>

            {/* Payments */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Payments</h2>
              <p>
                Invoices are due as stated. Uploading a payment receipt is a{" "}
                <strong>review request</strong>; an invoice is paid only after we verify it.
              </p>
            </section>

            {/* Acceptable use */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Acceptable use</h2>
              <p>
                Do not break the law, harass others, impersonate Steel, attack the Services, upload malware,
                or misuse another user&rsquo;s data.
              </p>
            </section>

            {/* SMS (text messaging) */}
            <section id="sms" className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">SMS (text messaging)</h2>
              <p>Steel Building Depot may text the U.S. mobile number you provide:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>
                  <strong>Service messages</strong> &mdash; OTP, quotes, invoices, reminders, project
                  updates.
                </li>
                <li>
                  <strong>Marketing messages</strong> &mdash; promotions and offers{" "}
                  <strong>only if you opt in</strong> (for example a separate optional unchecked box).
                </li>
              </ol>
              <p>
                <strong>Frequency varies. Message and data rates may apply.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Opt out:</strong> Reply <strong>STOP</strong>, or email{" "}
                  <a
                    href="mailto:info@steelbuildingdepot.com?subject=SMS%20Opt-Out"
                    className="text-[#0065E6] hover:underline"
                  >
                    info@steelbuildingdepot.com
                  </a>{" "}
                  (subject &ldquo;SMS Opt-Out&rdquo;) with your number.
                </li>
                <li>
                  <strong>Help:</strong> Reply <strong>HELP</strong> or call{" "}
                  <a href="tel:7124663825" className="text-[#0065E6] hover:underline">
                    712-466-3825
                  </a>
                  .
                </li>
                <li>
                  <strong>Privacy:</strong> We do not sell or share SMS opt-in data or personal
                  information with third parties for marketing. See our{" "}
                  <Link href="/privacy-policy" className="text-[#0065E6] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </li>
                <li>
                  <strong>Marketing SMS consent is not required to purchase.</strong>
                </li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Disclaimers</h2>
              <p>
                Services are provided <strong>&ldquo;as is&rdquo;</strong> to the extent allowed by law.
                Liability for purchased buildings or materials is governed by your{" "}
                <strong>project agreement and invoice</strong>.
              </p>
            </section>

            {/* Law */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Law</h2>
              <p>
                These Terms are governed by <strong>Iowa law</strong>. Courts in{" "}
                <strong>Pottawattamie County, Iowa</strong> have jurisdiction for disputes about the
                online Services, unless a signed project agreement says otherwise for that project.
              </p>
            </section>

            {/* Changes */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Changes</h2>
              <p>
                We may update these Terms. Continued use after the posted &ldquo;last updated&rdquo; date
                means you accept the revision.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-3 pt-4 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Contact</h2>
              <p className="font-medium text-gray-900">Steel Investments LLC — Steel Building Depot</p>
              <p>1851 Madison Ave, Suite 300, Council Bluffs, IA 51503</p>
              <p>
                <a href="mailto:info@steelbuildingdepot.com" className="text-[#0065E6] hover:underline">
                  info@steelbuildingdepot.com
                </a>{" "}
                &middot;{" "}
                <a href="tel:7124663825" className="text-[#0065E6] hover:underline">
                  712-466-3825
                </a>
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
