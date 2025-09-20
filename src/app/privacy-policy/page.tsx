import { Navbar, Footer } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Πολιτική απορρήτου και προστασίας δεδομένων της Trenovations. Πληροφορίες για τη συλλογή, χρήση και προστασία των προσωπικών δεδομένων σας.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fefdf2] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#001f3f] mb-6">
                Πολιτική Απορρήτου
              </h1>
              <p className="text-lg text-gray-600">
                Τελευταία ενημέρωση: Ιανουάριος 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Συλλογή Δεδομένων
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Το <strong>trenovations.gr</strong> συλλέγει προσωπικά δεδομένα μόνο όταν τα υποβάλλετε εσείς μέσω της φόρμας επικοινωνίας (π.χ. όνομα, email, μήνυμα).
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Σκοπός Χρήσης Δεδομένων
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Τα δεδομένα που μας παρέχετε χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας για ζητήματα που αφορούν τις υπηρεσίες μας, την απάντηση σε αιτήματά σας και την παροχή των υπηρεσιών που ζητάτε.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Κοινοποίηση σε Τρίτους
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Το <strong>trenovations.gr</strong> δεν πωλεί, δεν ενοικιάζει και δεν κοινοποιεί τα προσωπικά σας δεδομένα σε τρίτους, εκτός αν αυτό απαιτείται από τον νόμο.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Ασφάλεια Δεδομένων
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Λαμβάνουμε όλα τα απαραίτητα μέτρα για να προστατεύουμε τα προσωπικά σας δεδομένα από μη εξουσιοδοτημένη πρόσβαση ή χρήση.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Χρόνος Διατήρησης
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Τα προσωπικά δεδομένα που αποστέλλετε μέσω της φόρμας επικοινωνίας διατηρούνται μόνο για όσο διάστημα είναι απαραίτητο για την ολοκλήρωση της επικοινωνίας και την παροχή των υπηρεσιών που ζητάτε.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Cookies και Τεχνολογίες Παρακολούθησης
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Η ιστοσελίδα μας χρησιμοποιεί cookies και παρόμοιες τεχνολογίες για να βελτιώσουμε την εμπειρία σας και να συλλέγουμε στατιστικά στοιχεία. Αυτά περιλαμβάνουν:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#001f3f] mb-2">Αναγκαστικά Cookies</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Απαραίτητα για τη βασική λειτουργία της ιστοσελίδας. Δεν μπορούν να απενεργοποιηθούν.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                        <li>Cookies φόρμας επικοινωνίας</li>
                        <li>Cookies ασφαλείας</li>
                        <li>Cookies συνεδρίας</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#001f3f] mb-2">Αναλυτικά Cookies</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Συλλέγουν ανώνυμα στατιστικά στοιχεία για τη βελτίωση της ιστοσελίδας.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                        <li>Google Analytics - ανώνυμα στατιστικά επισκεψιμότητας</li>
                        <li>Cookies απόδοσης - μέτρηση ταχύτητας ιστοσελίδας</li>
                        <li>Cookies χρήσης - ανάλυση συμπεριφοράς χρήστη</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#001f3f] mb-2">Λειτουργικά Cookies</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Βελτιώνουν τη λειτουργικότητα της ιστοσελίδας και τις προτιμήσεις χρήστη.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                        <li>Cookies προτιμήσεων γλώσσας</li>
                        <li>Cookies αποθήκευσης φόρμας</li>
                        <li>Cookies εξατομίκευσης περιεχομένου</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#001f3f] mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Χρησιμοποιούνται για την παροχή εξατομικευμένων διαφημίσεων και περιεχομένου.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                        <li>Cookies διαφημιστικών δικτύων</li>
                        <li>Cookies παρακολούθησης μετατροπών</li>
                        <li>Cookies εξατομίκευσης διαφημίσεων</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-[#001f3f] mb-2">Διαχείριση Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies σας οποιαδήποτε στιγμή μέσω του banner cookies που εμφανίζεται στην ιστοσελίδα μας.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Σημείωση:</strong> Η απενεργοποίηση ορισμένων cookies μπορεί να επηρεάσει τη λειτουργικότητα της ιστοσελίδας.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Δικαιώματα σας (GDPR)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR), έχετε τα ακόλουθα δικαιώματα:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Πρόσβασης</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να ζητήσετε πληροφορίες σχετικά με τα προσωπικά δεδομένα που επεξεργαζόμαστε.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Διόρθωσης</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να ζητήσετε τη διόρθωση ανακριβών ή ελλιπών δεδομένων.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Διαγραφής</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να ζητήσετε τη διαγραφή των προσωπικών σας δεδομένων.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Περιορισμού</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να ζητήσετε τον περιορισμό της επεξεργασίας των δεδομένων σας.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Δεδομένων</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να ζητήσετε τα δεδομένα σας σε δομημένη μορφή.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#001f3f] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</div>
                      <div>
                        <h4 className="font-semibold text-[#001f3f] mb-1">Δικαίωμα Αντιρρήσεως</h4>
                        <p className="text-sm text-gray-600">Μπορείτε να αντιταχθείτε στην επεξεργασία των δεδομένων σας.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-[#001f3f] mb-2">Ασκήση Δικαιωμάτων</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Για να ασκήσετε οποιοδήποτε από τα παραπάνω δικαιώματα, επικοινωνήστε μαζί μας στο info@trenovations.gr.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Χρόνος Απάντησης:</strong> Θα απαντήσουμε στο αίτημά σας εντός 30 ημερών.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Επικοινωνία
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Για οποιαδήποτε ερώτηση σχετικά με αυτή την πολιτική απορρήτου, μπορείτε να επικοινωνήσετε μαζί μας:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> info@trenovations.gr</p>
                    <p className="text-gray-700 mb-2"><strong>Τηλέφωνο:</strong> 6980703882</p>
                    <p className="text-gray-700"><strong>Τοποθεσία:</strong> Αθήνα</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Τροποποιήσεις
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Το <strong>trenovations.gr</strong> διατηρεί το δικαίωμα να τροποποιεί αυτή την πολιτική απορρήτου οποιαδήποτε στιγμή. Οι τροποποιήσεις θα δημοσιεύονται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
