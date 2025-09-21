"use client";

import React from "react";
import Image from "next/image";
import {
  PhoneIcon,
  XMarkIcon,
  Bars3Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Αρχική",
    href: "/",
  },
  {
    name: "Υπηρεσίες",
    href: "/#services",
  },
  {
    name: "Έργα",
    href: "/gallery",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Επικοινωνία",
    href: "/#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const isContact = children === "Επικοινωνία";
  
  return (
    <li>
      <a
        href={href || "#"}
        className={`flex items-center gap-2 font-medium transition-colors px-4 py-2 rounded-md ${
          isContact 
            ? "bg-[#001f3f] text-white hover:bg-white hover:text-[#001f3f] hover:border hover:border-[#001f3f]" 
            : "text-[#001f3f] hover:text-[#001f3f]/70"
        }`}
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Use a higher threshold and smoother transition
          setIsScrolled(scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
    };
  }, []);

  return (
    <nav className="border-0 sticky top-0 z-50 bg-[#fefdf2]/95 backdrop-blur-md py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with scroll transition */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png"
                alt="Trenovations Logo - Ανακαινίσεις Σπιτιών και Επαγγελματικών Χώρων"
                width={200}
                height={80}
                className={`w-auto transition-all duration-500 ease-out ${
                  isScrolled ? "h-12 scale-90" : "h-20 scale-100"
                }`}
                priority
              />
            </a>
          </div>
          
          {/* Right Column - Desktop */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Contact Info - Smooth fade out on scroll */}
            <div className={`transition-all duration-500 ease-out ${
              isScrolled ? "opacity-0 max-h-0 overflow-hidden transform -translate-y-2" : "opacity-100 max-h-20 transform translate-y-0"
            }`}>
              <div className="flex items-center gap-6">
                {/* Contact Info */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-[#001f3f]" />
                    <span className="text-sm text-[#001f3f] font-medium">
                      6980703882
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-[#001f3f]" />
                    <span className="text-sm text-[#001f3f] font-medium">
                      info@trenovations.gr
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Menu Items - Always visible with smooth transition */}
            <ul className={`flex items-center gap-6 transition-all duration-500 ease-out ${
              isScrolled ? "transform translate-y-0" : "transform translate-y-0"
            }`}>
              {NAV_MENU.map(({ name, href }) => (
                <NavItem key={name} href={href}>
                  {name}
                </NavItem>
              ))}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="lg:hidden text-[#001f3f] p-2"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <div className="container mx-auto px-4 py-4 bg-[#fefdf2]/95 backdrop-blur-md">
          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-[#001f3f]" />
              <span className="text-sm text-[#001f3f] font-medium">
                6980703882
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-[#001f3f]" />
              <span className="text-sm text-[#001f3f] font-medium">
                info@trenovations.gr
              </span>
            </div>
          </div>
          
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-3">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;