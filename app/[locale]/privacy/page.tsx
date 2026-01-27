"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-gray-900 dark:text-white">
              Privacy Policy
            </span>
          </nav>

          <div className="animate-slide-up">
            <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Last Updated: January 21, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  ChemDist Global collects information necessary to provide
                  chemical distribution services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>
                    Contact information (name, email, phone, company details)
                  </li>
                  <li>Shipping and billing addresses</li>
                  <li>Purchase history and product inquiries</li>
                  <li>Technical specifications and application requirements</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Process and fulfill chemical product orders</li>
                  <li>
                    Provide technical support and safety documentation (SDS)
                  </li>
                  <li>
                    Ensure regulatory compliance (REACH, EPA, FDA requirements)
                  </li>
                  <li>
                    Communicate about order status, shipments, and logistics
                  </li>
                  <li>Improve our services and product catalog</li>
                  <li>Send relevant industry updates and compliance alerts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  3. Data Security
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We implement industry-standard security measures including
                  encryption, secure socket layer (SSL) technology, and
                  restricted access controls. Chemical handling data and
                  shipping information are stored in compliance with hazardous
                  materials regulations and international data protection
                  standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  4. Third-Party Sharing
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We share information only when necessary for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Shipping carriers and logistics partners</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Regulatory compliance reporting (EPA, customs, etc.)</li>
                  <li>Laboratory testing and quality assurance services</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  5. Cookie Policy
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our website uses cookies to enhance user experience, remember
                  preferences (such as dark mode settings), and analyze site
                  traffic. You can control cookie settings through your browser
                  preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  6. Your Rights
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>
                    Request deletion of your data (subject to legal retention
                    requirements)
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  7. International Data Transfers
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  As a global chemical distributor with operations across North
                  America, Europe, and Asia-Pacific, we may transfer data
                  internationally. We ensure appropriate safeguards are in place
                  including standard contractual clauses and compliance with
                  GDPR, CCPA, and regional regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  8. Data Retention
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We retain data for as long as necessary to fulfill services
                  and comply with legal obligations. Chemical shipping records
                  are maintained per hazardous materials regulations (typically
                  3-7 years).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  9. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  For privacy-related inquiries or to exercise your rights:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="font-bold mb-2">Data Protection Officer</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email: info@chemlinktrading.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Phone: +1 (713) 555-0199
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    ChemDist Global Distribution Inc.
                    <br />
                    1450 Energy Corridor, Suite 200
                    <br />
                    Houston, TX 77032, USA
                  </p>
                </div>
              </section>

              <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  This privacy policy is subject to change. We will notify
                  registered users of material changes via email or through
                  prominent notice on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
