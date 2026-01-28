"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("home");
  const [searchQuery, setSearchQuery] = useState("");
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    document.title =
      "Chemlink | Premium Chemical Distribution & Supply Chain Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. Delivering premium chemicals with 99.8% on-time delivery. Serving packaging, coatings, plastics, and industrial manufacturing.",
      );
    }
  }, []);

  // Reveal industry descriptions when they enter the viewport (mobile/tablet friendly)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.6 },
    );

    descriptionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(
        `/${locale}/catalog?search=${encodeURIComponent(searchQuery.trim())}`,
      );
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="relative rounded-2xl overflow-hidden bg-primary/10 min-h-[520px] flex flex-col justify-center">
              {/* Background Pattern/Image */}
              <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD6ni-X_i0Dn_Fsy0VWs_73B_gncGboA0bkmp9P-gI3a8ab8yFpacKL5WbqYErFSCtWtv2XHZxg_YwZ6K8IrXDLZspDmP58U7DWZHEbM2WDH9VEzeDLO5KfUBWkHdCn2gJ4GRbUL2Yx5XMzf4-_pDHAZsXQdVifHOFgZh2meOEacFDj1V66-NTifu5J2-qa6NWwkTksSi0xxIwfs4Y5qT66ffIJZ2fcvY4VfLr0h6ARqE6-zy-zPI-kjhkTPRVRVRVOWvC8IIfRfM")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent z-10"></div>
              <div className="relative z-20 px-8 lg:px-16 max-w-2xl">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight animate-slide-up">
                  {t("hero.title")}
                </h1>
                <p
                  className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed font-medium animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t("hero.subtitle")}
                </p>
                <div
                  className="flex flex-wrap gap-4 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link href={`/${locale}/contact`}>
                    <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      {t("hero.contactUs")}
                    </button>
                  </Link>
                  <Link href={`/${locale}/catalog`}>
                    <button className="px-8 py-4 bg-primary text-white border border-white/30 font-bold rounded-xl hover:bg-primary/80 hover:-translate-y-1 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">science</span>
                      {t("hero.cta")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Quick Access */}
        <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-30">
          <form
            onSubmit={handleSearch}
            className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-gray-400 py-2"
                placeholder={t("search.placeholder")}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </section>

        {/* Industries Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-12 animate-fade-in">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                {t("industries.title")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {t("industries.subtitle")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Packaging & Food Processing */}
            <div
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(18, 22, 23, 0.9) 0%, rgba(18, 22, 23, 0.1) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvxu4jnpHLWfDuA_fFBMwGBbeqfTom4-8BikSIb7pRyVeVZm18p-G_6B0GMwRWbEXpCq-9sKo3TTZnRYrREb6P1hLTy73ITGNp4V6wV3W6hng7mKmmZmkMCYuOMlJZUYLkrKGSueHVEROejdwy8LIFQvPyZKFsxOheIbpp13HH0rygPz7HYraL4venn2g5Y9zIZdIJXo8gbVpYroyAleXrre5nlKdPdRMjjZ6gVZy_ga0n53UCjLJQo384jpe-4REyJgZgQq9neiM")`,
                }}
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  {t("industries.packaging.badge")}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight min-h-[60px]">
                  {t("industries.packaging.title")}
                </h3>
                <p
                  ref={(el) => {
                    descriptionRefs.current[0] = el;
                  }}
                  className="text-gray-300 text-sm leading-relaxed min-h-[42px] opacity-0 translate-y-2 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  {t("industries.packaging.description")}
                </p>
              </div>
            </div>
            {/* Paints & Coatings */}
            <div
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(18, 22, 23, 0.9) 0%, rgba(18, 22, 23, 0.1) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqlkYQnm2ge9yDG2WU7_x_iEQaTgszGtqaJWd_ogX9mr4SisQXxtf7RQjkmFNJnY6wL8rNDDVdehzjT_rvJonLHkzPMndrtMrP-ZRIVpVs_jJLYuJ06oKyhQnBbECxESQPT1TJ2F8oCsdEOcRNRnVsKDW9bq0E7Q4gTAwfhqsEIt0fx-V6uwBzWzFI61Yuyji8uAevvTY6_uo-9HFo-iioZs6USaDM5WGzvA1oWJPXDnrxvjPHU2LbIVWDsMRQ9cpEV4b_17LAFyY")`,
                }}
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  {t("industries.coatings.badge")}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight min-h-[60px]">
                  {t("industries.coatings.title")}
                </h3>
                <p
                  ref={(el) => {
                    descriptionRefs.current[1] = el;
                  }}
                  className="text-gray-300 text-sm leading-relaxed min-h-[42px] opacity-0 translate-y-2 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  {t("industries.coatings.description")}
                </p>
              </div>
            </div>
            {/* Plastics & Industrial */}
            <div
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(18, 22, 23, 0.9) 0%, rgba(18, 22, 23, 0.1) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtUIFfvG1lTJNNriDfZ4xmS_FT4899OTKaMvNVUFnfvuMKgjVy65JaZA1PKGfKaq6DTl3QVvfC_EbVGGsvzQcBh8Lmt6Uswdn-14Fl3dWcFv2aTFw4UvDC_lZ_Vdh0Yc0gKeh28FsTQiyjh8A6Vl9iJiFjUxCDvfvKP1Vov-crFKE_mSp2jb60mOgtgnNR9Ao3JyJ0w66uyxcTXy-5DMIZbVi4IQHj_xpwbMMAJrMl7tVA5fInF8MPQiPCfacLrkCLNkt49FQwx-g")`,
                }}
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  {t("industries.plastics.badge")}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight min-h-[60px]">
                  {t("industries.plastics.title")}
                </h3>
                <p
                  ref={(el) => {
                    descriptionRefs.current[2] = el;
                  }}
                  className="text-gray-300 text-sm leading-relaxed min-h-[42px] opacity-0 translate-y-2 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  {t("industries.plastics.description")}
                </p>
              </div>
            </div>
            {/* Industrial Manufacturing */}
            <div
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(18, 22, 23, 0.9) 0%, rgba(18, 22, 23, 0.1) 60%), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800")`,
                }}
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  {t("industries.manufacturing.badge")}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight min-h-[60px]">
                  {t("industries.manufacturing.title")}
                </h3>
                <p
                  ref={(el) => {
                    descriptionRefs.current[3] = el;
                  }}
                  className="text-gray-300 text-sm leading-relaxed min-h-[42px] opacity-0 translate-y-2 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  {t("industries.manufacturing.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Logistics Module */}
        <section className="bg-white dark:bg-gray-900 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-6">
                  {t("logistics.title")}
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                  {t("logistics.subtitle")}
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        thermostat
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {t("logistics.temperature.title")}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {t("logistics.temperature.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">map</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {t("logistics.hubs.title")}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {t("logistics.hubs.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-xl">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col items-center justify-center text-gray-400 overflow-hidden relative">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #206d7e 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                    <img
                      className="w-full h-full object-cover grayscale opacity-50"
                      alt="World map highlighting global shipping routes"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCz2i_InPDmxemDZBogz8ZzjT02UBYMrItDj7GkYjbAnlNFqMjjpbxeEH4nzW7R-nT-7w2RmhfWPoCyZ5EXxU8xsXHYnDLSCTDgHLjMzYDN8W4Ih7-gt9fuKtLqaEK_maVAQNfxpxi0x21XxMEq-FvmDZVRGnPKMQgZc4cEldgvR84BnrgQ3lVuQFkieiLH2rrARX9Pfcb4eeN8nF_zwTZlO0kf34jLiD4erGywrqBl4q1GAWO2wqUBhHQmAiBzdfKJSUFN6i1z0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary px-6 py-3 rounded-full text-white font-bold flex items-center gap-2 animate-pulse-slow">
                        <span className="material-symbols-outlined text-sm">
                          public
                        </span>
                        {t("logistics.network")}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-black text-primary">
                        99.8%
                      </div>
                      <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                        {t("logistics.onTime")}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-black text-primary">
                        45k+
                      </div>
                      <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                        {t("logistics.skus")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
