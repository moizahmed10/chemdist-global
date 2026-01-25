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
      "ChemDist Global | Premium Chemical Distribution & Supply Chain Solutions",
    template: "%s | ChemDist Global",
  },
  description:
    "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. ISO 9001:2015 certified with temperature-controlled logistics and 99.8% on-time delivery.",
  keywords: [
    "chemical distribution",
    "hot melt adhesives",
    "saturated resins",
    "industrial pigments",
    "adhesive supplier",
    "chemical logistics",
    "bulk chemicals",
    "ISO 9001 certified",
    "REACH compliance",
    "industrial chemicals",
    "packaging adhesives",
    "coating resins",
    "polymer pigments",
    "chemical procurement",
  ],
  authors: [{ name: "ChemDist Global" }],
  creator: "ChemDist Global",
  publisher: "ChemDist Global",
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
    siteName: "ChemDist Global",
    title:
      "ChemDist Global | Premium Chemical Distribution & Supply Chain Solutions",
    description:
      "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments. ISO 9001:2015 certified with 99.8% on-time delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChemDist Global - Chemical Distribution Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemDist Global | Premium Chemical Distribution",
    description:
      "Leading global chemical distributor specializing in hot melt adhesives, saturated resins, and industrial pigments.",
    images: ["/twitter-image.jpg"],
    creator: "@chemdistglobal",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://chemdist-global.com",
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
              name: "ChemDist Global",
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
                email: "sales@chemdist-global.com",
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
