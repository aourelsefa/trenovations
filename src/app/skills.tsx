"use client";

const SERVICES = [
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419455833837801492/image.png?ex=68d1d2c3&is=68d08143&hm=d8056a25c2109bdf7973f42eb153e1f3824dfa2380c85ee7f9e1e839103a20b3",
    title: "Ανακαίνιση κουζίνας",
    description: "Δώστε νέα ζωή στην κουζίνα σας με μοντέρνες λύσεις που συνδυάζουν στυλ και πρακτικότητα.",
    href: "/services/anakainisi-kouzinas",
  },
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419456205473972374/image.png?ex=68d1d31b&is=68d0819b&hm=a8980e26f56a104195d3fd378898b989d5c33d0a368f9e4c68792737b0f7ee7e",
    title: "Ανακαίνιση μπάνιου",
    description: "Ανανεώστε το μπάνιο σας με σύγχρονο σχεδιασμό, εργονομία και υψηλής ποιότητας υλικά.",
    href: "/services/anakainisi-mpaniou",
  },
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419456253423517746/image.png?ex=68d1d327&is=68d081a7&hm=00fdb4b83cb0f74b8450edea1476139cf8608a82229d48ba95285178096875a3",
    title: "Ανακαίνιση σαλονιού & υπνοδωματίων",
    description: "Μεταμορφώνουμε υπνοδωμάτια και σαλόνια με ατμόσφαιρα που αντικατοπτρίζει το στυλ σας.",
    href: "/services/anakainisi-salonou-ypnodomatio",
  },
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419456300064047214/image.png?ex=68d1d332&is=68d081b2&hm=5f21974a2e7d319d02acd3837fac76f36e117637f5978992fe072c2ea641865a",
    title: "Ελαιοχρωματισμοί & Βαψίματα",
    description: "Φρέσκα χρώματα και άψογο φινίρισμα που ανανεώνουν τον χώρο σας.",
    href: "/services/elaiochromatismoi-bapsimata",
  },
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419456354174631996/image.png?ex=68d1d33f&is=68d081bf&hm=33020577b33b02fb75e46837d31d8f0299a671c3f74d87034fb7fe7990cd76c3",
    title: "Γυψοσανίδες & ψευδοροφές",
    description: "Σύγχρονες λύσεις για διαμόρφωση και αισθητική αναβάθμιση κάθε χώρου.",
    href: "/services/gypso-sanides-psedro-rofes",
  },
  {
    icon: "https://cdn.discordapp.com/attachments/773533251867377684/1419456404489769180/image.png?ex=68d1d34b&is=68d081cb&hm=3009166fbaf42eba765d13fcc8aa2ed0b748489f163458c64e843702b80453c4",
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
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
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