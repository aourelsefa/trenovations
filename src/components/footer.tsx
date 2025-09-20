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
            </div>
          </div>
          
          {/* Professional Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Επικοινωνία
            </h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <div>📞 6980703882</div>
              <div>✉️ info@trenovations.gr</div>
              <div>📍 Αθήνα</div>
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
        <div className="border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {CURRENT_YEAR} Trenovations. Όλα τα δικαιώματα διατηρούνται.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;