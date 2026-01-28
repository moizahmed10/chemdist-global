"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

type Product = {
  id: number;
  name: string;
  category: string;
  cas: string;
};

export default function QuotePage() {
  const locale = useLocale();
  const t = useTranslations("quote");
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await emailjs.send("service_default", "template_default", {
        from_email: formData.get("email"),
        from_name: formData.get("fullName"),
        company_name: formData.get("company"),
        phone: formData.get("phone"),
        product_name: formData.get("product"),
        product_category: formData.get("category"),
        cas_number: formData.get("cas"),
        application: formData.get("application"),
        quantity: formData.get("quantity"),
        quantity_unit: formData.get("quantity_unit"),
        packaging: formData.get("packaging"),
        frequency: formData.get("frequency"),
        delivery_date: formData.get("delivery_date"),
        country: formData.get("country"),
        city: formData.get("city"),
        address: formData.get("address"),
        notes: formData.get("notes"),
        required_docs: Array.from(
          e.currentTarget.querySelectorAll('input[type="checkbox"]:checked'),
        )
          .map((el: any) => el.value)
          .join(", "),
        locale: locale,
      });

      setSubmitMessage({ type: "success", text: t("success") });
      e.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage({ type: "error", text: t("error") });
    } finally {
      setIsSubmitting(false);
    }
  };
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [casNumber, setCasNumber] = useState("");
  const [application, setApplication] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (productCategory) {
      const categoryNameMap: { [key: string]: string } = {
        "hot-melt": "Hot Melt Adhesives",
        "saturated-resins": "Saturated Resins",
        pigments: "Industrial Pigments",
      };
      const categoryName = categoryNameMap[productCategory];
      const filtered = allProducts.filter((p) => p.category === categoryName);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [productCategory, allProducts]);

  useEffect(() => {
    document.title =
      "Request a Quote - Bulk Chemical Pricing | ChemDist Global";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Request a custom quote for bulk chemicals, adhesives, resins, and pigments. 24-hour response time with competitive pricing and volume discounts.",
      );
    }

    // Prepopulate form from URL params
    const product = searchParams.get("product");
    const category = searchParams.get("category");
    const cas = searchParams.get("cas");
    const app = searchParams.get("application");

    if (product) setProductName(product);
    if (category) {
      // Map category names to select values
      const categoryMap: { [key: string]: string } = {
        "Hot Melt Adhesives": "hot-melt",
        "Saturated Resins": "saturated-resins",
        "Industrial Pigments": "pigments",
      };
      setProductCategory(categoryMap[category] || "");
    }
    if (cas) setCasNumber(cas);
    if (app) setApplication(app.toLowerCase());
  }, [searchParams]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light dark:bg-background-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-12 text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
            <Link className="hover:text-primary" href={`/${locale}`}>
              {t("home")}
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-gray-900 dark:text-white">{t("title")}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-5xl">
                      request_quote
                    </span>
                    <div>
                      <h1 className="text-4xl font-black">{t("pageTitle")}</h1>
                      <p className="text-white/90 text-sm font-medium mt-1">
                        {t("subtitle")}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 text-base max-w-2xl">
                    {t("description")}
                  </p>
                </div>

                <div className="p-10">
                  <form className="space-y-12" onSubmit={handleSubmit}>
                    {/* Contact Person */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 pb-4 mb-2 border-b-2 border-primary/20">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-2xl">
                            person
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t("contact.title")}
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("contact.fullName")} *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            placeholder={t("contact.fullNamePlaceholder")}
                            required
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("contact.email")} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            placeholder={t("contact.emailPlaceholder")}
                            required
                          />
                        </div>
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("contact.phone")} *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            placeholder={t("contact.phonePlaceholder")}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Request */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 pb-4 mb-2 border-b-2 border-primary/20">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-2xl">
                            science
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t("product.title")}
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("product.category")} *
                          </label>
                          <select
                            name="category"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                            required
                          >
                            <option value="">
                              {t("product.selectCategory")}
                            </option>
                            <option value="hot-melt">
                              {t("product.hotMelt")}
                            </option>
                            <option value="saturated-resins">
                              {t("product.saturatedResins")}
                            </option>
                            <option value="pigments">
                              {t("product.pigments")}
                            </option>
                            <option value="pressure-sensitive">
                              {t("product.pressureSensitive")}
                            </option>
                            <option value="specialty">
                              {t("product.specialty")}
                            </option>
                            <option value="other">{t("product.other")}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("product.name")} *
                          </label>
                          <select
                            name="product"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            value={productName}
                            onChange={(e) => {
                              setProductName(e.target.value);
                              // Auto-fill CAS number when product is selected
                              const selectedProduct = filteredProducts.find(
                                (p) => p.name === e.target.value,
                              );
                              if (selectedProduct) {
                                setCasNumber(selectedProduct.cas);
                              }
                            }}
                            required
                          >
                            <option value="">
                              {t("product.selectProduct")}
                            </option>
                            {filteredProducts.map((product) => (
                              <option key={product.id} value={product.name}>
                                {product.name}
                              </option>
                            ))}
                          </select>
                          {productCategory === "" && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                              {t("product.selectCategoryFirst")}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("product.techSpecs")}
                          </label>
                          <input
                            type="text"
                            name="tech_specs"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            placeholder={t("product.techSpecsPlaceholder")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Delivery Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 pb-4 mb-2 border-b-2 border-primary/20">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-2xl">
                            local_shipping
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t("delivery.title")}
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("quantity.deliveryDate")}
                          </label>
                          <input
                            type="date"
                            name="delivery_date"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("delivery.country")} *
                          </label>
                          <select
                            name="country"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                          >
                            <option value="">
                              {t("delivery.selectCountry")}
                            </option>
                            <option value="us">{t("delivery.us")}</option>
                            <option value="ca">{t("delivery.ca")}</option>
                            <option value="mx">{t("delivery.mx")}</option>
                            <option value="uk">{t("delivery.uk")}</option>
                            <option value="de">{t("delivery.de")}</option>
                            <option value="fr">{t("delivery.fr")}</option>
                            <option value="nl">{t("delivery.nl")}</option>
                            <option value="sg">{t("delivery.sg")}</option>
                            <option value="cn">{t("delivery.cn")}</option>
                            <option value="other">{t("delivery.other")}</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {t("delivery.cityPostal")} *
                          </label>
                          <input
                            type="text"
                            name="city"
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                            placeholder={t("delivery.cityPostalPlaceholder")}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                          {t("delivery.address")}
                        </label>
                        <input
                          type="text"
                          name="address"
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:border-gray-300 dark:hover:border-gray-500"
                          placeholder={t("delivery.addressPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 pb-4 mb-2 border-b-2 border-primary/20">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-2xl">
                            chat
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t("additional.title")}
                        </h2>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                          {t("additional.notes")}
                        </label>
                        <textarea
                          rows={6}
                          name="notes"
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none hover:border-gray-300 dark:hover:border-gray-500"
                          placeholder={t("additional.notesPlaceholder")}
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
                      >
                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                          send
                        </span>
                        <span>
                          {isSubmitting ? t("submitting") : t("submit")}
                        </span>
                        <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                        <span className="material-symbols-outlined text-sm align-middle mr-1">
                          lock
                        </span>
                        {t("secureMessage")}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              {submitMessage && (
                <div
                  className={`mt-6 p-4 rounded-lg text-center ${
                    submitMessage.type === "success"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Response Time */}
                <div className="bg-primary text-white p-6 rounded-2xl shadow-lg animate-scale-in">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-4xl">
                      schedule
                    </span>
                    <div>
                      <p className="text-sm font-medium opacity-90">
                        {t("sidebar.responseTime")}
                      </p>
                      <p className="text-2xl font-black">
                        {t("sidebar.hours24")}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {t("sidebar.responseDesc")}
                  </p>
                </div>

                {/* Why Choose Us */}
                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-scale-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                    {t("sidebar.whyChoose")}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{t("sidebar.reliableQuality")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{t("sidebar.competitivePricing")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{t("sidebar.supplierNetwork")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{t("sidebar.technicalSupport")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{t("sidebar.timelyDelivery")}</span>
                    </li>
                  </ul>
                </div>

                {/* Need Help? */}
                <div
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      support_agent
                    </span>
                    {t("sidebar.needHelp")}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t("sidebar.helpDesc")}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        call
                      </span>
                      <a
                        href="tel:+966532571669"
                        className="text-primary hover:underline font-medium"
                      >
                        {t("sidebar.phone")}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        email
                      </span>
                      <a
                        href="mailto:info@chemlinktrading.com"
                        className="text-primary hover:underline font-medium"
                      >
                        {t("sidebar.email")}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        schedule
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {t("sidebar.hours")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Browse Catalog */}
                <Link
                  href={`/${locale}/catalog`}
                  className="block bg-background-light dark:bg-gray-800 p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-all group animate-scale-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white mb-1">
                        {t("sidebar.browseCatalog")}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("sidebar.exploreProducts")}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
