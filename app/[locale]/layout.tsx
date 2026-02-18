import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const locales = ["en", "ar"];

export const metadata: Metadata = {
  metadataBase: new URL("https://chemdist-global.com"),
  title: {
    default:
      "Chemlink Trading | Premium Chemical Distribution & Supply Chain Solutions",
    template: "%s | Chemlink Trading",
  },
  description:
    "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. Delivering premium chemicals with temperature-controlled logistics and 99.8% on-time delivery. ISO 9001:2015 certified.",
  keywords: [
    "chemical distribution",
    "hot melt adhesives",
    "saturated resins",
    "industrial pigments",
    "adhesive supplier",
    "chemical logistics",
    "bulk chemicals",
    "industrial chemicals",
    "packaging adhesives",
    "coating resins",
    "polymer pigments",
    "chemical procurement",
    "specialty chemicals",
    "chemical supply chain",
    "temperature-controlled shipping",
    "ISO 9001 certified chemicals",
    "global chemical supplier",
    "chemical wholesaler",
  ],
  authors: [{ name: "Chemlink Trading" }],
  creator: "Chemlink Trading",
  publisher: "Chemlink Trading",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chemdist-global.com",
    siteName: "Chemlink Trading",
    title:
      "Chemlink Trading | Premium Chemical Distribution & Supply Chain Solutions",
    description:
      "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. ISO 9001:2015 certified with 99.8% on-time delivery. Temperature-controlled logistics worldwide.",
    images: [
      {
        url: "/PNG.png",
        width: 1200,
        height: 630,
        alt: "Chemlink Trading - Chemical Distribution Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemlink Trading | Premium Chemical Distribution",
    description:
      "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. ISO 9001:2015 certified.",
    images: ["/PNG.png"],
  },
  alternates: {
    canonical: "https://chemdist-global.com",
    languages: {
      en: "https://chemdist-global.com/en",
      ar: "https://chemdist-global.com/ar",
    },
  },
  category: "Industrial Chemicals",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={manrope.variable}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chemlink Trading",
              url: "https://chemdist-global.com",
              logo: "https://chemdist-global.com/logo.png",
              description:
                "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77032",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-713-555-0192",
                contactType: "Sales",
                email: "info@chemlinktrading.com",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://www.linkedin.com/company/chemdist-global",
                "https://twitter.com/chemdistglobal",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "157",
              },
            }),
          }}
        />
      </head>
      <body
        className="bg-background-light dark:bg-background-dark text-[#121617] dark:text-gray-100 transition-colors duration-200 antialiased"
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
