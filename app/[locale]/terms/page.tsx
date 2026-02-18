"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of Service
            </span>
          </nav>

          <div className="animate-slide-up">
            <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Last Updated: January 21, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing or using Chemlink Trading's services, you agree to
                  be bound by these Terms of Service. These terms apply to all
                  users, including customers, vendors, and visitors. If you do
                  not agree with any part of these terms, you may not access our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  2. Chemical Product Sales
                </h2>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  2.1 Eligibility
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Purchases of chemicals are restricted to qualified business
                  entities with proper licensing and demonstrated legitimate
                  use. We reserve the right to verify credentials and refuse
                  service.
                </p>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  2.2 Product Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  While we strive for accuracy, chemical specifications,
                  availability, and pricing are subject to change. Safety Data
                  Sheets (SDS) and Certificates of Analysis (CoA) are provided
                  for reference and do not constitute warranties beyond stated
                  specifications.
                </p>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  2.3 Minimum Orders
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Minimum order quantities and values may apply. Bulk pricing is
                  available for qualifying volumes. Custom formulations and
                  specialty chemicals may require lead times of 7-30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  3. Pricing and Payment
                </h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>
                    Prices do not include shipping, handling, taxes, or customs
                    duties
                  </li>
                  <li>
                    Payment terms: Net 30 for approved accounts, prepayment for
                    new customers
                  </li>
                  <li>
                    We accept wire transfer, credit card (with processing fee),
                    and purchase orders
                  </li>
                  <li>Late payments subject to 1.5% monthly interest charge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  4. Shipping and Delivery
                </h2>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  4.1 Hazardous Materials Shipping
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  All shipments comply with DOT, IATA, IMDG, and local hazmat
                  regulations. Customer is responsible for ensuring receiving
                  facilities are authorized and equipped for hazardous
                  materials.
                </p>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  4.2 Delivery Terms
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Standard delivery: 5-10 business days (domestic)</li>
                  <li>
                    International shipping: 10-30 days depending on destination
                  </li>
                  <li>Risk of loss passes to buyer upon delivery to carrier</li>
                  <li>Expedited shipping available with surcharge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  5. Returns and Refunds
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Due to the nature of chemical products:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>
                    Returns accepted only for manufacturing defects or shipping
                    errors
                  </li>
                  <li>
                    Must be reported within 48 hours of delivery with
                    photographic evidence
                  </li>
                  <li>
                    Opened containers or products exposed to contamination
                    cannot be returned
                  </li>
                  <li>
                    Return authorization (RMA) required before returning any
                    product
                  </li>
                  <li>Restocking fee of 25% applies to approved returns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  6. Safety and Compliance
                </h2>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  6.1 Customer Obligations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Customers must:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>
                    Review SDS before use and implement proper safety protocols
                  </li>
                  <li>Ensure personnel are trained in chemical handling</li>
                  <li>Comply with local, state, and federal regulations</li>
                  <li>Maintain required permits and licenses</li>
                  <li>
                    Properly dispose of chemicals per environmental regulations
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                  6.2 Prohibited Uses
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Products may not be used for illegal purposes, weapons
                  manufacturing, or in violation of export controls. We report
                  suspicious transactions to appropriate authorities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  7. Liability and Warranties
                </h2>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  7.1 Limited Warranty
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Products are warranted to meet stated specifications at time
                  of shipment. No other warranties, express or implied,
                  including merchantability or fitness for particular purpose.
                </p>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  7.2 Limitation of Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Chemlink Trading's liability is limited to the purchase price
                  of the product. We are not liable for consequential,
                  incidental, or indirect damages including loss of profits,
                  business interruption, or personal injury resulting from
                  product use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  8. Intellectual Property
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All content on this website including text, graphics, logos,
                  and technical data is owned by Chemlink Trading and protected
                  by copyright. Customers may not reproduce, distribute, or
                  create derivative works without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  9. Dispute Resolution
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Any disputes shall be resolved through:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Good faith negotiation between parties</li>
                  <li>Mediation administered by AAA</li>
                  <li>Binding arbitration in Houston, Texas</li>
                </ol>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  These terms are governed by Texas law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  10. Contact Information
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="font-bold mb-2">Legal Department</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email: info@chemlinktrading.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Phone: +1 (713) 555-0198
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Chemlink Trading Distribution Inc.
                    <br />
                    1450 Energy Corridor, Suite 200
                    <br />
                    Houston, TX 77032, USA
                  </p>
                </div>
              </section>

              <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  These terms may be updated periodically. Continued use of
                  services after changes constitutes acceptance of modified
                  terms.
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
