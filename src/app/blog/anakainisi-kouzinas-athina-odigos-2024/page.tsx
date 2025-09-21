import { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Ανακαίνιση Κουζίνας Αθήνα: Ολοκληρωμένος Οδηγός 2024 | Trenovations",
  description: "Μάθετε όλα για την ανακαίνιση κουζίνας στην Αθήνα. Σύγχρονα σχέδια, υλικά, κόστος και βήματα. Εξειδικευμένες συμβουλές από τους επαγγελματίες της Trenovations.",
  keywords: "ανακαίνιση κουζίνας Αθήνα, σχεδιασμός κουζίνας, κόστος ανακαίνισης κουζίνας, σύγχρονη κουζίνα, κουζινικά επιπλά Αθήνα",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Ανακαίνιση Κουζίνας Αθήνα: Ολοκληρωμένος Οδηγός 2024",
    description: "Μάθετε όλα για την ανακαίνιση κουζίνας στην Αθήνα. Σύγχρονα σχέδια, υλικά, κόστος και βήματα.",
    type: "article",
    url: "https://trenovations.gr/blog/anakainisi-kouzinas-athina-odigos-2024",
  },
};

export default function BlogPost1() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
              Ανακαίνιση Κουζίνας Αθήνα: Ολοκληρωμένος Οδηγός 2024
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span>Δημοσιεύτηκε: 15 Ιανουαρίου 2024</span>
              <span className="mx-2">•</span>
              <span>Αναγνώσεις: 8 λεπτά</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Η ανακαίνιση κουζίνας είναι ένα από τα πιο σημαντικά έργα ανακαίνισης στο σπίτι. Στην Αθήνα, όπου οι χώροι είναι συχνά περιορισμένοι, η σωστή σχεδίαση και οργάνωση της κουζίνας μπορεί να κάνει τη διαφορά στην καθημερινότητα σας.
            </p>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Γιατί να Ανακαινίσετε την Κουζίνα σας;
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Η κουζίνα είναι το καρδιά του σπιτιού. Εκεί περνάτε πολύ χρόνο μαγειρεύοντας, τρώγοντας και συγκεντρώνοντας με την οικογένειά σας. Μια σύγχρονη, λειτουργική κουζίνα μπορεί να:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Αυξήσει την αξία του σπιτιού σας κατά 5-15%</li>
              <li>Βελτιώσει την αποδοτικότητα και την οργάνωση</li>
              <li>Μειώσει το κόστος ενέργειας με σύγχρονες συσκευές</li>
              <li>Δημιουργήσει έναν πιο ευχάριστο χώρο για μαγείρεμα</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Τα Βήματα της Ανακαίνισης Κουζίνας
            </h2>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              1. Σχεδιασμός και Προετοιμασία
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Το πρώτο βήμα είναι να ορίσετε τον προϋπολογισμό σας και τις ανάγκες σας. Σκεφτείτε πόσο χρόνο περνάτε στην κουζίνα και τι δραστηριότητες κάνετε εκεί.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              2. Επιλογή Υλικών
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Η επιλογή των υλικών είναι κρίσιμη για την αντοχή και την αισθητική της κουζίνας σας. Δημοφιλή υλικά στην Αθήνα περιλαμβάνουν:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Πάγκοι:</strong> Γρανίτης, Μαρμάρι, Quartz</li>
              <li><strong>Επιπλά:</strong> MDF με μελαμινικό φινίρισμα, ξύλο, μεταλλικά</li>
              <li><strong>Πλακάκια:</strong> Κεραμικά, πορσελάνη, φυσικό λίθο</li>
              <li><strong>Συσκευές:</strong> Ενεργειακά αποδοτικές συσκευές A+++</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              3. Χρονοδιάγραμμα Έργου
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Μια τυπική ανακαίνιση κουζίνας στην Αθήνα διαρκεί 4-8 εβδομάδες, ανάλογα με το μέγεθος και την πολυπλοκότητα του έργου.
            </p>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Κόστος Ανακαίνισης Κουζίνας στην Αθήνα
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Το κόστος ανακαίνισης κουζίνας στην Αθήνα κυμαίνεται από 8.000€ έως 25.000€, ανάλογα με:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Το μέγεθος της κουζίνας</li>
              <li>Την ποιότητα των υλικών</li>
              <li>Τις συσκευές που επιλέγετε</li>
              <li>Την πολυπλοκότητα των εργασιών</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Συμβουλές για Επιτυχημένη Ανακαίνιση
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-[#001f3f] mb-3">💡 Εξπερτ Συμβουλές</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Σχεδιάστε το &ldquo;τρίγωνο εργασίας&rdquo; (νιπτήρας-καμινάδα-ψυγείο)</li>
                <li>Αφήστε αρκετό χώρο αποθήκευσης</li>
                <li>Επιλέξτε φωτισμό που να καλύπτει όλες τις περιοχές εργασίας</li>
                <li>Σκεφτείτε την αεροπορία και την εξαερισμό</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Γιατί να Επιλέξετε την Trenovations;
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Η Trenovations έχει 15+ χρόνια εμπειρίας στην ανακαίνιση κουζινών στην Αθήνα. Η ομάδα μας προσφέρει:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Δωρεάν εκτίμηση και συμβουλές</li>
              <li>Εγγύηση ποιότητας σε όλες τις εργασίες</li>
              <li>Σύγχρονα υλικά και τεχνικές</li>
              <li>Επαγγελματική εγκατάσταση συσκευών</li>
              <li>Ανταγωνιστικές τιμές</li>
            </ul>

            <div className="bg-[#001f3f] text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Επικοινωνήστε μαζί μας</h3>
              <p className="mb-4">Έτοιμοι να ανακαινίσετε την κουζίνα σας; Ζητήστε δωρεάν εκτίμηση!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+306980703882" className="bg-white text-[#001f3f] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Κλήση: 6980703882
                </a>
                <a href="/#contact" className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#001f3f] transition-colors">
                  Δωρεάν Εκτίμηση
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      </div>
      <Footer />
    </>
  );
}
