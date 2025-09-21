"use client";

import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Ανακαίνιση Κουζίνας Αθήνα: Ολοκληρωμένος Οδηγός 2024",
    excerpt: "Μάθετε όλα για την ανακαίνιση κουζίνας στην Αθήνα. Σύγχρονα σχέδια, υλικά, κόστος και βήματα.",
    image: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15 Ιανουαρίου 2024",
    readTime: "8 λεπτά",
    href: "/blog/anakainisi-kouzinas-athina-odigos-2024",
    category: "Ανακαίνιση Κουζίνας"
  },
  {
    id: 2,
    title: "Ανακαίνιση Μπάνιου: Τάσεις και Συμβουλές 2024",
    excerpt: "Ανακαινίστε το μπάνιο σας με τις πιο σύγχρονες τάσεις 2024. Σύγχρονα σχέδια, υλικά, κόστος και βήματα.",
    image: "https://images.unsplash.com/photo-1617850687405-a18454436d77?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "10 Ιανουαρίου 2024",
    readTime: "6 λεπτά",
    href: "/blog/anakainisi-mpaniou-taseis-symvoules-2024",
    category: "Ανακαίνιση Μπάνιου"
  },
  {
    id: 3,
    title: "Ελαιοχρωματισμοί και Βαψίματα: Οδηγός Επιλογής Χρωμάτων",
    excerpt: "Μάθετε πώς να επιλέξετε τα τέλεια χρώματα για το σπίτι σας. Συμβουλές για ελαιοχρωματισμούς και βαψίματα.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "5 Ιανουαρίου 2024",
    readTime: "7 λεπτά",
    href: "/blog/elaiochromatismoi-bapsimata-odigos-epilogis-chromaton",
    category: "Βαψίματα"
  },
  {
    id: 4,
    title: "Γυψοσανίδες και Ψευδοροφές: Σύγχρονες Λύσεις Διαμόρφωσης",
    excerpt: "Μάθετε για τις σύγχρονες τεχνικές γυψοσανίδων και ψευδοροφών. Οδηγός επιλογής υλικών και εφαρμογής.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2 Ιανουαρίου 2024",
    readTime: "5 λεπτά",
    href: "/blog/gypso-sanides-psedro-rofes-sygchrones-lyseis-diamorfosis",
    category: "Γυψοσανίδες"
  },
  {
    id: 5,
    title: "Πλακάκια και Πατώματα: Οδηγός Επιλογής Υλικών",
    excerpt: "Μάθετε πώς να επιλέξετε τα τέλεια πλακάκια και πατώματα για το σπίτι σας. Συμβουλές για υλικά και σχέδια.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "1 Ιανουαρίου 2024",
    readTime: "8 λεπτά",
    href: "/blog/plakakia-patoma-odigos-epilogis-ylikon",
    category: "Πλακάκια"
  },
  {
    id: 6,
    title: "Κόστος Ανακαίνισης Σπιτιού 2024: Ολοκληρωμένος Οδηγός",
    excerpt: "Μάθετε το κόστος ανακαίνισης σπιτιού στην Αθήνα 2024. Λεπτομερής οδηγός τιμών για όλες τις υπηρεσίες ανακαίνισης.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "20 Ιανουαρίου 2024",
    readTime: "10 λεπτά",
    href: "/blog/kostos-anakainisis-spitiou-2024-odigos",
    category: "Κόστος Ανακαίνισης"
  },
  {
    id: 7,
    title: "Ανακαίνιση Σαλονιού: Ιδέες Σχεδιασμού και Συμβουλές 2024",
    excerpt: "Ανακαινίστε το σαλόνι σας με σύγχρονες ιδέες σχεδιασμού. Συμβουλές για χρώματα, έπιπλα, φωτισμό και οργάνωση χώρου.",
    image: "https://images.unsplash.com/photo-1674649207083-281c2517ab49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "18 Ιανουαρίου 2024",
    readTime: "9 λεπτά",
    href: "/blog/anakainisi-salonou-idees-sxediasmou-2024",
    category: "Ανακαίνιση Σαλονιού"
  },
  {
    id: 8,
    title: "Ανακαίνιση Υπνοδωματίου: Συμβουλές για Ύπνο και Χαλάρωση",
    excerpt: "Ανακαινίστε το υπνοδωμάτιό σας για καλύτερο ύπνο και χαλάρωση. Συμβουλές για χρώματα, έπιπλα, φωτισμό και οργάνωση.",
    image: "https://images.unsplash.com/photo-1646592492046-da1c3765f74a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "16 Ιανουαρίου 2024",
    readTime: "7 λεπτά",
    href: "/blog/anakainisi-ypnodomatio-symvoules-ypno-chalarosi",
    category: "Ανακαίνιση Υπνοδωματίου"
  },
  {
    id: 9,
    title: "Ενεργειακή Ανακαίνιση: Εξοικονόμηση Ενέργειας και Κόστους",
    excerpt: "Μάθετε για την ενεργειακή ανακαίνιση σπιτιού. Συμβουλές για εξοικονόμηση ενέργειας, μόνωση, ηλιακά πάνελ και κρατικές επιδοτήσεις.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "14 Ιανουαρίου 2024",
    readTime: "11 λεπτά",
    href: "/blog/energeiaki-anakainisi-exoikonomisi-energeias-kostous",
    category: "Ενεργειακή Ανακαίνιση"
  },
  {
    id: 10,
    title: "Ανακαίνιση Γραφείου: Σύγχρονος Εργασιακός Χώρος",
    excerpt: "Ανακαινίστε το γραφείο σας για μεγαλύτερη παραγωγικότητα. Συμβουλές για σχεδιασμό, φωτισμό, ακουστική και έξυπνες λύσεις.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "12 Ιανουαρίου 2024",
    readTime: "8 λεπτά",
    href: "/blog/anakainisi-grafeiou-sygchronos-ergasiakos-choros",
    category: "Ανακαίνιση Γραφείου"
  }
];

export function BlogSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#001f3f] mb-4 leading-tight">
            Άρθρα & Συμβουλές
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Μάθετε τα πάντα για την ανακαίνιση σπιτιού με τα άρθρα και τις συμβουλές των ειδικών μας.
          </p>
        </div>

        {/* Blog Posts Grid - Show only first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article key={post.id} className="professional-card overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#001f3f] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#001f3f] mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.href}
                  className="inline-flex items-center text-[#001f3f] font-semibold hover:text-[#002a4a] transition-colors"
                >
                  Διαβάστε περισσότερα
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="/#contact" className="professional-button text-white px-6 py-3 text-base inline-block">
              Επικοινωνήστε μαζί μας
            </a>
            <a href="/blog" className="border-2 border-[#001f3f] text-[#001f3f] px-6 py-3 text-base inline-block font-semibold hover:bg-[#001f3f] hover:text-white transition-colors">
              Δείτε Όλα τα Άρθρα
            </a>
          </div>
          <p className="text-base text-gray-600">
            Έχετε ερωτήσεις για την ανακαίνιση σπιτιού σας;
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
