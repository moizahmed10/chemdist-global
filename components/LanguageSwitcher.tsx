"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");
    const newPath = `/${newLocale}${pathWithoutLocale || ""}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Change language"
      >
        <span className="material-symbols-outlined text-xl">language</span>
        <span className="text-sm font-medium">{locale.toUpperCase()}</span>
        <span
          className={`material-symbols-outlined text-sm transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[150px] overflow-hidden">
            <button
              onClick={() => switchLanguage("en")}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                locale === "en"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              <span className="text-2xl">🇬🇧</span>
              <div>
                <div className="font-medium">English</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  EN
                </div>
              </div>
              {locale === "en" && (
                <span className="material-symbols-outlined text-sm ml-auto text-blue-600 dark:text-blue-400">
                  check
                </span>
              )}
            </button>

            <button
              onClick={() => switchLanguage("ar")}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                locale === "ar"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              <span className="text-2xl">🇸🇦</span>
              <div>
                <div className="font-medium">العربية</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  AR
                </div>
              </div>
              {locale === "ar" && (
                <span className="material-symbols-outlined text-sm ml-auto text-blue-600 dark:text-blue-400">
                  check
                </span>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
