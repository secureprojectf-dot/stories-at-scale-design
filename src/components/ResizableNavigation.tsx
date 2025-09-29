"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResizableNavigation() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Resources",
      link: "#resources",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton 
            variant="primary"
            className="font-bricolage rounded-full bg-black text-white hover:bg-gray-800"
            onClick={() => navigate('/contact')}
            as="button"
          >
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 font-bricolage"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/contact');
              }}
              variant="primary"
              className="w-full font-bricolage rounded-full bg-black text-white hover:bg-gray-800"
              as="button"
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
