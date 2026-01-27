"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  const t = useTranslations("company");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-10">
          <div className="@container">
            <div
              className="flex min-h-[440px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(18, 22, 23, 0.7), rgba(18, 22, 23, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeu0jISFcjIshxsOR2JLqvewfQ9ARZ4ndUqm4b5aY-Bnn1RWU7GkWnEL3vV_04XQ-BgHNrdTzEg-kiP7detrmKmyTrBwFgiUkiVAHqb17kWhaNej23ZSAgJ3M8LRRZVBm18KYIakxx6cUAp9nJvBg_JaFAaWdgU-rQi9kohrSOLyyTZTY2f4HoLzbQMIIW3WN-pLYe_Ag8Ij8AMEc6Qad-lB9Lap8E-bLFYvKWi4YDz_oMPq5D6mZa-Y4VaZAhXr7uKNaSZ1cU0us")',
              }}
            >
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="text-white/90 text-lg font-normal leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>
              <div
                className="flex gap-4 mt-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <button
                  onClick={() => scrollToSection("mission")}
                  className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  {t("hero.missionButton")}
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Grid */}
        <section className="w-full max-w-[1280px] px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-primary text-3xl font-black">
              {t("stats.experience.value")}
            </p>
            <p className="text-[#677e83] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {t("stats.experience.label")}
            </p>
          </div>
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-primary text-3xl font-black">
              {t("stats.distributed.value")}
            </p>
            <p className="text-[#677e83] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {t("stats.distributed.label")}
            </p>
          </div>
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-primary text-3xl font-black">
              {t("stats.hubs.value")}
            </p>
            <p className="text-[#677e83] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {t("stats.hubs.label")}
            </p>
          </div>
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-primary text-3xl font-black">
              {t("stats.compliant.value")}
            </p>
            <p className="text-[#677e83] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
              {t("stats.compliant.label")}
            </p>
          </div>
        </section>
        {/* Journey & Global Presence */}
        <section
          id="mission"
          className="w-full max-w-[1280px] px-10 py-12 flex flex-col md:flex-row gap-12"
        >
          <div className="flex-1">
            <h2 className="text-[#121617] dark:text-white text-3xl font-bold mb-8">
              {t("journey.title")}
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-4">
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="text-primary">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <div className="w-[2px] bg-primary/20 h-12 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8">
                <p className="text-[#121617] dark:text-white text-lg font-bold">
                  {t("journey.founded.label")}
                </p>
                <p className="text-[#677e83] dark:text-gray-400 text-base">
                  {t("journey.founded.description")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div className="w-[2px] bg-primary/20 h-12 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8">
                <p className="text-[#121617] dark:text-white text-lg font-bold">
                  {t("journey.expanded.label")}
                </p>
                <p className="text-[#677e83] dark:text-gray-400 text-base">
                  {t("journey.expanded.description")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-primary">
                  <span className="material-symbols-outlined">
                    local_shipping
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-[#121617] dark:text-white text-lg font-bold">
                  {t("journey.global.label")}
                </p>
                <p className="text-[#677e83] dark:text-gray-400 text-base">
                  {t("journey.global.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold">{t("map.title")}</h3>
              <p className="text-sm text-[#677e83] dark:text-gray-400 mt-1">
                {t("map.subtitle")}
              </p>
            </div>
            <div
              className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, #206d7e 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="material-symbols-outlined text-[300px]">
                  map
                </span>
              </div>
              {/* Map Pins */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-white dark:bg-gray-900 p-2 rounded text-[10px] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold">Regional Sales Office</p>
                  <p>Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex gap-4 text-xs font-medium uppercase tracking-tighter">
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-primary"></span> Sales
                Office
              </div>
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-primary/40"></span>{" "}
                Regional Coverage
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="w-full max-w-[1280px] px-10 py-20">
          <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black">
                {t("sustainability.title")}
              </h2>
              <p className="text-white/80 text-lg">
                {t("sustainability.description")}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold">
                    {t("sustainability.emission.value")}
                  </p>
                  <p className="text-white/60 text-sm">
                    {t("sustainability.emission.label")}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    {t("sustainability.waste.value")}
                  </p>
                  <p className="text-white/60 text-sm">
                    {t("sustainability.waste.label")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="relative size-64 md:size-80">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-6xl mb-4">
                      compost
                    </span>
                    <p className="font-bold text-sm uppercase tracking-widest">
                      {t("sustainability.badge")}
                    </p>
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
