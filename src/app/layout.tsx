/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Trenovations - Ανακαινίσεις Σπιτιών & Επαγγελματικών Χώρων",
    template: "%s | Trenovations"
  },
  description: "Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, ποιότητα υλικών και άψογη κατασκευή. 15+ χρόνια εμπειρίας, 600+ ευχαριστιμένοι πελάτες. Δωρεάν εκτίμηση!",
  keywords: [
    "ανακαίνιση σπιτιού",
    "ανακαίνιση επαγγελματικού χώρου",
    "κατασκευή σπιτιού",
    "σχεδιασμός εσωτερικών χώρων",
    "τεχνικές εργασίες",
    "renovation",
    "construction",
    "interior design",
    "Αθήνα",
    "Ελλάδα",
    "Trenovations"
  ],
  authors: [{ name: "Trenovations" }],
  creator: "Trenovations",
  publisher: "Trenovations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trenovations.gr'),
  alternates: {
    canonical: '/',
    languages: {
      'el-GR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://trenovations.gr',
    siteName: 'Trenovations',
    title: 'Trenovations - Ανακαινίσεις Σπιτιών & Επαγγελματικών Χώρων',
    description: 'Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, ποιότητα υλικών και άψογη κατασκευή. 15+ χρόνια εμπειρίας, 600+ ευχαριστιμένοι πελάτες.',
    images: [
      {
        url: 'https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Trenovations - Ανακαινίσεις Σπιτιών',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trenovations - Ανακαινίσεις Σπιτιών & Επαγγελματικών Χώρων',
    description: 'Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, ποιότητα υλικών και άψογη κατασκευή.',
    images: ['https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trenovations",
    "description": "Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, ποιότητα υλικών και άψογη κατασκευή",
    "url": "https://trenovations.gr",
    "telephone": "6980703882",
    "email": "info@trenovations.gr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Αθήνα",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.9755",
      "longitude": "23.7348"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "image": "https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png",
    "logo": "https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png",
    "sameAs": [
      "https://www.facebook.com/trenovations",
      "https://www.instagram.com/trenovations",
      "https://www.linkedin.com/company/trenovations"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "37.9755",
        "longitude": "23.7348"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Υπηρεσίες Ανακαινίσεων",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ανακαίνιση Σπιτιού",
            "description": "Πλήρης ανακαίνιση κατοικιών με σύγχρονο σχεδιασμό"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ανακαίνιση Επαγγελματικού Χώρου",
            "description": "Ανακαίνιση γραφείων, καταστημάτων και επαγγελματικών χώρων"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Τεχνικές Εργασίες",
            "description": "Ηλεκτρολογικές, υδραυλικές και άλλες τεχνικές εργασίες"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "600",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="el" className={roboto.variable}>
          <head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
            <script
              defer
              data-site="YOUR_DOMAIN_HERE"
              src="https://api.nepcha.com/js/nepcha-analytics.js"
            ></script>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <meta name="theme-color" content="#001f3f" />
            <meta name="msapplication-TileColor" content="#001f3f" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
