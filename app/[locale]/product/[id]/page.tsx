"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

type ProductDetail = {
  id: number;
  name: string;
  category: string;
  cas: string;
  application: string;
  stock: string;
  description: string;
  packaging: string;
  fullDescription: string;
  specifications: Record<string, string>;
};

export default function ProductDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("product");
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `/api/products/${params.id}?locale=${locale}`,
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }
    if (params.id) {
      fetchProduct();
    }
  }, [params.id, locale]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="max-w-[1280px] mx-auto px-6 py-8 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">{t("loading")}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
              error_outline
            </span>
            <h2 className="text-2xl font-bold text-gray-400 mb-2">
              {t("notFound")}
            </h2>
            <Link
              href={`/${locale}/catalog`}
              className="text-primary hover:underline"
            >
              {t("backToCatalog")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-sm font-medium text-gray-500 dark:text-gray-400 animate-fade-in">
          <Link className="hover:text-primary" href={`/${locale}`}>
            {t("home")}
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <Link className="hover:text-primary" href={`/${locale}/catalog`}>
            {t("catalog")}
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-[#121617] dark:text-white">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product Details */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Product Profile Header */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-[#dde3e4] dark:border-gray-700 shadow-sm animate-slide-up">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-[#dde3e4] dark:border-gray-600 overflow-hidden">
                  <img
                    className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                    alt="Scientific molecular structure of ethanol chemical"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDESmRq-zXyT7FMQaEmL0YTqH-cQQ35B9mEL08mOmzHDdLwwtLFqZt6_DnNhTfh0fYlfYBVk5mkMGL7_QCt50cHUuIS9gEzESnx3jPV6XsTfZRW9657A3_qAU6pv35DGE224HrE9W_5WOVig8iO8-5HerYZOl31m32Gi6UHDfBFdP6V4IRPfgNlMbZksEBgWTZneLAYgVh4YZqAqoGY04DK4Tqy9Z9yhezegs5COoIpOBvf8iW6M9xTkndOogoGSHYkOlANQV_2U"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                        product.stock === "IN STOCK"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : product.stock === "BACKORDER"
                            ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400"
                      }`}
                    >
                      {product.stock}
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-[#121617] dark:text-white mb-2">
                    {product.name}
                  </h1>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-primary">
                        {t("cas")}:
                      </span>{" "}
                      {product.cas}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-primary">
                        {t("application")}:
                      </span>{" "}
                      {product.application}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {product.fullDescription}
                  </p>
                  <div
                    className="mt-6 flex gap-4 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <button className="flex items-center gap-2 bg-[#f1f3f4] dark:bg-gray-700 hover:bg-[#e2e5e7] px-4 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-1">
                      <span className="material-symbols-outlined text-xl">
                        description
                      </span>
                      {t("downloadSDS")}
                    </button>
                    <button className="flex items-center gap-2 bg-[#f1f3f4] dark:bg-gray-700 hover:bg-[#e2e5e7] px-4 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-1">
                      <span className="material-symbols-outlined text-xl">
                        biotech
                      </span>
                      {t("certificateAnalysis")}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Technical Specs Grid */}
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                {t("specifications")}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-[#dde3e4] dark:border-gray-700 hover-lift"
                  >
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {key.replace(/_/g, " ")}
                    </p>
                    <p className="text-xl font-bold font-mono">{value}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Packaging Options */}
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  inventory_2
                </span>
                {t("packagingFulfillment")}
              </h2>
              <div className="bg-white dark:bg-gray-800 border border-[#dde3e4] dark:border-gray-700 p-6 rounded-xl">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-bold text-[#121617] dark:text-white">
                    {t("availablePackaging")}
                  </span>
                </p>
                <p className="text-lg font-semibold text-primary">
                  {product.packaging}
                </p>
              </div>
            </section>
            {/* Description */}
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                {t("description")}
              </h2>
              <div className="bg-white dark:bg-gray-800 border border-[#dde3e4] dark:border-gray-700 p-6 rounded-xl">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </section>
          </div>
          {/* Right Sidebar - Quote Request */}
          <aside className="lg:col-span-4">
            <div
              className="sticky top-24 bg-white dark:bg-gray-800 p-6 rounded-xl border border-[#dde3e4] dark:border-gray-700 shadow-lg animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-lg font-bold mb-4">{t("requestQuote")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {t("getPricing")} {product.name}
              </p>
              <Link
                href={`/${locale}/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&cas=${encodeURIComponent(product.cas)}&application=${encodeURIComponent(product.application)}&packaging=${encodeURIComponent(product.packaging)}`}
                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mb-4"
              >
                <span className="material-symbols-outlined">request_quote</span>
                <span>{t("getQuote")}</span>
              </Link>
              <div className="space-y-3 pt-4 border-t border-[#dde3e4] dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    local_shipping
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{t("fastDelivery")}</p>
                    <p className="text-xs text-gray-500">{t("shipsWithin")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    verified_user
                  </span>
                  <div>
                    <p className="font-semibold text-sm">
                      {t("qualityAssured")}
                    </p>
                    <p className="text-xs text-gray-500">{t("coaIncluded")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    support_agent
                  </span>
                  <div>
                    <p className="font-semibold text-sm">
                      {t("expertSupport")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("technicalTeam")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
