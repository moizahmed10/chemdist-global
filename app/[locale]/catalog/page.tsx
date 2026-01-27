"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Product type definition
type Product = {
  id: number;
  name: string;
  category: string;
  cas: string;
  application: string;
  stock: string;
  description: string;
  packaging: string;
};

export default function CatalogPage() {
  const locale = useLocale();
  const t = useTranslations("catalog");
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "All Products",
  );
  const [casSearch, setCasSearch] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>(searchParam || "");
  const [selectedApplications, setSelectedApplications] = useState<string[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);
  const itemsPerPage = 6;

  // Set category and search from URL parameters when component mounts
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }

    // Update page title and meta description
    document.title =
      "Product Catalog - Chemical Distribution | ChemDist Global";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse our extensive catalog of hot melt adhesives, saturated resins, and industrial pigments. Filter by category, application, and CAS number. In-stock products with fast delivery.",
      );
    }
  }, [categoryParam, searchParam]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products?locale=${locale}`);
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [locale]);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;
      const casMatch = !casSearch || product.cas.includes(casSearch);
      const applicationMatch =
        selectedApplications.length === 0 ||
        selectedApplications.includes(product.application);
      const searchMatch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && casMatch && applicationMatch && searchMatch;
    });
  }, [
    allProducts,
    selectedCategory,
    casSearch,
    selectedApplications,
    searchQuery,
  ]);

  // Paginate filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleFilterChange();
    // Close filter on mobile after selection
    if (window.innerWidth < 1024) {
      setIsFilterOpen(false);
    }
  };

  const handleApplicationToggle = (app: string) => {
    setSelectedApplications((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app],
    );
    handleFilterChange();
  };

  const handleClearAll = () => {
    setSelectedCategory("All Products");
    setCasSearch("");
    setSearchQuery("");
    setSelectedApplications([]);
    setCurrentPage(1);
  };

  // Enable swipe-down to close filter on mobile
  const handleSheetTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) return;
    touchStartY.current = e.touches[0].clientY;
    touchDelta.current = 0;
  };

  const handleSheetTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) return;
    if (touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const delta = currentY - touchStartY.current;
    const atTop = sheetRef.current ? sheetRef.current.scrollTop <= 0 : true;
    if (delta > 20 && atTop) {
      touchDelta.current = delta;
      if (delta > 90) {
        setIsFilterOpen(false);
      }
    }
  };

  const handleSheetTouchEnd = () => {
    touchStartY.current = null;
    touchDelta.current = 0;
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">{t("loading")}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 animate-fade-in overflow-x-auto scrollbar-hide">
          <Link
            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-primary"
            href={`/${locale}`}
          >
            {t("home")}
          </Link>
          <span className="material-symbols-outlined text-gray-300 text-sm">
            chevron_right
          </span>
          <Link
            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-primary"
            href={`/${locale}/catalog`}
          >
            {t("title")}
          </Link>
          <span className="material-symbols-outlined text-gray-300 text-sm">
            chevron_right
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {t("subtitle")}
          </span>
        </nav>

        {/* Mobile Filter Toggle Button - Sticky at bottom */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden fixed bottom-3 left-3 right-3 z-30 px-4 py-3.5 bg-primary text-white shadow-2xl rounded-xl flex items-center justify-center gap-3 font-bold text-sm hover:brightness-110 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-xl">tune</span>
          <span>{t("filter")}</span>
          <span
            className={`material-symbols-outlined text-lg transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
          >
            expand_more
          </span>
        </button>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 pb-24 lg:pb-0">
          {/* Sidebar Filter */}
          <aside
            className={`w-full lg:w-72 shrink-0 transition-all duration-300 ${isFilterOpen ? "fixed inset-x-0 bottom-0 z-40 lg:relative lg:block bg-black/50 lg:bg-transparent" : "hidden lg:block"}`}
            onClick={(e) => {
              // Close filter when clicking on backdrop (only on mobile)
              if (e.target === e.currentTarget && window.innerWidth < 1024) {
                setIsFilterOpen(false);
              }
            }}
          >
            <div
              ref={sheetRef}
              onTouchStart={handleSheetTouchStart}
              onTouchMove={handleSheetTouchMove}
              onTouchEnd={handleSheetTouchEnd}
              className={`bg-white dark:bg-[#212121] rounded-t-3xl lg:rounded-xl border border-[#dde3e4] dark:border-gray-800 p-5 sm:p-6 pb-24 lg:pb-6 lg:sticky lg:top-24 transition-transform duration-300 ${isFilterOpen ? "translate-y-0 max-h-[85vh] overflow-y-auto" : "translate-y-full lg:translate-y-0"}`}
            >
              {/* Mobile bottom sheet handle */}
              <div className="lg:hidden w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="font-bold text-lg">{t("filter")}</h3>
                <button
                  onClick={handleClearAll}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  {t("clearAll")}
                </button>
              </div>
              <div className="space-y-8">
                {/* Category Filter */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {t("filter")}
                  </p>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleCategoryChange("All Products")}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-bold text-sm transition-colors ${
                        selectedCategory === "All Products"
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        apps
                      </span>
                      <span>{t("all")}</span>
                    </button>
                    <button
                      onClick={() => handleCategoryChange("Hot Melt Adhesives")}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "Hot Melt Adhesives"
                          ? "bg-primary/10 text-primary font-bold"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        water_drop
                      </span>
                      <span>{t("adhesives")}</span>
                    </button>
                    <button
                      onClick={() => handleCategoryChange("Saturated Resins")}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "Saturated Resins"
                          ? "bg-primary/10 text-primary font-bold"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        science
                      </span>
                      <span>{t("resins")}</span>
                    </button>
                    <button
                      onClick={() =>
                        handleCategoryChange("Industrial Pigments")
                      }
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "Industrial Pigments"
                          ? "bg-primary/10 text-primary font-bold"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        palette
                      </span>
                      <span>{t("pigments")}</span>
                    </button>
                  </div>
                </div>
                {/* Technical Search */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {t("search")}
                  </p>
                  <div className="space-y-5 sm:space-y-4">
                    <label className="block">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                        {t("search")}
                      </span>
                      <input
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          handleFilterChange();
                        }}
                        className="w-full border-[#dde3e4] dark:border-gray-700 dark:bg-gray-800 rounded-lg text-sm focus:ring-primary focus:border-primary px-3 py-3"
                        placeholder={t("search")}
                        type="text"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                        {t("cas")}
                      </span>
                      <input
                        value={casSearch}
                        onChange={(e) => {
                          setCasSearch(e.target.value);
                          handleFilterChange();
                        }}
                        className="w-full border-[#dde3e4] dark:border-gray-700 dark:bg-gray-800 rounded-lg text-sm focus:ring-primary focus:border-primary px-3 py-3"
                        placeholder={t("cas")}
                        type="text"
                      />
                    </label>
                  </div>
                </div>
                {/* Application Multi-select */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {t("application")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["PACKAGING", "FOOD INDUSTRY", "COATINGS", "PLASTICS"].map(
                      (app) => (
                        <span
                          key={app}
                          onClick={() => handleApplicationToggle(app)}
                          className={`px-3 py-1 text-[11px] font-bold rounded-full cursor-pointer transition-all ${
                            selectedApplications.includes(app)
                              ? "bg-primary/20 text-primary border border-primary"
                              : "bg-gray-100 dark:bg-gray-800 hover:bg-primary/20 border border-transparent hover:border-primary"
                          }`}
                        >
                          {app}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* Product Grid */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold">
                <span className="hidden sm:inline">
                  Industrial Chemicals Catalog
                </span>
                <span className="sm:hidden">Catalog</span>{" "}
                <span className="text-gray-400 font-normal text-xs sm:text-sm ml-1 sm:ml-2">
                  ({filteredProducts.length})
                </span>
              </h1>
              <div className="hidden lg:flex items-center gap-2 bg-white dark:bg-[#212121] p-1 rounded-lg border border-[#dde3e4] dark:border-gray-800">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                  <span className="material-symbols-outlined text-lg">
                    grid_view
                  </span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-primary text-white" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                  <span className="material-symbols-outlined text-lg">
                    format_list_bulleted
                  </span>
                </button>
              </div>
            </div>
            {paginatedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6">
                <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
                  search_off
                </span>
                <h3 className="text-xl font-bold text-gray-400 dark:text-gray-600 mb-2">
                  {t("noProducts")}
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-600 text-center max-w-md">
                  {t("tryAdjusting")}
                </p>
                <button
                  onClick={handleClearAll}
                  className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all"
                >
                  {t("clearAll")}
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bg-white dark:bg-[#212121] border border-[#dde3e4] dark:border-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in ${viewMode === "list" ? "flex flex-col sm:flex-row" : "flex flex-col h-full"}`}
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div
                      className={`bg-gradient-to-br from-[#f1f3f4] to-white dark:from-gray-800 dark:to-gray-900 relative p-6 ${viewMode === "grid" ? "h-48 flex-shrink-0" : "h-48 sm:h-auto sm:w-64 flex-shrink-0"}`}
                    >
                      <div
                        className={`absolute top-4 right-4 text-[10px] font-black px-2 py-1 rounded-md border ${
                          product.stock === "IN STOCK"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
                            : product.stock === "BACKORDER"
                              ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        {product.stock}
                      </div>
                      <div className="w-full h-full flex flex-col justify-end">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                          {product.category}
                        </span>
                        <h4 className="text-xl font-bold leading-tight">
                          {product.name}
                        </h4>
                        <code className="text-xs bg-white/80 dark:bg-black/20 px-2 py-0.5 rounded mt-2 inline-block w-fit text-gray-500 font-mono">
                          {t("cas")} {product.cas}
                        </code>
                      </div>
                    </div>
                    <div
                      className={
                        viewMode === "grid"
                          ? "p-6 flex flex-col flex-1"
                          : "p-6 flex-1 flex flex-col"
                      }
                    >
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-gray-400 uppercase">
                            {t("packaging")}
                          </p>
                          <p className="text-sm font-semibold">
                            {product.packaging}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <span
                            className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary"
                            title="Safety Data Sheet available"
                          >
                            description
                          </span>
                          <span
                            className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary"
                            title="Certificate of Analysis available"
                          >
                            verified
                          </span>
                        </div>
                      </div>
                      <div
                        className={
                          viewMode === "list"
                            ? "mt-auto flex flex-col sm:flex-row gap-2"
                            : "mt-auto"
                        }
                      >
                        {/* Old way - Navigate to product details page */}
                        {/* <Link
                          href={`/${locale}/product/${product.id}`}
                          className={`bg-background-light dark:bg-gray-800 text-primary dark:text-primary/80 font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all text-sm border border-primary/10 flex items-center justify-center ${viewMode === "grid" ? "w-full" : "flex-1"}`}
                        >
                          {t("viewDetails")}
                        </Link> */}

                        {/* New way - Navigate to quote page with product pre-filled */}
                        <Link
                          href={`/${locale}/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&cas=${encodeURIComponent(product.cas)}&application=${encodeURIComponent(product.application)}`}
                          className={`bg-background-light dark:bg-gray-800 text-primary dark:text-primary/80 font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all text-sm border border-primary/10 flex items-center justify-center ${viewMode === "grid" ? "w-full" : "w-full sm:flex-1"}`}
                        >
                          {t("requestQuote")}
                        </Link>
                        {viewMode === "list" && (
                          <Link
                            href={`/${locale}/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}&cas=${encodeURIComponent(product.cas)}&application=${encodeURIComponent(product.application)}`}
                            className="w-full sm:flex-1 bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 hover:brightness-110 transition-all text-sm flex items-center justify-center"
                          >
                            {t("requestQuote")}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Pagination */}
            {paginatedProducts.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  className="px-4 py-2 rounded-lg border border-[#dde3e4] dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_left
                  </span>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? "bg-primary text-white font-bold"
                          : "border border-[#dde3e4] dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  className="px-4 py-2 rounded-lg border border-[#dde3e4] dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
