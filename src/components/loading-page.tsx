"use client";

import { useEffect, useState } from "react";

export function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("Loading page mounted"); // Debug log
    
    let currentProgress = 0;
    const increment = 100 / 40; // 40 steps over 2 seconds (50ms each)
    
    const timer = setInterval(() => {
      currentProgress += increment;
      const newProgress = Math.min(currentProgress, 100);
      setProgress(newProgress);
      console.log("Progress:", newProgress); // Debug log
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        console.log("Loading complete"); // Debug log
      }
    }, 50);

    return () => {
      clearInterval(timer);
      console.log("Loading page unmounted"); // Debug log
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-full mx-auto w-32 h-32 flex items-center justify-center mb-4 animate-bounce">
            <img 
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
              alt="Trenovations Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Trenovations</h1>
          <p className="text-gray-300 text-lg">Ανακαινίζουμε τα όνειρά σας</p>
        </div>

        {/* Brush Painting Animation */}
        <div className="mb-8">
          <div className="relative w-80 h-4 bg-gray-700 rounded-full mx-auto overflow-hidden">
            {/* Progress Bar */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Brush Animation */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-pulse">
                  <img 
                    src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
                    alt="Trenovations Logo" 
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Paint Drops */}
            <div className="absolute top-0 left-0 h-full w-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="mt-4">
            <p className="text-white text-lg font-semibold">
              {Math.round(progress)}%
            </p>
            <p className="text-gray-300 text-sm">
              {progress < 30 ? "Προετοιμασία..." : 
               progress < 60 ? "Φόρτωση περιεχομένου..." : 
               progress < 90 ? "Τελική διαμόρφωση..." : 
               "Σχεδόν έτοιμο!"}
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Logos */}
          <div className="absolute top-20 left-10 animate-float">
            <img 
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
              alt="Trenovations Logo" 
              className="w-8 h-8 opacity-20"
            />
          </div>
          <div className="absolute top-40 right-16 animate-float delay-1000">
            <img 
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
              alt="Trenovations Logo" 
              className="w-6 h-6 opacity-20"
            />
          </div>
          <div className="absolute bottom-32 left-20 animate-float delay-2000">
            <img 
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
              alt="Trenovations Logo" 
              className="w-10 h-10 opacity-20"
            />
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-500">
            <img 
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png" 
              alt="Trenovations Logo" 
              className="w-7 h-7 opacity-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
