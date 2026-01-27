"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
                ChemDist Global
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mb-6">
              {t("description")}
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">
              {t("products.title")}
            </h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/catalog?category=Hot Melt Adhesives`}
                >
                  {t("products.adhesives")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/catalog?category=Saturated Resins`}
                >
                  {t("products.resins")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/catalog?category=Industrial Pigments`}
                >
                  {t("products.pigments")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/catalog`}
                >
                  {t("products.viewAll")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-6">
              {t("company.title")}
            </h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/company`}
                >
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/careers`}
                >
                  {t("company.careers")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/${locale}/contact`}
                >
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
