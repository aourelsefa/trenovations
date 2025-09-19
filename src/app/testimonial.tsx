"use client";

import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Μαρία Κωνσταντίνου",
      text: "Η ομάδα ήταν άψογη από την αρχή μέχρι το τέλος. Μου ανακαίνισαν το διαμέρισμα με γούστο και συνέπεια. Η παράδοση έγινε ακριβώς στην ώρα της και το αποτέλεσμα ξεπέρασε τις προσδοκίες μου!",
      avatar: "/image/avatar1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Νίκος Αντωνίου",
      text: "Είχα άγχος για την ανακαίνιση του καταστήματός μου, αλλά η συνεργασία ήταν πραγματικά επαγγελματική. Μου πρότειναν ιδέες που δεν είχα φανταστεί και τελικά ο χώρος έγινε πιο λειτουργικός και εντυπωσιακός.",
      avatar: "/image/avatar2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Ελένη Παπαδάκη",
      text: "Εξαιρετική δουλειά! Η ποιότητα των υλικών, η λεπτομέρεια στην κατασκευή και η διάθεση να βρουν λύσεις σε κάθε πρόβλημα με εντυπωσίασαν. Σίγουρα θα τους προτιμήσω ξανά για μελλοντικά έργα.",
      avatar: "/image/avatar3.jpg",
      rating: 5
    }
  ];

  return (
    <section className="section-spacing bg-[#001f3f]">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
            Τι λένε οι πελάτες μας
          </h1>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Πάνω από 600+ ευχαριστιμένους πελάτες μας μιλούν για την εμπειρία τους.
          </p>
        </div>

        {/* Professional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              {/* Professional Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-white" />
                ))}
              </div>
              
              {/* Professional Testimonial Text */}
              <p className="text-gray-100 leading-relaxed mb-4 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Professional Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    width={40}
                    height={40}
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-300 text-xs">
                    Ευχαριστιμένος Πελάτης
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Stats Section */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h2 className="font-semibold text-white mb-1 text-3xl">
                600+
              </h2>
              <p className="text-gray-200 text-sm">
                Ευχαριστιμένοι Πελάτες
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-1 text-3xl">
                15+
              </h2>
              <p className="text-gray-200 text-sm">
                Χρόνια Εμπειρίας
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-1 text-3xl">
                100%
              </h2>
              <p className="text-gray-200 text-sm">
                Επαρκής
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;