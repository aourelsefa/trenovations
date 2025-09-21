import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-8">
      <div className="container mx-auto container-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Professional Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Trenovations
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, 
              ποιότητα υλικών και άψογη κατασκευή.
            </p>
          </div>
          
          {/* Professional Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Γρήγοροι Σύνδεσμοι
            </h4>
            <div className="space-y-1">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Αρχική
              </a>
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Έργα
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Υπηρεσίες
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Επικοινωνία
              </a>
              <a href="/faq" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Συχνές Ερωτήσεις
              </a>
            </div>
          </div>
          
          {/* Professional Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Επικοινωνία
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <a href="tel:+306980703882" className="text-gray-300 hover:text-white transition-colors">
                  6980703882
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-white" />
                <span>info@trenovations.gr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-white" />
                <span>Αθήνα</span>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Νομικά
            </h4>
            <div className="space-y-1">
              <a href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Πολιτική Απορρήτου
              </a>
              <a href="/terms-of-use" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Όροι Χρήσης
              </a>
            </div>
          </div>
        </div>
        
        {/* Professional Bottom Bar */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {CURRENT_YEAR} Trenovations. Όλα τα δικαιώματα διατηρούνται.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="mailto:info@trenovations.gr" 
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                title="Email"
              >
                <EnvelopeIcon className="w-4 h-4 text-[#001f3f]" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61579056175233" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 text-[#001f3f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/trenovationsgr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 text-[#001f3f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;