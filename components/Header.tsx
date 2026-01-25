"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="text-primary">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">
                ChemDist Global
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
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
            <Link href={`/${locale}/quote`}>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                {t("quote")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
