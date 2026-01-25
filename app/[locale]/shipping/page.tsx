"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ShippingPage() {
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
              Shipping Policy
            </span>
          </nav>

          <div className="animate-slide-up">
            <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
              Shipping Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Last Updated: January 21, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Shipping Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  ChemDist Global specializes in the safe, compliant
                  transportation of chemical products worldwide. Our shipping
                  operations adhere to all applicable DOT (Department of
                  Transportation), IATA (International Air Transport
                  Association), and IMDG (International Maritime Dangerous
                  Goods) regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Domestic Shipping (United States)
                </h2>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Standard Ground Shipping
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>Delivery Time:</strong> 5-7 business days
                    </li>
                    <li>
                      <strong>Cost:</strong> Calculated by weight and
                      destination
                    </li>
                    <li>
                      <strong>Carriers:</strong> FedEx Ground, UPS Ground,
                      specialized hazmat carriers
                    </li>
                    <li>
                      <strong>Tracking:</strong> Provided via email upon
                      shipment
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Expedited Shipping
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>2-Day Express:</strong> +35% surcharge
                    </li>
                    <li>
                      <strong>Next Day Air:</strong> +75% surcharge
                    </li>
                    <li>
                      <strong>Note:</strong> Hazmat air shipments subject to
                      additional restrictions and fees
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Bulk Tanker Delivery
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>Minimum:</strong> 5,000 liters / 1,320 gallons
                    </li>
                    <li>
                      <strong>Delivery Time:</strong> 7-14 business days
                    </li>
                    <li>
                      <strong>Requirements:</strong> Dedicated receiving
                      equipment, hazmat certified facility
                    </li>
                    <li>
                      <strong>Scheduling:</strong> Coordinated with customer's
                      operations team
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  International Shipping
                </h2>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Regional Hubs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="font-bold text-primary mb-1">North America</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Houston, TX Hub
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      3-5 days (Canada/Mexico)
                    </p>
                  </div>
                  <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="font-bold text-primary mb-1">Europe</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Rotterdam Hub
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      7-14 days (EU)
                    </p>
                  </div>
                  <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="font-bold text-primary mb-1">Asia-Pacific</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Singapore Hub
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      10-21 days
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 mt-8 text-gray-900 dark:text-white">
                  Customs and Documentation
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Commercial invoices and packing lists included</li>
                  <li>
                    SDS and CoA provided in destination language where required
                  </li>
                  <li>REACH compliance documentation for EU shipments</li>
                  <li>
                    Customer responsible for import duties, taxes, and brokerage
                    fees
                  </li>
                  <li>Export licenses arranged for controlled substances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hazardous Materials Shipping
                </h2>

                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 p-6 rounded-xl mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl">
                      warning
                    </span>
                    <div>
                      <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">
                        Safety Requirements
                      </h3>
                      <p className="text-sm text-red-800 dark:text-red-400 leading-relaxed">
                        All hazardous materials are shipped in UN-certified
                        packaging with proper labeling, placarding, and
                        documentation per 49 CFR regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Hazard Classes We Handle
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">Class 3</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Flammable Liquids
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">Class 6.1</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Toxic Substances
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">Class 8</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Corrosives
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">Class 9</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Miscellaneous
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">ORM-D</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Consumer Goods
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-3 rounded-lg text-center">
                    <p className="font-bold text-sm">Non-Hazmat</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Safe Transport
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong>Additional Fees:</strong> Hazmat shipping incurs a
                  $35-$75 surcharge per package depending on classification and
                  shipping method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Order Processing Timeline
                </h2>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 font-bold text-primary">
                      Day 0
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Order received and validated
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 font-bold text-primary">
                      Day 1-2
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Product picking, quality check, packaging
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 font-bold text-primary">
                      Day 3
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Carrier pickup, tracking number issued
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 font-bold text-primary">
                      Day 3-10
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      In transit (varies by destination)
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-4">
                  Note: Custom formulations and specialty chemicals may require
                  additional lead time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Damaged or Lost Shipments
                </h2>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Inspection Requirements
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                  <li>Inspect all shipments immediately upon delivery</li>
                  <li>Note any visible damage on delivery receipt</li>
                  <li>Photograph damaged packaging before opening</li>
                  <li>
                    Report damage within 48 hours to claims@chemdist-global.com
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Claims Process
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We work with carriers to resolve damage claims. For shipments
                  insured by ChemDist Global, we will replace damaged product at
                  no charge once claim is validated. Lost shipments are
                  investigated with carrier; replacement sent after 10 business
                  days if unrecovered.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Temperature-Controlled Shipping
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Available for temperature-sensitive chemicals:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>
                    <strong>Cold Chain (2-8°C):</strong> Insulated packaging
                    with gel packs, +$45
                  </li>
                  <li>
                    <strong>Frozen Shipping (-20°C):</strong> Dry ice shipping,
                    +$85 (air freight restrictions apply)
                  </li>
                  <li>
                    <strong>Ambient Control (15-25°C):</strong> Available for
                    heat-sensitive organics, +$25
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Contact Logistics Team
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="font-bold mb-4">
                    For shipping inquiries and tracking assistance:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email: logistics@chemdist-global.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Phone: +1 (713) 555-0195
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Hours: Monday-Friday, 8:00 AM - 6:00 PM CST
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Emergency Spill/Incident Hotline (24/7): +1 (800) 424-9300
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
