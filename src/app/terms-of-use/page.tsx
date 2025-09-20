import { Navbar, Footer } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Όροι Χρήσης",
  description: "Όροι χρήσης της ιστοσελίδας Trenovations. Κανόνες και προϋποθέσεις για τη χρήση των υπηρεσιών και του περιεχομένου μας.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fefdf2] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#001f3f] mb-6">
                Όροι Χρήσης
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
                    Σκοπός της Ιστοσελίδας
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Η ιστοσελίδα <strong>trenovations.gr</strong> λειτουργεί αποκλειστικά για ενημερωτικούς σκοπούς και παρέχει τη δυνατότητα επικοινωνίας μέσω της σχετικής φόρμας.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Χρήση της Φόρμας Επικοινωνίας
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Οι επισκέπτες μπορούν να χρησιμοποιούν τη φόρμα επικοινωνίας του <strong>trenovations.gr</strong> μόνο για νόμιμους και θεμιτούς σκοπούς.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Απαγορεύεται η αποστολή προσβλητικού, παράνομου ή ανεπιθύμητου περιεχομένου (spam).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Τα στοιχεία που καταχωρούνται στη φόρμα επικοινωνίας χρησιμοποιούνται αποκλειστικά για την εξυπηρέτηση του αιτήματος του χρήστη.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Προστασία Δεδομένων
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Το <strong>trenovations.gr</strong> σέβεται την ιδιωτικότητά σας. Τα προσωπικά δεδομένα που μας αποστέλλετε μέσω της φόρμας επικοινωνίας δεν κοινοποιούνται σε τρίτους και διατηρούνται μόνο για όσο είναι απαραίτητο για την επικοινωνία μαζί σας.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Περιορισμός Ευθύνης
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Το <strong>trenovations.gr</strong> δεν φέρει καμία ευθύνη για τυχόν τεχνικά προβλήματα που ενδέχεται να παρουσιαστούν κατά τη χρήση της ιστοσελίδας. Η χρήση της γίνεται με αποκλειστική ευθύνη του επισκέπτη.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Πνευματικά Δικαιώματα
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Όλο το περιεχόμενο της ιστοσελίδας (κείμενα, εικόνες, γραφικά, λογότυπα) είναι προστατευμένο από πνευματικά δικαιώματα και ανήκει στο <strong>trenovations.gr</strong> ή στους αντίστοιχους δικαιούχους.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Χρήση Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Η ιστοσελίδα χρησιμοποιεί cookies για να βελτιώσει την εμπειρία σας. Με τη συνέχιση της περιήγησης αποδέχεστε τη χρήση cookies σύμφωνα με την Πολιτική Απορρήτου μας.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">
                    Επικοινωνία
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Για οποιαδήποτε ερώτηση σχετικά με αυτούς τους όρους χρήσης, μπορείτε να επικοινωνήσετε μαζί μας:
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
                    Το <strong>trenovations.gr</strong> διατηρεί το δικαίωμα να τροποποιεί τους παρόντες όρους οποιαδήποτε στιγμή, χωρίς προηγούμενη ειδοποίηση. Η συνέχιση της χρήσης της ιστοσελίδας συνεπάγεται αποδοχή των τροποποιημένων όρων.
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
