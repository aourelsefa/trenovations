"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  CubeIcon,
  BoltIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Ανακαίνιση κουζίνας",
    description: "Δώστε νέα ζωή στην κουζίνα σας με μοντέρνες λύσεις που συνδυάζουν στυλ και πρακτικότητα.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Ανακαίνιση μπάνιου",
    description: "Ανανεώστε το μπάνιο σας με σύγχρονο σχεδιασμό, εργονομία και υψηλής ποιότητας υλικά.",
  },
  {
    icon: PaintBrushIcon,
    title: "Ανακαίνιση σαλονιού & υπνοδωματίων",
    description: "Μεταμορφώνουμε υπνοδωμάτια και σαλόνια με ατμόσφαιρα που αντικατοπτρίζει το στυλ σας.",
  },
  {
    icon: CubeIcon,
    title: "Ελαιοχρωματισμοί & Βαψίματα",
    description: "Φρέσκα χρώματα και άψογο φινίρισμα που ανανεώνουν τον χώρο σας.",
  },
  {
    icon: BoltIcon,
    title: "Γυψοσανίδες & ψευδοροφές",
    description: "Σύγχρονες λύσεις για διαμόρφωση και αισθητική αναβάθμιση κάθε χώρου.",
  },
  {
    icon: CogIcon,
    title: "Πλακάκια & Πατώματα",
    description: "Ανθεκτικά υλικά και άψογη τοποθέτηση για όμορφα και λειτουργικά πατώματα.",
  },
];

export function Skills() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            className="text-3xl lg:text-4xl font-semibold text-[#001f3f] mb-4 leading-tight"
          >
            Υπηρεσίες Ανακαίνισης
          </Typography>
          
          <Typography
            variant="lead"
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Κάθε έργο ανακαίνισης το αντιμετωπίζουμε με επαγγελματισμό και μεράκι, 
            προσφέροντας λύσεις που συνδυάζουν λειτουργικότητα, αισθητική και ποιότητα.
          </Typography>
        </div>

        {/* Professional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="professional-card p-6 text-center"
            >
              {/* Professional Icon */}
              <div className="professional-icon mb-4 mx-auto w-fit">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Professional Content */}
              <Typography 
                variant="h3" 
                className="text-lg font-semibold text-[#001f3f] mb-3"
              >
                {service.title}
              </Typography>
              
              <Typography className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </Typography>
            </div>
          ))}
        </div>

        {/* Professional Bottom CTA */}
        <div className="text-center mt-12">
          <Typography className="text-base text-gray-600 mb-4">
            Έτοιμοι να ξεκινήσουμε το επόμενο έργο σας;
          </Typography>
          <Button className="professional-button text-white px-6 py-3 text-base">
            Επικοινωνήστε μαζί μας
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Skills;