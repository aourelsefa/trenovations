import { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Ενεργειακή Ανακαίνιση: Εξοικονόμηση Ενέργειας και Κόστους | Trenovations",
  description: "Μάθετε για την ενεργειακή ανακαίνιση σπιτιού. Συμβουλές για εξοικονόμηση ενέργειας, μόνωση, ηλιακά πάνελ και κρατικές επιδοτήσεις. Επαγγελματικές υπηρεσίες από την Trenovations.",
  keywords: "ενεργειακή ανακαίνιση Αθήνα, εξοικονόμηση ενέργειας, μόνωση σπιτιού, ηλιακά πάνελ, κρατικές επιδοτήσεις, ενεργειακός σχεδιασμός",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Ενεργειακή Ανακαίνιση: Εξοικονόμηση Ενέργειας και Κόστους",
    description: "Μάθετε για την ενεργειακή ανακαίνιση σπιτιού. Συμβουλές για εξοικονόμηση ενέργειας και μόνωση.",
    type: "article",
    url: "https://trenovations.gr/blog/energeiaki-anakainisi-exoikonomisi-energeias-kostous",
  },
};

export default function BlogPost9() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
                Ενεργειακή Ανακαίνιση: Εξοικονόμηση Ενέργειας και Κόστους
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <span>Δημοσιεύτηκε: 14 Ιανουαρίου 2024</span>
                <span className="mx-2">•</span>
                <span>Αναγνώσεις: 11 λεπτά</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Η ενεργειακή ανακαίνιση είναι μια επένδυση που όχι μόνο βελτιώνει την άνεση του σπιτιού σας, αλλά και μειώνει σημαντικά το κόστος ενέργειας. Στην εποχή των αυξανόμενων τιμών ενέργειας, η ενεργειακή ανακαίνιση είναι πιο σημαντική από ποτέ.
              </p>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Τι είναι η Ενεργειακή Ανακαίνιση;
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Η ενεργειακή ανακαίνιση περιλαμβάνει όλες τις εργασίες που βελτιώνουν την ενεργειακή απόδοση ενός κτιρίου:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Θερμομόνωση τοίχων, οροφών και πατωμάτων</li>
                <li>Αντικατάσταση παραθύρων και θυρών</li>
                <li>Εγκατάσταση ενεργειακά αποδοτικών συστημάτων θέρμανσης</li>
                <li>Ηλιακά πάνελ και ανανεώσιμες πηγές ενέργειας</li>
                <li>Έξυπνα συστήματα διαχείρισης ενέργειας</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Οφέλη της Ενεργειακής Ανακαίνισης
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">💰 Οικονομικά Οφέλη</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Μείωση λογαριασμών ενέργειας 30-70%</li>
                    <li>• Αύξηση αξίας ακινήτου</li>
                    <li>• Κρατικές επιδοτήσεις</li>
                    <li>• Επιστροφή επένδυσης σε 5-10 χρόνια</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">🌱 Περιβαλλοντικά Οφέλη</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Μείωση CO2 εκπομπών</li>
                    <li>• Μικρότερο carbon footprint</li>
                    <li>• Βιώσιμη κατανάλωση</li>
                    <li>• Συμβολή στην πράσινη οικονομία</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Θερμομόνωση: Το Κλειδί της Εξοικονόμησης
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Τύποι Θερμομόνωσης
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Η θερμομόνωση είναι η πιο αποδοτική επένδυση για εξοικονόμηση ενέργειας:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Τύπος</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Κόστος/τ.μ.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Εξοικονόμηση</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Εξωτερική Θερμομόνωση</td>
                      <td className="border border-gray-300 px-4 py-2">25-45€</td>
                      <td className="border border-gray-300 px-4 py-2">40-60%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Εσωτερική Θερμομόνωση</td>
                      <td className="border border-gray-300 px-4 py-2">15-30€</td>
                      <td className="border border-gray-300 px-4 py-2">20-40%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Οροφή</td>
                      <td className="border border-gray-300 px-4 py-2">20-35€</td>
                      <td className="border border-gray-300 px-4 py-2">25-35%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Πατώματα</td>
                      <td className="border border-gray-300 px-4 py-2">15-25€</td>
                      <td className="border border-gray-300 px-4 py-2">10-20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Υλικά Θερμομόνωσης
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Η επιλογή του σωστού υλικού θερμομόνωσης είναι κρίσιμη:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Styrofoam:</strong> Οικονομικό, εύκολη εγκατάσταση</li>
                <li><strong>Mineral wool:</strong> Φυσικό, αντοχή στη φωτιά</li>
                <li><strong>Polyurethane:</strong> Υψηλή απόδοση, ακριβό</li>
                <li><strong>Cellulose:</strong> Ανακυκλώσιμο, φυσικό</li>
                <li><strong>Aerogel:</strong> Υψηλότερη απόδοση, πολύ ακριβό</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Παράθυρα και Θύρες
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Ενεργειακά Παράθυρα
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Τα παράθυρα είναι ένα από τα κύρια σημεία απώλειας ενέργειας:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-[#001f3f] mb-3">🪟 Χαρακτηριστικά Ενεργειακών Παραθύρων</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Double glazing:</strong> Διπλό τζάμι με αέρα ή αέριο</li>
                  <li><strong>Low-E coating:</strong> Ειδικό επίστρωμα για μείωση απωλειών</li>
                  <li><strong>Thermal breaks:</strong> Θερμομονωτικά διαχωριστικά</li>
                  <li><strong>Quality frames:</strong> Πλαστικά, ξύλινα ή αλουμινίου</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Συστήματα Θέρμανσης και Ψύξης
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Ενεργειακά Αποδοτικές Λύσεις
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Η αντικατάσταση παλιών συστημάτων μπορεί να εξοικονομήσει σημαντικά χρήματα:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">🔥 Θέρμανση</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Heat pumps (αέρα-αέρα)</li>
                    <li>• Condensing boilers</li>
                    <li>• Solar thermal systems</li>
                    <li>• Geothermal systems</li>
                    <li>• Pellet stoves</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001f3f] mb-2">❄️ Ψύξη</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Inverter air conditioning</li>
                    <li>• Evaporative cooling</li>
                    <li>• Natural ventilation</li>
                    <li>• Ceiling fans</li>
                    <li>• Smart thermostats</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Ηλιακά Πάνελ και Ανανεώσιμες Πηγές
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Φωτοβολταϊκά Συστήματα
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Τα ηλιακά πάνελ είναι μια εξαιρετική επένδυση για μακροπρόθεσμη εξοικονόμηση:
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-[#001f3f] mb-3">☀️ Οφέλη Ηλιακών Πάνελ</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Εξοικονόμηση:</strong> 50-90% μείωση λογαριασμού ρεύματος</li>
                  <li><strong>Επιστροφή:</strong> 6-10 χρόνια για επιστροφή επένδυσης</li>
                  <li><strong>Αξία:</strong> Αύξηση αξίας ακινήτου 3-5%</li>
                  <li><strong>Ανεξαρτησία:</strong> Μείωση εξάρτησης από δίκτυο</li>
                  <li><strong>Κρατική υποστήριξη:</strong> Επιδοτήσεις και φορολογικά οφέλη</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Κρατικές Επιδοτήσεις και Προγράμματα
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Ελληνικά Προγράμματα
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Το ελληνικό κράτος προσφέρει διάφορα προγράμματα επιδότησης:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Save at Home:</strong> Επιδότηση έως 50% για ενεργειακές ανακαινίσεις</li>
                <li><strong>Εξοικονόμηση στο Σπίτι:</strong> Για νοικοκυριά με χαμηλά εισοδήματα</li>
                <li><strong>Ηλιακός Αυτοπαραγωγή:</strong> Επιδότηση για φωτοβολταϊκά συστήματα</li>
                <li><strong>Ευρωπαϊκά κονδύλια:</strong> Μέσω του Recovery Fund</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Έξυπνα Συστήματα Διαχείρισης
              </h2>

              <h3 className="text-xl font-semibold text-[#001f3f] mt-6 mb-3">
                Smart Home Technology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Τα έξυπνα συστήματα μπορούν να βελτιώσουν σημαντικά την ενεργειακή απόδοση:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Smart thermostats:</strong> Αυτόματη ρύθμιση θερμοκρασίας</li>
                <li><strong>Energy monitoring:</strong> Παρακολούθηση κατανάλωσης σε πραγματικό χρόνο</li>
                <li><strong>Automated lighting:</strong> Έξυπνος φωτισμός με sensors</li>
                <li><strong>Smart appliances:</strong> Ενεργειακά αποδοτικές συσκευές</li>
                <li><strong>Home automation:</strong> Κεντρικός έλεγχος όλων των συστημάτων</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Υπολογισμός Επιστροφής Επένδυσης
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">📊 Παράδειγμα Υπολογισμού</h3>
                <p className="text-gray-700 mb-4">Για ένα σπίτι 100τ.μ. στην Αθήνα:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Επένδυση θερμομόνωσης:</strong> 4.000€</li>
                  <li><strong>Ετήσια εξοικονόμηση:</strong> 800€</li>
                  <li><strong>Επιστροφή επένδυσης:</strong> 5 χρόνια</li>
                  <li><strong>Ετήσια απόδοση:</strong> 20%</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#001f3f] mt-8 mb-4">
                Γιατί να Επιλέξετε την Trenovations;
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Η Trenovations είναι ειδικευμένη στην ενεργειακή ανακαίνιση:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>15+ χρόνια εμπειρίας σε ενεργειακές ανακαινίσεις</li>
                <li>Εξειδικευμένη ομάδα ενεργειακών συμβούλων</li>
                <li>Σύγχρονα υλικά και τεχνικές</li>
                <li>Βοήθεια με κρατικές επιδοτήσεις</li>
                <li>Εγγύηση ποιότητας και απόδοσης</li>
                <li>Δωρεάν ενεργειακός έλεγχος</li>
              </ul>

              <div className="bg-[#001f3f] text-white p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-3">Ξεκινήστε την Ενεργειακή σας Ανακαίνιση</h3>
                <p className="mb-4">Ζητήστε δωρεάν ενεργειακό έλεγχο και εκτίμηση!</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+306980703882" className="bg-white text-[#001f3f] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                    Κλήση: 6980703882
                  </a>
                  <a href="/#contact" className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#001f3f] transition-colors">
                    Δωρεάν Έλεγχος
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
