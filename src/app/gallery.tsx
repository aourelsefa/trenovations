"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "Μοντέρνο Μπάνιο",
    category: "Μπάνιο",
    image: "https://plus.unsplash.com/premium_photo-1676320514021-7c68dda90026?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Σύγχρονο Σαλόνι",
    category: "Σαλόνι",
    image: "https://images.unsplash.com/photo-1674649207083-281c2517ab49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Εξαιρετικό Σαλόνι",
    category: "Σαλόνι",
    image: "https://images.unsplash.com/photo-1662394027253-dc37506c2587?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Μοντέρνα Κουζίνα",
    category: "Κουζίνα",
    image: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Σαλόνι Ονείρων",
    category: "Σαλόνι",
    image: "https://images.unsplash.com/photo-1631193908297-ebadbad17167?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Εξωτικό Μπάνιο",
    category: "Μπάνιο",
    image: "https://images.unsplash.com/photo-1617850687405-a18454436d77?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Σύγχρονη Κουζίνα",
    category: "Κουζίνα",
    image: "https://images.unsplash.com/photo-1733431766131-2e79fc11cbb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Υπνοδωμάτιο Ονείρων",
    category: "Υπνοδωμάτιο",
    image: "https://images.unsplash.com/photo-1646592492046-da1c3765f74a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const CATEGORIES = ["Όλα", "Κουζίνα", "Μπάνιο", "Σαλόνι", "Υπνοδωμάτιο", "Επαγγελματικός", "Τραπεζαρία"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Όλα");
  const [selectedProject, setSelectedProject] = useState<typeof GALLERY_PROJECTS[0] | null>(null);
  const [open, setOpen] = useState(false);

  const filteredProjects = activeCategory === "Όλα" 
    ? GALLERY_PROJECTS 
    : GALLERY_PROJECTS.filter(project => project.category === activeCategory);

  const handleOpen = (project: typeof GALLERY_PROJECTS[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="section-spacing bg-[#fefdf2]">
      <div className="container mx-auto container-spacing">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#001f3f] mb-6 leading-tight">
            Τα έργα μας
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Δείτε τα πιο εντυπωσιακά έργα ανακαίνισης που έχουμε ολοκληρώσει.
          </p>

          {/* Working Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-[#001f3f] text-white" 
                    : "border border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="professional-card overflow-hidden group cursor-pointer"
              onClick={() => handleOpen(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay with Title */}
                <div className="absolute inset-0 bg-[#001f3f]/0 group-hover:bg-[#001f3f]/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <EyeIcon className="w-8 h-8 text-white mx-auto mb-2" />
                    <span className="text-white font-semibold text-sm">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#001f3f] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={handleClose}>
            <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

            {/* Modal Image */}
            {selectedProject && (
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {selectedProject.category}
                  </p>
                </div>
              </div>
            )}
            </div>
          </div>
        )}

        {/* Professional CTA Section */}
        <div className="text-center bg-[#001f3f] rounded-xl p-10 text-white">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            Έτοιμοι να Δημιουργήσουμε το Δικό σας Έργο;
          </h2>
          
          <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto">
            Αφήστε μας να μεταμορφώσουμε τον χώρο σας σε κάτι εξαιρετικό.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-white text-[#001f3f] px-6 py-3 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowRightIcon className="w-4 h-4 mr-2" />
              Ξεκινήστε το Έργο σας
            </a>
            <a
              href="/#contact"
              className="border border-white text-white hover:bg-white hover:text-[#001f3f] px-6 py-3 text-base font-semibold rounded-lg transition-colors"
            >
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;