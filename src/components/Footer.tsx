import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

// The background text component has been updated.
const GiantTextBackground = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div className="whitespace-nowrap capitalize font-fk-display text-[60px] md:text-[120px] xl:text-[220px] tracking-tighter text-white leading-none -mb-4 md:-mb-8 xl:-mb-20">
        dhasha media
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 px-8">
      {/* The updated giant text is rendered here */}
      <GiantTextBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="font-bricolage text-2xl font-bold text-white mb-6 md:mb-0">
            Dhasha Media
          </div>
          
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <a href="#services" className="font-bricolage text-white hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="#work" className="font-bricolage text-white hover:text-gray-300 transition-colors">
              Work
            </a>
            <a href="#about" className="font-bricolage text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <Link to="/careers" className="font-bricolage text-white hover:text-gray-300 transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="font-bricolage text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bricolage text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dhasha Media. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="font-bricolage text-gray-400 hover:text-white text-sm transition-colors">
                Privacy policy
              </a>
              <a href="#" className="font-bricolage text-gray-400 hover:text-white text-sm transition-colors">
                Terms of service
              </a>
              <a href="#" className="font-bricolage text-gray-400 hover:text-white text-sm transition-colors">
                Cookies settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
