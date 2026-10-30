import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Steel Building Depot",
  description:
    "Privacy Policy - Steel Investments LLC (dba Steel Building Depot). Effective / last updated: October 29, 2026.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 md:py-20 text-gray-900 font-roboto">
        <Container className="max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1E3E] font-work-sans mb-3">
              Privacy Policy
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
              This Policy explains how we handle personal information when you use our website, apps,
              chat, forms, and related services (&ldquo;Services&rdquo;). Use of the Services is also subject to
              our{" "}
              <Link href="/terms-of-use" className="text-[#0065E6] hover:underline font-medium">
                Terms of Use
              </Link>
              .
            </p>

            {/* Who we are */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Who we are</h2>
              <div className="grid grid-cols-[140px_1fr] gap-y-2 text-base md:text-lg">
                <span className="font-semibold text-gray-700">Legal name</span>
                <span>Steel Investments LLC</span>

                <span className="font-semibold text-gray-700">Brand</span>
                <span>Steel Building Depot</span>

                <span className="font-semibold text-gray-700">Address</span>
                <span>1851 Madison Ave, Suite 300, Council Bluffs, IA 51503, USA</span>

                <span className="font-semibold text-gray-700">Phone</span>
                <a href="tel:7124663825" className="text-[#0065E6] hover:underline">
                  712-466-3825
                </a>

                <span className="font-semibold text-gray-700">Contact</span>
                <a href="mailto:info@steelbuildingdepot.com" className="text-[#0065E6] hover:underline">
                  info@steelbuildingdepot.com
                </a>
              </div>
            </section>

            {/* What we collect */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">What we collect</h2>
              <p>
                Name, email, phone number, company, messages, and account details you provide. We also use
                basic technical data needed to run and secure the Services (for example login sessions).
                Passwords are stored hashed.
              </p>
            </section>

            {/* How we use it */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">How we use it</h2>
              <p>
                To respond to your requests; provide quotes, invoices, and project updates; send account
                verification (OTP); and operate our apps.
              </p>
              <p className="font-semibold text-gray-900">We do not sell your personal information.</p>
              <p className="font-semibold text-gray-900">
                We do not share your personal information with third parties for their marketing.
              </p>
            </section>

            {/* SMS (text messaging) */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">SMS (text messaging)</h2>
              <p>
                If you give us your mobile number, we may send service texts (OTP, quotes, invoices,
                project updates).
              </p>
              <p>
                Marketing / promotional SMS are sent only if you separately opt in (for example an optional
                unchecked checkbox). Consent to marketing SMS is not required to buy from us.
              </p>
              <p>When you opt in to promotional texts:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>We store your number and opt-in time.</li>
                <li>
                  <strong>
                    We do not sell or share your SMS opt-in data or personal information with third parties
                    for marketing purposes.
                  </strong>
                </li>
                <li>
                  Your number is used only to send the messages you agreed to receive (delivered through our
                  messaging service).
                </li>
              </ul>
              <p>
                <strong>Message and data rates may apply. Frequency varies.</strong>
              </p>
              <p>
                Reply <strong>STOP</strong> to cancel. Reply <strong>HELP</strong> for help, or call{" "}
                <a href="tel:7124663825" className="text-[#0065E6] hover:underline">
                  712-466-3825
                </a>{" "}
                / email{" "}
                <a href="mailto:info@steelbuildingdepot.com" className="text-[#0065E6] hover:underline">
                  info@steelbuildingdepot.com
                </a>
                .
              </p>
              <p>
                More program details:{" "}
                <Link href="/terms-of-use#sms" className="text-[#0065E6] hover:underline">
                  Terms of Use — SMS
                </Link>
                .
              </p>
            </section>

            {/* App / account data (Google Play) */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">
                App / account data (Google Play)
              </h2>
              <p>
                If you use our mobile or web apps, account data is used only to provide the Services to you.
                You may request access, correction, or deletion of your account data by emailing{" "}
                <a
                  href="mailto:info@steelbuildingdepot.com?subject=Privacy%20Request"
                  className="text-[#0065E6] hover:underline"
                >
                  info@steelbuildingdepot.com
                </a>{" "}
                with subject <strong>Privacy Request</strong>.
              </p>
            </section>

            {/* Children */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Children</h2>
              <p>Services are not directed to anyone under 18.</p>
            </section>

            {/* Changes */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0B1E3E] font-work-sans">Changes</h2>
              <p>
                We may update this Policy. The current version will be posted with a revised &ldquo;last
                updated&rdquo; date.
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
