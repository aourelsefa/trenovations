"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    initializeCookies(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setIsVisible(false);
    initializeCookies(onlyNecessary);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    initializeCookies(preferences);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "dismissed");
    setIsVisible(false);
  };

  const initializeCookies = (prefs: CookiePreferences) => {
    // Initialize Google Analytics only if analytics cookies are accepted
    if (prefs.analytics) {
      console.log("Google Analytics initialized");
      // Add Google Analytics code here when ready
    }
    
    // Initialize marketing cookies if accepted
    if (prefs.marketing) {
      console.log("Marketing cookies initialized");
    }
    
    // Initialize functional cookies if accepted
    if (prefs.functional) {
      console.log("Functional cookies initialized");
    }
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookies Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#001f3f] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🍪</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#001f3f] mb-1">
                    Χρησιμοποιούμε Cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες για να βελτιώσουμε την εμπειρία σας, 
                    να συλλέγουμε στατιστικά στοιχεία και να παρέχουμε εξατομικευμένο περιεχόμενο. 
                    <Link href="/privacy-policy" className="text-[#001f3f] hover:underline ml-1">
                      Διαβάστε περισσότερα στην Πολιτική Απορρήτου
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Cog6ToothIcon className="w-4 h-4" />
                Προτιμήσεις
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Απόρριψη Όλων
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-[#001f3f] hover:bg-[#001a33] rounded-md transition-colors"
              >
                Αποδοχή Όλων
              </button>
              <button
                onClick={handleClose}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Close button for desktop */}
            <button
              onClick={handleClose}
              className="hidden lg:block p-2 text-gray-400 hover:text-gray-600 ml-2"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#001f3f]">
                  Προτιμήσεις Cookies
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#001f3f]">Αναγκαστικά Cookies</h3>
                    <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                      Πάντα ενεργά
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Απαραίτητα για τη βασική λειτουργία της ιστοσελίδας, όπως η φόρμα επικοινωνίας και η ασφάλεια.
                  </p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="text-[#001f3f] focus:ring-[#001f3f] rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">Αναγκαστικά</span>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#001f3f]">Αναλυτικά Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference("analytics", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#001f3f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001f3f]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Συλλέγουν ανώνυμα στατιστικά στοιχεία για τη βελτίωση της ιστοσελίδας (Google Analytics).
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#001f3f]">Λειτουργικά Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => updatePreference("functional", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#001f3f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001f3f]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Βελτιώνουν τη λειτουργικότητα της ιστοσελίδας, όπως οι προτιμήσεις χρήστη.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#001f3f]">Marketing Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference("marketing", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#001f3f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#001f3f]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Χρησιμοποιούνται για την παροχή εξατομικευμένων διαφημίσεων και περιεχομένου.
                  </p>
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3">
                  Για περισσότερες πληροφορίες, διαβάστε την 
                  <Link href="/privacy-policy" className="text-[#001f3f] hover:underline ml-1">
                    Πολιτική Απορρήτου
                  </Link> 
                  και τους 
                  <Link href="/terms-of-use" className="text-[#001f3f] hover:underline ml-1">
                    Όρους Χρήσης
                  </Link>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Απόρριψη Όλων
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#001f3f] hover:bg-[#001a33] rounded-md transition-colors"
                >
                  Αποθήκευση Προτιμήσεων
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
