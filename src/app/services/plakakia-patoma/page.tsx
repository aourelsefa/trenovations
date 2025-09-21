import { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { 
  CogIcon, 
  CheckIcon, 
  ClockIcon, 
  CurrencyEuroIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Πλακάκια & Πατώματα Αθήνα | Trenovations - Εξειδικευμένη Ανακαίνιση",
  description: "Εξειδικευμένη τοποθέτηση πλακακιών και πατωμάτων στην Αθήνα με ανθεκτικά υλικά και άψογη τοποθέτηση για όμορφα και λειτουργικά πατώματα. Δωρεάν εκτίμηση, επαγγελματική τοποθέτηση και εγκατάσταση. Εγγύηση ποιότητας.",
  keywords: "πλακάκια Αθήνα, πατώματα, πλακάκια, τοποθέτηση, ανακαίνιση, trenovations, πλακάκια, πατώματα, εγκατάσταση, τοποθέτηση πλακακιών, ανακαίνιση σπιτιού Αθήνα",
  authors: [{ name: "Trenovations" }],
  creator: "Trenovations",
  publisher: "Trenovations",
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
  openGraph: {
    title: "Πλακάκια & Πατώματα Αθήνα | Trenovations - Εξειδικευμένη Ανακαίνιση",
    description: "Εξειδικευμένη τοποθέτηση πλακακιών και πατωμάτων στην Αθήνα με ανθεκτικά υλικά και άψογη τοποθέτηση. Δωρεάν εκτίμηση και επαγγελματική εγκατάσταση.",
    type: "website",
    url: "https://trenovations.gr/services/plakakia-patoma",
    siteName: "Trenovations",
    locale: "el_GR",
    images: [
      {
        url: "https://trenovations.gr/images/tiles-flooring-renovation.jpg",
        width: 1200,
        height: 630,
        alt: "Πλακάκια & Πατώματα - Trenovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Πλακάκια & Πατώματα Αθήνα | Trenovations",
    description: "Εξειδικευμένη τοποθέτηση πλακακιών και πατωμάτων στην Αθήνα με ανθεκτικά υλικά και άψογη τοποθέτηση.",
    images: ["https://trenovations.gr/images/tiles-flooring-renovation.jpg"],
  },
  alternates: {
    canonical: "https://trenovations.gr/services/plakakia-patoma",
  },
  category: "Home Renovation",
};

const FEATURES = [
  "Ανθεκτικά υλικά και άψογη τοποθέτηση",
  "Όμορφα και λειτουργικά πατώματα",
  "Επαγγελματική τεχνική τοποθέτησης",
  "Μεγάλη ποικιλία υλικών",
  "Εύκολη συντήρηση",
  "Εγγύηση ποιότητας και εξυπηρέτησης"
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Συμβουλευτική & Επιλογή",
    description: "Συμβουλές για την επιλογή υλικών που ταιριάζουν στο χώρο και τις ανάγκες σας"
  },
  {
    step: "2", 
    title: "Εκτίμηση & Προσφορά",
    description: "Λεπτομερής εκτίμηση κόστους και χρονοδιάγραμμα εργασιών"
  },
  {
    step: "3",
    title: "Προετοιμασία",
    description: "Προετοιμασία επιφανειών και μέτρηση για ακριβή τοποθέτηση"
  },
  {
    step: "4",
    title: "Τοποθέτηση",
    description: "Επαγγελματική τοποθέτηση πλακακιών και πατωμάτων"
  },
  {
    step: "5",
    title: "Τελική Παράδοση",
    description: "Ελέγχος ποιότητας και παράδοση έτοιμου έργου"
  }
];

const SERVICES_INCLUDED = [
  "Συμβουλές επιλογής υλικών",
  "Προετοιμασία επιφανειών",
  "Μέτρηση και σχεδιασμός",
  "Τοποθέτηση πλακακιών",
  "Τοποθέτηση πατωμάτων",
  "Εγκατάσταση φινιρίσματος",
  "Καθαριότητα και φινίρισμα",
  "Εγγύηση τοποθέτησης"
];

export default function TilesFlooringPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003366] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <CogIcon className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Πλακάκια & Πατώματα στην Αθήνα
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Ανθεκτικά υλικά και άψογη τοποθέτηση για όμορφα και λειτουργικά πατώματα 
              που θα σας εξυπηρετούν για χρόνια.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-[#001f3f] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Δωρεάν Εκτίμηση
              </a>
              <a 
                href="tel:+306980703882" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#001f3f] transition-colors"
              >
                <PhoneIcon className="w-5 h-5 inline mr-2" />
                Κάλεσέ μας
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001f3f] text-center mb-12">
              Γιατί να επιλέξετε την Trenovations;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#001f3f] p-2 rounded-full flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001f3f] text-center mb-12">
              Η Διαδικασία Τοποθέτησης
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#001f3f] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001f3f] text-center mb-12">
              Υπηρεσίες που Περιλαμβάνει η Τοποθέτηση
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_INCLUDED.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckIcon className="w-6 h-6 text-[#001f3f] flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-[#001f3f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Έτοιμοι να Ξεκινήσουμε το Έργο σας;
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και συμβουλές από τους ειδικούς μας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+306980703882" 
                className="bg-white text-[#001f3f] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 inline mr-2" />
                Κάλεσέ μας: 698 070 3882
              </a>
              <a 
                href="mailto:info@trenovations.gr" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#001f3f] transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5 inline mr-2" />
                Στείλτε μας Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
