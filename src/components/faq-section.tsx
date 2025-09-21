"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Ποια είδη ανακαίνισης προσφέρετε;",
    answer: "Προσφέρουμε πλήρες φάσμα υπηρεσιών ανακαίνισης: ανακαίνιση κουζίνας, μπάνιου, σαλονιού, υπνοδωματίου, γραφείου και επαγγελματικών χώρων. Επίσης, κάνουμε ελαιοχρωματισμούς, τοποθέτηση πλακιδίων, κατασκευή γυψοσανίδων και ψευδοροφών, καθώς και εργασίες εξωτερικού χώρου."
  },
  {
    id: 2,
    question: "Πόσος χρόνος χρειάζεται για μια ανακαίνιση;",
    answer: "Η διάρκεια μιας ανακαίνισης εξαρτάται από το μέγεθος και την πολυπλοκότητα του έργου. Μια ανακαίνιση κουζίνας χρειάζεται 2-4 εβδομάδες, ενώ μια πλήρης ανακαίνιση σπιτιού μπορεί να διαρκέσει 2-6 μήνες. Σας παρέχουμε λεπτομερές χρονοδιάγραμμα πριν την έναρξη των εργασιών."
  },
  {
    id: 3,
    question: "Προσφέρετε εγγύηση στις εργασίες;",
    answer: "Ναι, προσφέρουμε εγγύηση 2 ετών για όλες τις εργασίες μας. Η εγγύηση καλύπτει τυχόν προβλήματα που προκύπτουν από κακή εκτέλεση ή ελαττωματικά υλικά. Επίσης, συνεργαζόμαστε με αξιόπιστους προμηθευτές που προσφέρουν δική τους εγγύηση στα υλικά."
  },
  {
    id: 4,
    question: "Μπορώ να μείνω στο σπίτι κατά τη διάρκεια της ανακαίνισης;",
    answer: "Αυτό εξαρτάται από το είδος της ανακαίνισης. Για μικρές εργασίες όπως βάψιμο ή αλλαγή πλακιδίων, μπορείτε να μείνετε. Για μεγάλες ανακαινίσεις που αφορούν υδραυλικά ή ηλεκτρικά, συνιστούμε να μετακομίσετε προσωρινά για την ασφάλειά σας και την άνεσή σας."
  },
  {
    id: 5,
    question: "Προσφέρετε δωρεάν εκτίμηση;",
    answer: "Ναι, προσφέρουμε δωρεάν εκτίμηση για όλα τα έργα ανακαίνισης. Η εκτίμηση περιλαμβάνει επίσκεψη στο χώρο, μέτρηση, συζήτηση των αναγκών σας και λεπτομερή προσφορά με χρονοδιάγραμμα. Δεν υπάρχει καμία υποχρέωση από την πλευρά σας."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σας για τις υπηρεσίες ανακαίνισης μας
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#001f3f] pr-4">
                    {item.question}
                  </span>
                  {openItems.includes(item.id) ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#001f3f] flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#001f3f] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/faq"
              className="inline-flex items-center text-[#001f3f] font-semibold hover:text-[#003d7a] transition-colors"
            >
              Δείτε όλες τις ερωτήσεις
              <ChevronDownIcon className="w-4 h-4 ml-2 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
