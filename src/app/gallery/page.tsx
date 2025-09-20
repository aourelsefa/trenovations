import { Navbar, Footer } from "@/components";
import Gallery from "../gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Τα έργα μας - Γκαλερί Ανακαινίσεων",
  description: "Δείτε τα πιο επιτυχημένα έργα ανακαινίσεων μας. Σπίτια και επαγγελματικοί χώροι με σύγχρονο design και άψογη κατασκευή. Πάνω από 600 ολοκληρωμένα έργα.",
  keywords: [
    "έργα ανακαινίσεων",
    "γκαλερί ανακαινίσεων",
    "ολοκληρωμένα έργα",
    "προηγμένα σπίτια",
    "επαγγελματικοί χώροι",
    "σύγχρονος σχεδιασμός",
    "κατασκευή",
    "renovation projects",
    "interior design gallery"
  ],
  openGraph: {
    title: "Τα έργα μας - Γκαλερί Ανακαινίσεων | Trenovations",
    description: "Δείτε τα πιο επιτυχημένα έργα ανακαινίσεων μας. Σπίτια και επαγγελματικοί χώροι με σύγχρονο design.",
    images: [
      {
        url: 'https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Trenovations - Γκαλερί Έργων Ανακαινίσεων',
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}
