"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CareersPage() {
  const t = useTranslations("careers");
  useEffect(() => {
    document.title =
      "Chemical Distribution Careers | Jobs in Chemical Industry | ChemDist Global";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join ChemDist Global's chemical distribution team. Explore careers in chemical logistics, sales, operations, and technical services. ISO 9001 certified company offering competitive salaries, health benefits, 401k, professional development, and career growth opportunities in the chemical industry.",
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-cyan-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-slide-up">
              <h1 className="text-5xl font-black mb-6 leading-tight">
                {t("hero.title")} <br />
                <span className="text-cyan-300">{t("hero.subtitle")}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection("open-positions")}
                  className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  {t("hero.viewPositions")}
                </button>
                <button
                  onClick={() => scrollToSection("culture")}
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  {t("hero.learnCulture")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black mb-12 text-center">
              {t("why.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover-lift animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4">
                  workspace_premium
                </span>
                <h3 className="text-xl font-bold mb-3">
                  {t("why.industry.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("why.industry.description")}
                </p>
              </div>
              <div
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover-lift animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4">
                  school
                </span>
                <h3 className="text-xl font-bold mb-3">
                  {t("why.development.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("why.development.description")}
                </p>
              </div>
              <div
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover-lift animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4">
                  public
                </span>
                <h3 className="text-xl font-bold mb-3">
                  {t("why.network.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("why.network.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section
          id="culture"
          className="py-20 bg-white dark:bg-background-dark"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">{t("culture.title")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t("culture.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10 p-8 rounded-2xl hover-lift animate-fade-in">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                  diversity_3
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {t("culture.collaboration.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("culture.collaboration.description")}
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-primary/5 to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10 p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                  psychology
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {t("culture.innovation.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("culture.innovation.description")}
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-primary/5 to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10 p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                  security
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {t("culture.safety.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("culture.safety.description")}
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-primary/5 to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10 p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                  trending_up
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {t("culture.growth.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("culture.growth.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section
          id="open-positions"
          className="py-20 bg-background-light dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-4">
                Chemical Distribution Job Openings
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Explore chemical industry career opportunities across
                operations, sales, chemical logistics, supply chain management,
                warehouse operations, technical services, and customer support
                roles.
              </p>
            </div>

            {/* No Active Jobs Message */}
            <div className="bg-white dark:bg-gray-800 p-12 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 block">
                work_off
              </span>
              <h3 className="text-2xl font-bold mb-3">
                {t("positions.noJobs")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                {t("positions.noJobsDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black mb-12 text-center">
              {t("benefits.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 hover-lift">
                <span className="material-symbols-outlined text-4xl text-primary mb-3">
                  health_and_safety
                </span>
                <h3 className="font-bold mb-2">{t("benefits.health.title")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("benefits.health.description")}
                </p>
              </div>
              <div className="text-center p-6 hover-lift">
                <span className="material-symbols-outlined text-4xl text-primary mb-3">
                  savings
                </span>
                <h3 className="font-bold mb-2">
                  {t("benefits.retirement.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("benefits.retirement.description")}
                </p>
              </div>
              <div className="text-center p-6 hover-lift">
                <span className="material-symbols-outlined text-4xl text-primary mb-3">
                  event
                </span>
                <h3 className="font-bold mb-2">
                  {t("benefits.timeOff.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("benefits.timeOff.description")}
                </p>
              </div>
              <div className="text-center p-6 hover-lift">
                <span className="material-symbols-outlined text-4xl text-primary mb-3">
                  family_restroom
                </span>
                <h3 className="font-bold mb-2">
                  {t("benefits.balance.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("benefits.balance.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">{t("cta.title")}</h2>
            <p className="text-xl mb-8 text-white/90">{t("cta.subtitle")}</p>
            <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              {t("cta.button")}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
