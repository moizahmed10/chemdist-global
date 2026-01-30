"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href={`/${locale}`} className="flex items-center">
                <Image
                  src="/PNG.png"
                  alt="Chemlink Logo"
                  width={240}
                  height={240}
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href={`/${locale}`}
              >
                {t("home")}
              </Link>
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href={`/${locale}/catalog`}
              >
                {t("catalog")}
              </Link>
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href={`/${locale}/company`}
              >
                {t("company")}
              </Link>
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href={`/${locale}/careers`}
              >
                {t("careers")}
              </Link>
              <Link
                className="text-sm font-semibold hover:text-primary transition-colors"
                href={`/${locale}/contact`}
              >
                {t("contact")}
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Link href={`/${locale}/quote`} className="hidden md:block">
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  {t("quote")}
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-background-dark shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <Link
                href={`/${locale}`}
                className="flex items-center gap-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                  </svg>
                </div>
                <span className="text-lg font-extrabold tracking-tight text-primary">
                  Chemlink
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                <Link
                  href={`/${locale}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    home
                  </span>
                  {t("home")}
                </Link>
                <Link
                  href={`/${locale}/catalog`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    category
                  </span>
                  {t("catalog")}
                </Link>
                <Link
                  href={`/${locale}/company`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    business
                  </span>
                  {t("company")}
                </Link>
                <Link
                  href={`/${locale}/careers`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    work
                  </span>
                  {t("careers")}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  {t("contact")}
                </Link>
              </div>
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <Link
                href={`/${locale}/quote`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">description</span>
                  {t("quote")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
