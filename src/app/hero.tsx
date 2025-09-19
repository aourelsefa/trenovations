"use client";

import { PhoneIcon, HomeIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#001f3f]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
        {/* Professional Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md mb-8">
          <span className="text-sm font-medium">
            600+ Ευχαριστιμένοι Πελάτες
          </span>
        </div>

        {/* Professional Main Heading */}
        <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
          Δώσε Νέα Ζωή
          <span className="block text-white">
            στον Χώρο σου
          </span>
        </h1>
        
        {/* Professional Description */}
        <p className="text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-100">
          Ανακαινίζουμε σπίτια και επαγγελματικούς χώρους με μοντέρνο design, 
          ποιότητα υλικών και άψογη κατασκευή.
        </p>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="professional-button text-white px-6 py-3 text-base flex items-center justify-center"
          >
            <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="whitespace-nowrap">Δωρεάν Εκτίμηση</span>
          </button>
          <button
            className="border border-white text-white hover:bg-white hover:text-[#001f3f] px-6 py-3 text-base font-medium rounded-md flex items-center justify-center"
          >
            <HomeIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="whitespace-nowrap">Δες τα Έργα μας</span>
          </button>
        </div>

        {/* Professional Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="font-semibold text-white mb-1 text-3xl">
              600+
            </h3>
            <p className="text-gray-200 text-sm">
              Έργα
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-white mb-1 text-3xl">
              15+
            </h3>
            <p className="text-gray-200 text-sm">
              Χρόνια Εμπειρίας
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-white mb-1 text-3xl">
              100%
            </h3>
            <p className="text-gray-200 text-sm">
              Επαρκής
            </p>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero;