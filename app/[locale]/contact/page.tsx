"use client";

import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations("contact");
  const isRTL = locale === "ar";

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiry: "technical",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "sales@chemdist-global.com",
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company,
        inquiry_type: formData.inquiry,
        message: formData.message,
        locale: locale,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setStatusMessage(t("form.success") || "Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          inquiry: "technical",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        t("form.error") || "Failed to send message. Please try again.",
      );
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <main
        className="flex flex-col flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-8"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Breadcrumbs */}
        <nav
          className={`flex flex-wrap gap-2 mb-6 animate-fade-in ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <Link
            className="text-[#677e83] text-sm font-medium hover:text-primary"
            href="/"
          >
            {t("home")}
          </Link>
          <span className="text-[#677e83] text-sm font-medium">/</span>
          <span className="text-[#121617] dark:text-gray-200 text-sm font-bold">
            {t("title")}
          </span>
        </nav>
        {/* PageHeading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-[#121617] dark:text-white text-5xl font-black leading-tight tracking-tight mb-4">
              {t("pageTitle")} <br />
              <span className="text-primary">{t("pageHighlight")}</span>
            </h1>
            <p className="text-[#677e83] dark:text-gray-400 text-lg font-medium leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
          {/* Emergency Section */}
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 p-6 rounded-xl w-full lg:max-w-xs animate-pulse-slow">
            <div className="flex items-center gap-3 text-red-600 dark:text-red-400 mb-2">
              <span className="material-symbols-outlined font-bold">
                emergency
              </span>
              <span className="font-bold uppercase tracking-wider text-xs">
                {t("emergency.title")}
              </span>
            </div>
            <p className="text-2xl font-black text-red-700 dark:text-red-300 mb-1">
              {t("emergency.phone")}
            </p>
            <p className="text-xs text-red-600 dark:text-red-400/80 font-medium leading-tight">
              {t("emergency.description")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              {t("form.title")}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-lg">
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">
                    ✓ {statusMessage}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg">
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">
                    ✕ {statusMessage}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#121617] dark:text-gray-300 text-sm font-bold">
                    {t("form.fullName")}
                  </span>
                  <input
                    className="form-input rounded-lg border-[#dde3e4] dark:border-gray-700 dark:bg-background-dark focus:border-primary focus:ring-primary h-12 text-sm"
                    placeholder={t("form.fullNamePlaceholder")}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#121617] dark:text-gray-300 text-sm font-bold">
                    {t("form.email")}
                  </span>
                  <input
                    className="form-input rounded-lg border-[#dde3e4] dark:border-gray-700 dark:bg-background-dark focus:border-primary focus:ring-primary h-12 text-sm"
                    placeholder={t("form.emailPlaceholder")}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#121617] dark:text-gray-300 text-sm font-bold">
                    {t("form.company")}
                  </span>
                  <input
                    className="form-input rounded-lg border-[#dde3e4] dark:border-gray-700 dark:bg-background-dark focus:border-primary focus:ring-primary h-12 text-sm"
                    placeholder={t("form.companyPlaceholder")}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#121617] dark:text-gray-300 text-sm font-bold">
                    {t("form.inquiry")}
                  </span>
                  <select
                    className="form-input rounded-lg border-[#dde3e4] dark:border-gray-700 dark:bg-background-dark focus:border-primary focus:ring-primary h-12 text-sm"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="technical">{t("form.technical")}</option>
                    <option value="sales">{t("form.sales")}</option>
                    <option value="logistics">{t("form.logistics")}</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[#121617] dark:text-gray-300 text-sm font-bold">
                  {t("form.message")}
                </span>
                <textarea
                  className="form-input rounded-lg border-[#dde3e4] dark:border-gray-700 dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                  placeholder={t("form.messagePlaceholder")}
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">
                  {isLoading ? "hourglass_empty" : "send"}
                </span>
                {isLoading
                  ? t("form.submitting") || "Submitting..."
                  : t("form.submit")}
              </button>
            </form>
          </div>
          {/* Right Column: Regional Offices & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Global Directory */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  public
                </span>
                {t("offices.title")}
              </h3>
              {/* Office Cards */}
              <div className="space-y-3">
                {/* Houston */}
                <div
                  className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary transition-colors cursor-pointer group hover-lift animate-scale-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} justify-between items-start mb-2`}
                  >
                    <div>
                      <h4 className="font-bold text-primary">
                        {t("offices.northAmerica.title")}
                      </h4>
                      <p className="text-xs text-[#677e83] font-medium uppercase tracking-wider">
                        {t("offices.northAmerica.location")}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                      {isRTL ? "arrow_back" : "arrow_forward"}
                    </span>
                  </div>
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} gap-6 mt-4`}
                  >
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        call
                      </span>
                      <span className="font-medium">
                        {t("offices.northAmerica.phone")}
                      </span>
                    </div>
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        schedule
                      </span>
                      <span className="font-medium">
                        {t("offices.northAmerica.hours")}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Rotterdam */}
                <div
                  className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary transition-colors cursor-pointer group hover-lift animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} justify-between items-start mb-2`}
                  >
                    <div>
                      <h4 className="font-bold text-primary">
                        {t("offices.europe.title")}
                      </h4>
                      <p className="text-xs text-[#677e83] font-medium uppercase tracking-wider">
                        {t("offices.europe.location")}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                      {isRTL ? "arrow_back" : "arrow_forward"}
                    </span>
                  </div>
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} gap-6 mt-4`}
                  >
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        call
                      </span>
                      <span className="font-medium">
                        {t("offices.europe.phone")}
                      </span>
                    </div>
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        schedule
                      </span>
                      <span className="font-medium">
                        {t("offices.europe.hours")}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Singapore */}
                <div
                  className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary transition-colors cursor-pointer group hover-lift animate-scale-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} justify-between items-start mb-2`}
                  >
                    <div>
                      <h4 className="font-bold text-primary">
                        {t("offices.apac.title")}
                      </h4>
                      <p className="text-xs text-[#677e83] font-medium uppercase tracking-wider">
                        {t("offices.apac.location")}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                      {isRTL ? "arrow_back" : "arrow_forward"}
                    </span>
                  </div>
                  <div
                    className={`flex ${isRTL ? "flex-row-reverse" : ""} gap-6 mt-4`}
                  >
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        call
                      </span>
                      <span className="font-medium">
                        {t("offices.apac.phone")}
                      </span>
                    </div>
                    <div
                      className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center gap-2 text-sm`}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        schedule
                      </span>
                      <span className="font-medium">
                        {t("offices.apac.hours")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Section */}
            <div className="rounded-2xl overflow-hidden h-64 border border-gray-100 dark:border-gray-800 relative group">
              <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 animate-pulse group-hover:hidden"></div>
              <img
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all"
                alt="Monochrome world map showing logistics network pins"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTsYlWqSH7QoT-KcH6GWHPvubHZLVrxwNJ25UpdOUv5uAWoShCAW5OQjD_kP0-Aw7pjGNhsslKDVXvjxWGwf0SApxwudvVFyns3G0KTXATkpXCY5raVe8fUJBrWoUc04EyhXPUX_HxPJQDUGDrrW-vfelNFieLcBThovspaYhCgiafdq4q6_xc6KZKEzb125MD-lOm1ammiKWGoHaTGjXCgCdnsauBL2IxuSFO9oeXYORPJHPVal1TwEUSv5C-ol_rrX_5BoCpE44"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-3 rounded-lg flex justify-between items-center shadow-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("map.title")}
                </span>
                <span className="text-[10px] font-bold py-1 px-2 bg-primary/20 text-primary rounded">
                  {t("map.live")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
