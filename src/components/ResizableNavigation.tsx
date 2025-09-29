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
// --- UPDATED IMPORT ---
// Imported the Link component to wrap the logo.
import { useNavigate, Link } from "react-router-dom";

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
        {/* --- UPDATED LOGO --- */}
        {/* The NavbarLogo is now wrapped in a Link component pointing to the homepage. */}
        <Link to="/">
          <NavbarLogo />
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton 
            variant="primary"
            className="font-bricolage rounded-full bg-[#F6FA5E] text-black hover:bg-yellow-300"
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
          {/* --- UPDATED LOGO (Mobile) --- */}
          {/* The logo in the mobile header is also wrapped to link to the homepage. */}
          <Link to="/">
            <NavbarLogo />
          </Link>
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
              className="w-full font-bricolage rounded-full bg-[#F6FA5E] text-black hover:bg-yellow-300"
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
