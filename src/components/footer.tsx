import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-8">
      <div className="container mx-auto container-spacing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Professional Company Info */}
          <div>
            <Typography className="text-xl font-semibold mb-3">
              Trenovations
            </Typography>
            <Typography className="text-gray-300 leading-relaxed text-sm">
              Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, 
              ποιότητα υλικών και άψογη κατασκευή.
            </Typography>
          </div>
          
          {/* Professional Quick Links */}
          <div>
            <Typography className="font-semibold text-sm mb-3">
              Γρήγοροι Σύνδεσμοι
            </Typography>
            <div className="space-y-1">
              <Typography as="a" href="#home" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Αρχική
              </Typography>
              <Typography as="a" href="#services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Υπηρεσίες
              </Typography>
              <Typography as="a" href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Επικοινωνία
              </Typography>
            </div>
          </div>
          
          {/* Professional Contact Info */}
          <div>
            <Typography className="font-semibold text-sm mb-3">
              Επικοινωνία
            </Typography>
            <div className="space-y-1 text-gray-300 text-sm">
              <Typography>📞 6980703882</Typography>
              <Typography>✉️ info@trenovations.gr</Typography>
              <Typography>📍 Αθήνα</Typography>
            </div>
          </div>
        </div>
        
        {/* Professional Bottom Bar */}
        <div className="border-t border-gray-600 pt-4 text-center">
          <Typography className="text-gray-300 text-sm">
            &copy; {CURRENT_YEAR} Trenovations. Όλα τα δικαιώματα διατηρούνται.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;