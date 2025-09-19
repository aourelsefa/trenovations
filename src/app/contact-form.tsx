"use client";

import {
  Typography,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section id="contact" className="section-spacing bg-[#fefdf2]">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-3xl lg:text-4xl font-semibold text-[#001f3f] mb-4 leading-tight"
          >
            Επικοινωνήστε μαζί μας
          </Typography>
          
          <Typography
            variant="lead"
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Μη διστάσετε να επικοινωνήσετε μαζί μας μέσω της φόρμας επικοινωνίας 
            και ας ξεκινήσουμε ένα ταξίδι καινοτομίας και επιτυχίας.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Professional Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#001f3f] p-6 rounded-lg text-white">
              <Typography variant="h2" className="font-semibold mb-4 text-xl">
                Στοιχεία Επικοινωνίας
              </Typography>
              
              <Typography className="text-gray-200 mb-6 text-sm">
                Συμπληρώστε τη φόρμα και η ομάδα μας θα σας απαντήσει εντός 24 ωρών.
              </Typography>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Typography className="font-semibold text-sm">Τηλέφωνο</Typography>
                    <Typography className="text-gray-200 text-sm">6980703882</Typography>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Typography className="font-semibold text-sm">Email</Typography>
                    <Typography className="text-gray-200 text-sm">info@trenovations.gr</Typography>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Typography className="font-semibold text-sm">Τοποθεσία</Typography>
                    <Typography className="text-gray-200 text-sm">Αθήνα</Typography>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="professional-icon">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Typography className="font-semibold text-sm">Ώρες Λειτουργίας</Typography>
                    <Typography className="text-gray-200 text-sm">Δευτέρα - Παρασκευή: 8:00 - 18:00</Typography>
                  </div>
                </div>
              </div>
              
              {/* Professional Social Media */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <Typography className="font-semibold mb-3 text-sm">Ακολουθήστε μας</Typography>
                <div className="flex gap-3">
                  <IconButton className="bg-white/20 hover:bg-white/30 text-white p-2">
                    <i className="fa-brands fa-facebook text-sm" />
                  </IconButton>
                  <IconButton className="bg-white/20 hover:bg-white/30 text-white p-2">
                    <i className="fa-brands fa-instagram text-sm" />
                  </IconButton>
                  <IconButton className="bg-white/20 hover:bg-white/30 text-white p-2">
                    <i className="fa-brands fa-linkedin text-sm" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="professional-card p-6">
            <Typography variant="h2" className="font-semibold text-[#001f3f] mb-4 text-xl">
              Στείλτε μας μήνυμα
            </Typography>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Όνομα *
                  </Typography>
                  <Input
                    color="gray"
                    size="md"
                    placeholder="π.χ. Γιάννης"
                    className="bg-white"
                  />
                </div>
                <div>
                  <Typography className="font-semibold text-[#001f3f] mb-1 text-sm">
                    Επώνυμο *
                  </Typography>
                  <Input
                    color="gray"
                    size="md"
                    placeholder="π.χ. Παπαδόπουλος"
                    className="bg-white"
                  />
                </div>
              </div>
              
              <div>
                <Typography className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Email *
                </Typography>
                <Input
                  color="gray"
                  size="md"
                  placeholder="π.χ. giannis@email.com"
                  className="bg-white"
                />
              </div>
              
              <div>
                <Typography className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Τηλέφωνο
                </Typography>
                <Input
                  color="gray"
                  size="md"
                  placeholder="π.χ. 6981234567"
                  className="bg-white"
                />
              </div>
              
              <div>
                <Typography className="font-semibold text-[#001f3f] mb-2 text-sm">
                  Τι σας ενδιαφέρει; *
                </Typography>
                <div className="space-y-2">
                  <Radio
                    color="gray"
                    name="type"
                    label="Ανακαίνιση Σπιτιού"
                    defaultChecked
                    className="text-[#001f3f] text-sm"
                  />
                  <Radio 
                    color="gray" 
                    name="type" 
                    label="Ανακαίνιση Επαγγελματικού Χώρου"
                    className="text-[#001f3f] text-sm"
                  />
                  <Radio 
                    color="gray" 
                    name="type" 
                    label="Τεχνικές Εργασίες"
                    className="text-[#001f3f] text-sm"
                  />
                  <Radio 
                    color="gray" 
                    name="type" 
                    label="Άλλο"
                    className="text-[#001f3f] text-sm"
                  />
                </div>
              </div>
              
              <div>
                <Typography className="font-semibold text-[#001f3f] mb-1 text-sm">
                  Το Μήνυμά σας *
                </Typography>
                <Textarea
                  color="gray"
                  size="md"
                  placeholder="Περιγράψτε το έργο σας..."
                  className="bg-white min-h-[100px]"
                />
              </div>
              
              <Button 
                className="w-full professional-button text-white py-3 text-base"
                size="md"
              >
                Αποστολή Μηνύματος
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;