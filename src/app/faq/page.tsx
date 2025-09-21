import { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import FAQAccordion from "./faq-accordion";

export const metadata: Metadata = {
  title: "Συχνές Ερωτήσεις - Trenovations | Ανακαίνιση Σπιτιού Αθήνα",
  description: "Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για τις υπηρεσίες ανακαίνισης Trenovations. Εγγύηση, κόστος, χρονοδιάγραμμα και πολλά άλλα.",
  keywords: "συχνές ερωτήσεις, ανακαίνιση σπιτιού, κόστος ανακαίνισης, εγγύηση εργασιών, χρονοδιάγραμμα ανακαίνισης, Trenovations",
  openGraph: {
    title: "Συχνές Ερωτήσεις - Trenovations",
    description: "Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για τις υπηρεσίες ανακαίνισης Trenovations.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-6">
              Συχνές Ερωτήσεις
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σας για τις υπηρεσίες ανακαίνισης Trenovations. 
              Αν δεν βρείτε την απάντηση που ψάχνετε, μη διστάσετε να επικοινωνήσετε μαζί μας.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#001f3f] mb-4">
              Δεν βρήκατε την απάντηση που ψάχνατε;
            </h2>
            <p className="text-gray-600 mb-6">
              Επικοινωνήστε μαζί μας και θα σας απαντήσουμε άμεσα σε όλες τις ερωτήσεις σας.
            </p>
            <a
              href="/#contact"
              className="bg-[#001f3f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#003d7a] transition-colors inline-block"
            >
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
