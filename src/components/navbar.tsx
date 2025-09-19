"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
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
    href: "#services",
  },
  {
    name: "Έργα",
    href: "/gallery",
  },
  {
    name: "Επικοινωνία",
    href: "#contact",
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
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        className={`flex items-center gap-2 font-medium transition-colors px-4 py-2 rounded-md ${
          isContact 
            ? "bg-[#001f3f] text-white hover:bg-white hover:text-[#001f3f] hover:border hover:border-[#001f3f]" 
            : "text-[#001f3f] hover:text-[#001f3f]/70"
        }`}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
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
    <MTNavbar 
      shadow={false} 
      fullWidth 
      className={`border-0 sticky top-0 z-50 bg-[#fefdf2]/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with scroll transition */}
          <div className="flex items-center">
            <Image
              src="https://trenovations.gr/wp-content/uploads/2025/09/trenovations-high-resolution-logo-transparent.png"
              alt="Trenovations Logo"
              width={200}
              height={80}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-12" : "h-20"
              }`}
            />
          </div>
          
          {/* Right Column - Desktop */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Contact Info - Hidden on scroll */}
            <div className={`transition-all duration-300 ${
              isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
            }`}>
              <div className="flex items-center gap-6">
                {/* Contact Info */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-[#001f3f]" />
                    <Typography className="text-sm text-[#001f3f] font-medium">
                      6980703882
                    </Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-[#001f3f]" />
                    <Typography className="text-sm text-[#001f3f] font-medium">
                      info@trenovations.gr
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Menu Items - Always visible */}
            <ul className="flex items-center gap-6">
              {NAV_MENU.map(({ name, href }) => (
                <NavItem key={name} href={href}>
                  {name}
                </NavItem>
              ))}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            onClick={handleOpen}
            className="lg:hidden text-[#001f3f]"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-5 w-5" />
            )}
          </IconButton>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto px-4 py-4 bg-[#fefdf2]/95 backdrop-blur-md">
          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-[#001f3f]" />
              <Typography className="text-sm text-[#001f3f] font-medium">
                6980703882
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-[#001f3f]" />
              <Typography className="text-sm text-[#001f3f] font-medium">
                info@trenovations.gr
              </Typography>
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
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;