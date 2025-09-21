"use client";

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
    href: "/services/anakainisi-kouzinas",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Ανακαίνιση μπάνιου",
    description: "Ανανεώστε το μπάνιο σας με σύγχρονο σχεδιασμό, εργονομία και υψηλής ποιότητας υλικά.",
    href: "/services/anakainisi-mpaniou",
  },
  {
    icon: PaintBrushIcon,
    title: "Ανακαίνιση σαλονιού & υπνοδωματίων",
    description: "Μεταμορφώνουμε υπνοδωμάτια και σαλόνια με ατμόσφαιρα που αντικατοπτρίζει το στυλ σας.",
    href: "/services/anakainisi-salonou-ypnodomatio",
  },
  {
    icon: CubeIcon,
    title: "Ελαιοχρωματισμοί & Βαψίματα",
    description: "Φρέσκα χρώματα και άψογο φινίρισμα που ανανεώνουν τον χώρο σας.",
    href: "/services/elaiochromatismoi-bapsimata",
  },
  {
    icon: BoltIcon,
    title: "Γυψοσανίδες & ψευδοροφές",
    description: "Σύγχρονες λύσεις για διαμόρφωση και αισθητική αναβάθμιση κάθε χώρου.",
    href: "/services/gypso-sanides-psedro-rofes",
  },
  {
    icon: CogIcon,
    title: "Πλακάκια & Πατώματα",
    description: "Ανθεκτικά υλικά και άψογη τοποθέτηση για όμορφα και λειτουργικά πατώματα.",
    href: "/services/plakakia-patoma",
  },
];

export function Skills() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#001f3f] mb-4 leading-tight">
            Υπηρεσίες Ανακαίνισης
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Κάθε έργο ανακαίνισης το αντιμετωπίζουμε με επαγγελματισμό και μεράκι, 
            προσφέροντας λύσεις που συνδυάζουν λειτουργικότητα, αισθητική και ποιότητα.
          </p>
        </div>

        {/* Professional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="professional-card p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              {/* Professional Icon */}
              <div className="professional-icon mb-4 mx-auto w-fit">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Professional Content */}
              <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>

        {/* Professional Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-base text-gray-600 mb-4">
            Έτοιμοι να ξεκινήσουμε το επόμενο έργο σας;
          </p>
          <a href="#contact" className="professional-button text-white px-6 py-3 text-base inline-block">
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;