import { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Πλακάκια και Πατώματα: Οδηγός Επιλογής Υλικών | Trenovations",
  description: "Μάθετε πώς να επιλέξετε τα τέλεια πλακάκια και πατώματα για το σπίτι σας. Συμβουλές για υλικά, σχέδια, κόστος και συντήρηση. Επαγγελματικές υπηρεσίες από την Trenovations.",
  keywords: "πλακάκια Αθήνα, πατώματα σπιτιού, επιλογή υλικών, πλακάκια κουζίνας, πλακάκια μπάνιου, ανακαίνιση πατώματος",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Πλακάκια και Πατώματα: Οδηγός Επιλογής Υλικών",
    description: "Μάθετε πώς να επιλέξετε τα τέλεια πλακάκια και πατώματα για το σπίτι σας. Συμβουλές για υλικά και σχέδια.",
    type: "article",
    url: "https://trenovations.gr/blog/plakakia-patoma-odigos-epilogis-ylikon",
  },
};

export default function BlogPost5() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
              Πλακάκια και Πατώματα: Οδηγός Επιλογής Υλικών
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span>Δημοσιεύτηκε: 1 Ιανουαρίου 2024</span>
              <span className="mx-2">•</span>
              <span>Αναγνώσεις: 8 λεπτά</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Τα πλακάκια και τα πατώματα είναι από τα πιο σημαντικά στοιχεία στην ανακαίνιση ενός σπιτιού. Η σωστή επιλογή μπορεί να μεταμορφώσει έναν χώρο, ενώ η λάθος επιλογή μπορεί να δημιουργήσει προβλήματα συντήρησης και αισθητικής.
            </p>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Τύποι Πλακακιών
            </h2>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              1. Κεραμικά Πλακάκια
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Τα κεραμικά πλακάκια είναι η πιο παραδοσιακή και οικονομική επιλογή. Προσφέρουν:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Αντοχή και μακροζωία</li>
              <li>Εύκολη συντήρηση</li>
              <li>Ευρύ φάσμα χρωμάτων και σχεδίων</li>
              <li>Οικονομική τιμή</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              2. Πορσελάνη
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Η πορσελάνη είναι η πιο ανθεκτική επιλογή για πλακάκια. Ιδανική για:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Υγρά περιβάλλοντα (μπάνια, κουζίνες)</li>
              <li>Υψηλή κυκλοφορία</li>
              <li>Εξωτερικούς χώρους</li>
              <li>Επαγγελματικούς χώρους</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              3. Φυσικός Λίθος
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ο φυσικός λίθος προσφέρει πολυτέλεια και φυσική ομορφιά:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Μοναδική εμφάνιση</li>
              <li>Αντοχή</li>
              <li>Θερμοκρασιακή σταθερότητα</li>
              <li>Αυξανόμενη αξία με τον χρόνο</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Τύποι Πατωμάτων
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#001f3f] mb-2">🪵 Ξύλινα Πατώματα</h3>
                <ul className="text-sm text-gray-700">
                  <li>• Φυσική ομορφιά</li>
                  <li>• Θερμομόνωση</li>
                  <li>• Εύκολη συντήρηση</li>
                  <li>• Αυξανόμενη αξία</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#001f3f] mb-2">🏗️ Λαμαρίνες</h3>
                <ul className="text-sm text-gray-700">
                  <li>• Αντοχή στην υγρασία</li>
                  <li>• Εύκολη εγκατάσταση</li>
                  <li>• Οικονομική τιμή</li>
                  <li>• Ποικιλία σχεδίων</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#001f3f] mb-2">🧱 Βινύλιο</h3>
                <ul className="text-sm text-gray-700">
                  <li>• Αντοχή</li>
                  <li>• Εύκολη καθαριότητα</li>
                  <li>• Θερμομόνωση</li>
                  <li>• Αντιολισθητικό</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#001f3f] mb-2">🏛️ Μάρμαρο</h3>
                <ul className="text-sm text-gray-700">
                  <li>• Πολυτέλεια</li>
                  <li>• Φυσική ομορφιά</li>
                  <li>• Αντοχή</li>
                  <li>• Θερμοκρασιακή σταθερότητα</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Επιλογή κατά Χώρο
            </h2>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              Κουζίνα
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Για την κουζίνα χρειάζεστε υλικά ανθεκτικά στην υγρασία και εύκολα στην καθαριότητα:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Πορσελάνη ή κεραμικά με αντιολισθητική επιφάνεια</li>
              <li>Μεσαία ή μεγάλα πλακάκια για εύκολη καθαριότητα</li>
              <li>Χρώματα που δεν δείχνουν λεκέδες</li>
              <li>Αντοχή σε υψηλές θερμοκρασίες</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              Μπάνιο
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Το μπάνιο απαιτεί υλικά ανθεκτικά στην υγρασία και ασφαλή:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Αντιολισθητικά πλακάκια</li>
              <li>Αντοχή σε χημικά καθαριστικά</li>
              <li>Αντιμυκητιακά υλικά</li>
              <li>Εύκολη συντήρηση</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
              Σαλόνι
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Το σαλόνι επιτρέπει περισσότερη ελευθερία στην επιλογή υλικών:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Ξύλινα πατώματα για θερμότητα</li>
              <li>Λαμαρίνες για πρακτικότητα</li>
              <li>Μάρμαρο για πολυτέλεια</li>
              <li>Βινύλιο για οικονομία</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Συντήρηση και Φροντίδα
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-[#001f3f] mb-3">🧽 Συμβουλές Συντήρησης</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Καθημερινός καθαρισμός:</strong> Χρησιμοποιήστε κατάλληλα καθαριστικά</li>
                <li><strong>Σφράγιση:</strong> Σφραγίστε τα πλακάκια κάθε 2-3 χρόνια</li>
                <li><strong>Αποφυγή βλαβερών:</strong> Αποφύγετε όξινα καθαριστικά σε μάρμαρο</li>
                <li><strong>Προστασία:</strong> Χρησιμοποιήστε χαλιά σε κρίσιμα σημεία</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Κόστος Πλακακιών και Πατωμάτων
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Το κόστος κυμαίνεται σημαντικά ανάλογα με το υλικό:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Υλικό</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Τιμή/τ.μ.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Χαρακτηριστικά</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Κεραμικά</td>
                    <td className="border border-gray-300 px-4 py-2">15-30€</td>
                    <td className="border border-gray-300 px-4 py-2">Οικονομικά, ανθεκτικά</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Πορσελάνη</td>
                    <td className="border border-gray-300 px-4 py-2">25-50€</td>
                    <td className="border border-gray-300 px-4 py-2">Υψηλή αντοχή</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Φυσικός Λίθος</td>
                    <td className="border border-gray-300 px-4 py-2">40-100€</td>
                    <td className="border border-gray-300 px-4 py-2">Πολυτέλεια</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ξύλινα Πατώματα</td>
                    <td className="border border-gray-300 px-4 py-2">30-80€</td>
                    <td className="border border-gray-300 px-4 py-2">Φυσική ομορφιά</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
              Γιατί να Επιλέξετε την Trenovations;
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Η Trenovations προσφέρει επαγγελματικές υπηρεσίες πλακακιών και πατωμάτων:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>15+ χρόνια εμπειρίας σε εγκαταστάσεις</li>
              <li>Υψηλής ποιότητας υλικά και εργαλεία</li>
              <li>Επαγγελματική εγκατάσταση</li>
              <li>Εγγύηση ποιότητας</li>
              <li>Σύγχρονες τεχνικές</li>
              <li>Δωρεάν εκτίμηση και συμβουλές</li>
              <li>Ανταγωνιστικές τιμές</li>
            </ul>

            <div className="bg-[#001f3f] text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Ανακαινίστε τα Πατώματα σας</h3>
              <p className="mb-4">Ζητήστε δωρεάν εκτίμηση για πλακάκια και πατώματα!</p>
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
