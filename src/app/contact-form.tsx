"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section id="contact" className="section-spacing bg-[#fefdf2]">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#001f3f] mb-4 leading-tight">
            Επικοινωνήστε μαζί μας
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Μη διστάσετε να επικοινωνήσετε μαζί μας μέσω της φόρμας επικοινωνίας
            και ας ξεκινήσουμε ένα ταξίδι καινοτομίας και επιτυχίας.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Professional Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#001f3f] p-6 rounded-lg text-white">
              <h2 className="font-semibold mb-4 text-xl">
                Στοιχεία Επικοινωνίας
              </h2>
              
              <p className="text-gray-200 mb-6 text-sm">
                Συμπληρώστε τη φόρμα και η ομάδα μας θα σας απαντήσει εντός 24 ωρών.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Τηλέφωνο</span>
                    <span className="text-gray-200 text-sm">6980703882</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Email</span>
                    <span className="text-gray-200 text-sm">info@trenovations.gr</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Τοποθεσία</span>
                    <span className="text-gray-200 text-sm">Αθήνα</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Ώρες Λειτουργίας</span>
                    <span className="text-gray-200 text-sm">Δευτέρα - Παρασκευή: 8:00 - 18:00</span>
                  </div>
                </div>
              </div>
              
              {/* Professional Social Media */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <span className="font-semibold mb-3 text-sm">Ακολουθήστε μας</span>
                <div className="flex gap-3">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md">
                    <i className="fa-brands fa-facebook text-sm" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md">
                    <i className="fa-brands fa-instagram text-sm" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md">
                    <i className="fa-brands fa-linkedin text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="professional-card p-6">
            <h2 className="font-semibold text-[#001f3f] mb-4 text-xl">
              Στείλτε μας μήνυμα
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Όνομα *
                  </span>
                  <input
                    type="text"
                    placeholder="π.χ. Γιάννης"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                  />
                </div>
                <div>
                  <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Επώνυμο *
                  </span>
                  <input
                    type="text"
                    placeholder="π.χ. Παπαδόπουλος"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Email *
                </span>
                <input
                  type="email"
                  placeholder="π.χ. giannis@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                />
              </div>
              
              <div>
                <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Τηλέφωνο
                </span>
                <input
                  type="tel"
                  placeholder="π.χ. 6981234567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                />
              </div>
              
              <div>
                <span className="font-semibold text-[#001f3f] mb-2 text-sm">
                  Τι σας ενδιαφέρει; *
                </span>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Ανακαίνιση Σπιτιού"
                      defaultChecked
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Ανακαίνιση Σπιτιού</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Ανακαίνιση Επαγγελματικού Χώρου"
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Ανακαίνιση Επαγγελματικού Χώρου</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Τεχνικές Εργασίες"
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Τεχνικές Εργασίες</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Άλλο"
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Άλλο</span>
                  </label>
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Το Μήνυμά σας *
                </span>
                <textarea
                  placeholder="Περιγράψτε το έργο σας..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent min-h-[100px] resize-vertical"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full professional-button text-white py-3 text-base"
              >
                Αποστολή Μηνύματος
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;