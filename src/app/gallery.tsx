"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "Μοντέρνα Κουζίνα",
    category: "Κουζίνα",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Εξωτικό Μπάνιο",
    category: "Μπάνιο",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Σαλόνι Στυλ",
    category: "Σαλόνι",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Υπνοδωμάτιο Ονείρων",
    category: "Υπνοδωμάτιο",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Επαγγελματικός Χώρος",
    category: "Επαγγελματικός",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Τεράστια Τραπεζαρία",
    category: "Τραπεζαρία",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Σύγχρονη Κουζίνα",
    category: "Κουζίνα",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Μοντέρνο Μπάνιο",
    category: "Μπάνιο",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Εξαιρετικό Σαλόνι",
    category: "Σαλόνι",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            <button
              className="bg-white text-[#001f3f] px-6 py-3 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowRightIcon className="w-4 h-4 mr-2" />
              Ξεκινήστε το Έργο σας
            </button>
            <button
              className="border border-white text-white hover:bg-white hover:text-[#001f3f] px-6 py-3 text-base font-semibold rounded-lg transition-colors"
            >
              Επικοινωνήστε μαζί μας
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;