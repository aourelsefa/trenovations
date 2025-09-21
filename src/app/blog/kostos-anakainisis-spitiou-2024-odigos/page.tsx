import { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Κόστος Ανακαίνισης Σπιτιού 2024: Ολοκληρωμένος Οδηγός | Trenovations",
  description: "Μάθετε το κόστος ανακαίνισης σπιτιού στην Αθήνα 2024. Λεπτομερής οδηγός τιμών για όλες τις υπηρεσίες ανακαίνισης. Δωρεάν εκτίμηση από την Trenovations.",
  keywords: "κόστος ανακαίνισης σπιτιού Αθήνα, τιμές ανακαίνισης 2024, κόστος ανακαίνισης κουζίνας, κόστος ανακαίνισης μπάνιου, εκτίμηση ανακαίνισης",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Κόστος Ανακαίνισης Σπιτιού 2024: Ολοκληρωμένος Οδηγός",
    description: "Μάθετε το κόστος ανακαίνισης σπιτιού στην Αθήνα 2024. Λεπτομερής οδηγός τιμών για όλες τις υπηρεσίες ανακαίνισης.",
    type: "article",
    url: "https://trenovations.gr/blog/kostos-anakainisis-spitiou-2024-odigos",
  },
};

export default function BlogPost6() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
                Κόστος Ανακαίνισης Σπιτιού 2024: Ολοκληρωμένος Οδηγός
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <span>Δημοσιεύτηκε: 20 Ιανουαρίου 2024</span>
                <span className="mx-2">•</span>
                <span>Αναγνώσεις: 10 λεπτά</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Η ανακαίνιση σπιτιού είναι μια σημαντική επένδυση που μπορεί να αυξήσει την αξία του ακινήτου σας και να βελτιώσει την ποιότητα ζωής σας. Στην Αθήνα, όπου τα ακίνητα έχουν υψηλές τιμές, η σωστή εκτίμηση του κόστους είναι κρίσιμη για την επιτυχία του έργου σας.
              </p>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Παράγοντες που Επηρεάζουν το Κόστος Ανακαίνισης
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                1. Μέγεθος και Τύπος Ακινήτου
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Το μέγεθος του σπιτιού είναι ο πιο σημαντικός παράγοντας. Στην Αθήνα, τα κόστη ανακαίνισης κυμαίνονται από 200€ έως 800€ ανά τετραγωνικό μέτρο, ανάλογα με την πολυπλοκότητα.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-[#001f3f] mb-3">📊 Κόστος ανά τ.μ. στην Αθήνα</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Βασική ανακαίνιση:</strong> 200-350€/τ.μ.</li>
                  <li><strong>Μεσαία ποιότητα:</strong> 350-500€/τ.μ.</li>
                  <li><strong>Υψηλή ποιότητα:</strong> 500-800€/τ.μ.</li>
                  <li><strong>Πολυτέλεια:</strong> 800€+/τ.μ.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                2. Τύπος Ακινήτου
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Διαφορετικοί τύποι ακινήτων έχουν διαφορετικά κόστη ανακαίνισης:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Νεόδμητα:</strong> Κάτω κόστος λόγω καλής κατάστασης</li>
                <li><strong>Παλιά σπίτια:</strong> Υψηλότερο κόστος λόγω αναγκαίων επισκευών</li>
                <li><strong>Μονοκατοικίες:</strong> Περισσότερες επιλογές σχεδιασμού</li>
                <li><strong>Διαμερίσματα:</strong> Περιορισμένοι χώροι, αλλά οικονομικότερα</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Λεπτομερή Κόστος ανά Υπηρεσία
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Υπηρεσία</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Κόστος</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Διάρκεια</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Ανακαίνιση Κουζίνας</td>
                      <td className="border border-gray-300 px-4 py-2">8.000-25.000€</td>
                      <td className="border border-gray-300 px-4 py-2">4-8 εβδομάδες</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Ανακαίνιση Μπάνιου</td>
                      <td className="border border-gray-300 px-4 py-2">3.000-12.000€</td>
                      <td className="border border-gray-300 px-4 py-2">2-4 εβδομάδες</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Σαλόνι & Υπνοδωμάτια</td>
                      <td className="border border-gray-300 px-4 py-2">5.000-15.000€</td>
                      <td className="border border-gray-300 px-4 py-2">3-6 εβδομάδες</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Βαψίματα & Χρώματα</td>
                      <td className="border border-gray-300 px-4 py-2">8-15€/τ.μ.</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 εβδομάδες</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Γυψοσανίδες</td>
                      <td className="border border-gray-300 px-4 py-2">25-45€/τ.μ.</td>
                      <td className="border border-gray-300 px-4 py-2">1-3 εβδομάδες</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Πλακάκια & Πατώματα</td>
                      <td className="border border-gray-300 px-4 py-2">15-100€/τ.μ.</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 εβδομάδες</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Κρυφά Κόστη που Πρέπει να Σκεφτείτε
              </h2>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">⚠️ Προσοχή στα Κρυφά Κόστη</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Άδεια εργασιών:</strong> 200-500€ ανά έργο</li>
                  <li><strong>Αποχέτευση:</strong> 500-1.500€ για μεγάλα έργα</li>
                  <li><strong>Ηλεκτρολογικές εργασίες:</strong> 1.000-3.000€</li>
                  <li><strong>Υδραυλικές εργασίες:</strong> 800-2.500€</li>
                  <li><strong>Αποθήκευση επίπλων:</strong> 100-300€/μήνα</li>
                  <li><strong>Διαμονή:</strong> Αν χρειαστεί να φύγετε από το σπίτι</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Συμβουλές για Οικονομική Ανακαίνιση
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                1. Προγραμματισμός και Προϋπολογισμός
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ο σωστός προγραμματισμός μπορεί να σας εξοικονομήσει χρήματα και χρόνο. Σκεφτείτε:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Κάντε λίστα με όλες τις εργασίες που θέλετε</li>
                <li>Ορίστε προτεραιότητες και φάσεις</li>
                <li>Αφήστε 10-15% buffer στον προϋπολογισμό</li>
                <li>Συγκρίνετε προσφορές από 3+ εταιρείες</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                2. Επιλογή Υλικών
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Η επιλογή των υλικών επηρεάζει σημαντικά το κόστος:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">💰 Οικονομικές Επιλογές</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Κεραμικά πλακάκια</li>
                    <li>• MDF επιπλά</li>
                    <li>• Λαμαρίνες</li>
                    <li>• Βασικά χρώματα</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">💎 Premium Επιλογές</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Φυσικός λίθος</li>
                    <li>• Στερεό ξύλο</li>
                    <li>• Μάρμαρο</li>
                    <li>• Designer χρώματα</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Χρηματοδότηση Ανακαίνισης
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Υπάρχουν διάφοροι τρόποι χρηματοδότησης της ανακαίνισής σας:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Τραπεζικό δάνειο:</strong> Χαμηλό επιτόκιο, μακροπρόθεσμη εξόφληση</li>
                <li><strong>Κάρτα πίστωσης:</strong> Γρήγορη έγκριση, υψηλότερο επιτόκιο</li>
                <li><strong>Αυτοχρηματοδότηση:</strong> Χωρίς τόκους, αλλά περιορισμένος προϋπολογισμός</li>
                <li><strong>Κρατικές επιδοτήσεις:</strong> Για ενεργειακές ανακαινίσεις</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Γιατί να Επιλέξετε την Trenovations;
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Η Trenovations προσφέρει διαφανή τιμολόγηση και ανταγωνιστικές τιμές:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Δωρεάν εκτίμηση χωρίς υποχρεώσεις</li>
                <li>Διαφανής τιμολόγηση χωρίς κρυφά κόστη</li>
                <li>Εγγύηση ποιότητας σε όλες τις εργασίες</li>
                <li>15+ χρόνια εμπειρίας στην Αθήνα</li>
                <li>Σύγχρονα υλικά και τεχνικές</li>
                <li>Επαγγελματική ομάδα τεχνιτών</li>
              </ul>

              <div className="bg-[#001f3f] text-white p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-3">Ζητήστε Δωρεάν Εκτίμηση</h3>
                <p className="mb-4">Μάθετε το ακριβές κόστος ανακαίνισής σας με δωρεάν εκτίμηση από τους ειδικούς μας!</p>
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
