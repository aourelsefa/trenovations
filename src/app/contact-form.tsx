"use client";

import { useState, useRef, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: 'Ανακαίνιση Σπιτιού',
    message: '',
    privacyConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const startTimeRef = useRef<number>(Date.now());
  
  // Honeypot field (hidden from users)
  const honeypotRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Set start time when component mounts
    startTimeRef.current = Date.now();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const validateForm = () => {
    // Check honeypot (if filled, it's a bot)
    if (honeypotRef.current?.value) {
      console.log('Bot detected: Honeypot field filled');
      return false;
    }
    
    // Check time-based validation (too fast = bot)
    const timeSpent = Date.now() - startTimeRef.current;
    if (timeSpent < 3000) { // Less than 3 seconds
      console.log('Bot detected: Form submitted too quickly');
      return false;
    }
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.privacyConsent) {
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία και περιμένετε λίγο πριν την αποστολή.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'Ανακαίνιση Σπιτιού',
        message: '',
        privacyConsent: false
      });
      
      // Reset start time
      startTimeRef.current = Date.now();
      
    } catch (error) {
      setSubmitMessage('Υπήρξε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://trenovations.gr/wp-content/uploads/2025/09/design-2.png"
          alt="Επικοινωνία Trenovations - Σύγχρονος σχεδιασμός εσωτερικών χώρων"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
            Επικοινωνήστε μαζί μας
          </h1>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
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
                      <span className="font-semibold text-sm">Τηλέφωνο</span><br />
                      <span className="text-gray-200 text-sm">6980703882</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="professional-icon">
                      <EnvelopeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Email</span><br />
                      <span className="text-gray-200 text-sm">info@trenovations.gr</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="professional-icon">
                      <MapPinIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Τοποθεσία</span><br />
                      <span className="text-gray-200 text-sm">Αθήνα</span>
                    </div>
                  </div>

              </div>
              
              {/* Professional Social Media */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <span className="font-semibold mb-3 text-sm">Ακολουθήστε μας</span>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579056175233" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md transition-colors"
                  >
                    <i className="fa-brands fa-facebook text-sm" />
                  </a>
                  <a 
                    href="https://www.instagram.com/trenovationsgr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md transition-colors"
                  >
                    <i className="fa-brands fa-instagram text-sm" />
                  </a>
                  <a 
                    href="mailto:info@trenovations.gr"
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-md transition-colors"
                  >
                    <i className="fa-solid fa-envelope text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-[#001f3f] mb-4 text-xl">
              Στείλτε μας μήνυμα
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users but visible to bots */}
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                style={{ 
                  position: 'absolute', 
                  left: '-9999px', 
                  opacity: 0, 
                  pointerEvents: 'none' 
                }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Όνομα *
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="π.χ. Γιάννης"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                  />
                </div>
                <div>
                  <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Επώνυμο *
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="π.χ. Παπαδόπουλος"
                    required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="π.χ. giannis@email.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent"
                />
              </div>
              
              <div>
                <span className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Τηλέφωνο
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
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
                      checked={formData.type === 'Ανακαίνιση Σπιτιού'}
                      onChange={handleInputChange}
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Ανακαίνιση Σπιτιού</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Ανακαίνιση Επαγγελματικού Χώρου"
                      checked={formData.type === 'Ανακαίνιση Επαγγελματικού Χώρου'}
                      onChange={handleInputChange}
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Ανακαίνιση Επαγγελματικού Χώρου</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Τεχνικές Εργασίες"
                      checked={formData.type === 'Τεχνικές Εργασίες'}
                      onChange={handleInputChange}
                      className="text-[#001f3f] focus:ring-[#001f3f]"
                    />
                    <span>Τεχνικές Εργασίες</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="type"
                      value="Άλλο"
                      checked={formData.type === 'Άλλο'}
                      onChange={handleInputChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Περιγράψτε το έργο σας..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent min-h-[100px] resize-vertical"
                />
              </div>
              
              {/* Privacy Consent Checkbox */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 text-[#001f3f] focus:ring-[#001f3f] rounded"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Συμφωνώ με την επεξεργασία των προσωπικών μου δεδομένων σύμφωνα με την 
                    <a href="/privacy-policy" className="text-[#001f3f] hover:underline ml-1">
                      Πολιτική Απορρήτου
                    </a> 
                    και τους 
                    <a href="/terms-of-use" className="text-[#001f3f] hover:underline ml-1">
                      Όρους Χρήσης
                    </a>
                    . *
                  </span>
                </label>
              </div>
              
              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-3 rounded-md text-sm ${
                  submitMessage.includes('επιτυχώς') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full professional-button text-white py-3 text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;