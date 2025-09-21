import { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Ανακαίνιση Μπάνιου: Τάσεις και Συμβουλές 2024 | Trenovations",
  description: "Ανακαινίστε το μπάνιο σας με τις πιο σύγχρονες τάσεις 2024. Σύγχρονα σχέδια, υλικά, κόστος και βήματα. Επαγγελματικές συμβουλές από την Trenovations.",
  keywords: "ανακαίνιση μπάνιου Αθήνα, σύγχρονο μπάνιο, σχεδιασμός μπάνιου, κόστος ανακαίνισης μπάνιου, τάσεις μπάνιου 2024",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Ανακαίνιση Μπάνιου: Τάσεις και Συμβουλές 2024",
    description: "Ανακαινίστε το μπάνιο σας με τις πιο σύγχρονες τάσεις 2024. Σύγχρονα σχέδια, υλικά, κόστος και βήματα.",
    type: "article",
    url: "https://trenovations.gr/blog/anakainisi-mpaniou-taseis-symvoules-2024",
  },
};

export default function BlogPost2() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
              Ανακαίνιση Μπάνιου: Τάσεις και Συμβουλές 2024
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span>Δημοσιεύτηκε: 10 Ιανουαρίου 2024</span>
              <span className="mx-2">•</span>
              <span>Αναγνώσεις: 6 λεπτά</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Το μπάνιο είναι ένας από τους πιο σημαντικούς χώρους του σπιτιού, όπου ξεκινάμε και τελειώνουμε κάθε μέρα. Η ανακαίνιση μπάνιου μπορεί να μεταμορφώσει όχι μόνο τον χώρο, αλλά και την καθημερινότητα σας.
            </p>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Οι Πιο Δημοφιλείς Τάσεις Μπάνιου για το 2024
            </h2>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              1. Φυσικά Υλικά και Οργανικά Σχέδια
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Το 2024 βλέπουμε μια επιστροφή στα φυσικά υλικά. Ξύλο, φυσικός λίθος και κεραμικά με οργανικά σχέδια δημιουργούν έναν χώρο που συνδέεται με τη φύση.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              2. Μίνιμαλ Σχεδιασμός με Λειτουργικότητα
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ο μίνιμαλ σχεδιασμός συνεχίζει να κυριαρχεί, αλλά τώρα εστιάζει περισσότερο στην λειτουργικότητα. Κρυμμένα αποθηκευτικά χώροι και έξυπνες λύσεις οργάνωσης.
            </p>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              3. Έξυπνες Τεχνολογίες
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Έξυπνα καθαριστήρια, αυτόματες κουρτίνες ντουζ, θερμαινόμενα πλακάκια και έξυπνα καθρέφτες με LED φωτισμό.
            </p>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Σχεδιασμός Μπάνιου: Τι να Σκεφτείτε
            </h2>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              Μέγεθος και Διάταξη
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ακόμα και σε μικρά μπάνια, η σωστή διάταξη μπορεί να δημιουργήσει την ψευδαίσθηση περισσότερου χώρου. Σκεφτείτε:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Ανοιχτά ντουζ αντί για μπανιέρα σε μικρούς χώρους</li>
              <li>Καθρέπτες που διπλασιάζουν οπτικά τον χώρο</li>
              <li>Αποθηκευτικούς χώρους μέχρι την οροφή</li>
              <li>Φωτισμό που καλύπτει όλες τις περιοχές</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              Επιλογή Υλικών
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Η επιλογή των υλικών είναι κρίσιμη για την αντοχή και την αισθητική του μπάνιου σας:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#001f3f] mb-2">Πλακάκια</h4>
                <ul className="text-sm text-gray-700">
                  <li>• Πορσελάνη για αντοχή</li>
                  <li>• Φυσικός λίθος για πολυτέλεια</li>
                  <li>• Μεγάλα πλακάκια για μίνιμαλ εμφάνιση</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#001f3f] mb-2">Συσκευές</h4>
                <ul className="text-sm text-gray-700">
                  <li>• Ενεργειακά αποδοτικές συσκευές</li>
                  <li>• Έξυπνες λειτουργίες</li>
                  <li>• Σύγχρονα σχέδια</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Κόστος Ανακαίνισης Μπάνιου
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Το κόστος ανακαίνισης μπάνιου στην Αθήνα κυμαίνεται από 3.000€ έως 12.000€, ανάλογα με:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Το μέγεθος του μπάνιου</li>
              <li>Την ποιότητα των υλικών</li>
              <li>Τις συσκευές που επιλέγετε</li>
              <li>Την πολυπλοκότητα των εργασιών</li>
              <li>Την ανάγκη για υδραυλικές αλλαγές</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Συμβουλές για Επιτυχημένη Ανακαίνιση
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-[#001f3f] mb-3">✅ Κλειδί για Επιτυχία</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Σχεδιάστε καλά πριν ξεκινήσετε</li>
                <li>Επιλέξτε υλικά ανθεκτικά στην υγρασία</li>
                <li>Αφήστε αρκετό χώρο για κίνηση</li>
                <li>Σκεφτείτε την αεροπορία και την εξαερισμό</li>
                <li>Επενδύστε σε καλό φωτισμό</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Χρονοδιάγραμμα Έργου
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Μια τυπική ανακαίνιση μπάνιου διαρκεί 2-4 εβδομάδες:
            </p>

            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li><strong>Εβδομάδα 1:</strong> Αφαίρεση παλιών υλικών και προετοιμασία</li>
              <li><strong>Εβδομάδα 2:</strong> Υδραυλικές εργασίες και ηλεκτρολογικές</li>
              <li><strong>Εβδομάδα 3:</strong> Τοποθέτηση πλακακιών και επιπλών</li>
              <li><strong>Εβδομάδα 4:</strong> Εγκατάσταση συσκευών και φινίρισμα</li>
            </ol>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Γιατί να Επιλέξετε την Trenovations;
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Η Trenovations είναι η καλύτερη επιλογή για την ανακαίνιση μπάνιου σας στην Αθήνα:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>15+ χρόνια εμπειρίας στην ανακαίνιση μπάνιων</li>
              <li>Σύγχρονα υλικά και τεχνικές</li>
              <li>Εγγύηση ποιότητας σε όλες τις εργασίες</li>
              <li>Δωρεάν εκτίμηση και συμβουλές</li>
              <li>Ανταγωνιστικές τιμές</li>
            </ul>

            <div className="bg-[#001f3f] text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Ξεκινήστε την Ανακαίνιση Μπάνιου σας</h3>
              <p className="mb-4">Ζητήστε δωρεάν εκτίμηση και συμβουλές από τους ειδικούς μας!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+306998026625" className="bg-white text-[#001f3f] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Κλήση: 6998026625
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
