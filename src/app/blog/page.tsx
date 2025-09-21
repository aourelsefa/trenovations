import { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Άρθρα & Συμβουλές Ανακαίνισης | Trenovations",
  description: "Μάθετε τα πάντα για την ανακαίνιση σπιτιού με τα άρθρα και τις συμβουλές των ειδικών μας. Ολοκληρωμένοι οδηγοί για κουζίνες, μπάνια, βαψίματα και πολλά άλλα.",
  keywords: "άρθρα ανακαίνισης, συμβουλές ανακαίνισης, οδηγοί ανακαίνισης, ανακαίνιση σπιτιού Αθήνα",
  authors: [{ name: "Trenovations" }],
  openGraph: {
    title: "Άρθρα & Συμβουλές Ανακαίνισης | Trenovations",
    description: "Μάθετε τα πάντα για την ανακαίνιση σπιτιού με τα άρθρα και τις συμβουλές των ειδικών μας.",
    type: "website",
    url: "https://trenovations.gr/blog",
  },
};

const ALL_BLOG_POSTS = [
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
  }
];

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#001f3f] mb-4">
              Άρθρα & Συμβουλές
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Μάθετε τα πάντα για την ανακαίνιση σπιτιού με τα άρθρα και τις συμβουλές των ειδικών μας. 
              Ολοκληρωμένοι οδηγοί, τάσεις και συμβουλές για κάθε έργο ανακαίνισης.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ALL_BLOG_POSTS.map((post) => (
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
                  
                  <h2 className="text-xl font-semibold text-[#001f3f] mb-3 leading-tight">
                    {post.title}
                  </h2>
                  
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
          <div className="bg-[#001f3f] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Έχετε Ερωτήσεις για την Ανακαίνιση σας;
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Η ομάδα των ειδικών μας είναι εδώ για να σας βοηθήσει με κάθε έργο ανακαίνισης.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-white text-[#001f3f] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Επικοινωνήστε μαζί μας
              </a>
              <a href="/#services" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#001f3f] transition-colors">
                Δείτε τις Υπηρεσίες μας
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
