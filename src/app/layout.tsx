/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Trenovations - Ανακαινίσεις Σπιτιών & Επαγγελματικών Χώρων",
  description:
    "Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, ποιότητα υλικών και άψογη κατασκευή. Από την πρώτη ιδέα μέχρι την τελευταία λεπτομέρεια.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className={roboto.variable}>
          <head>
            <script
              defer
              data-site="YOUR_DOMAIN_HERE"
              src="https://api.nepcha.com/js/nepcha-analytics.js"
            ></script>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
