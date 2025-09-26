import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-agency-light-gray border-t border-border py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="font-bricolage text-2xl font-bold text-foreground mb-6 md:mb-0">
            Stories at Scale
          </div>
          
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <a href="#services" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
              Services
            </a>
            <a href="#work" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
              Work
            </a>
            <a href="#about" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
              About
            </a>
            <a href="#careers" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
              Careers
            </a>
            <a href="#contact" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-foreground hover:text-agency-blue transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-agency-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-agency-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-agency-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-agency-blue transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bricolage text-agency-medium-gray text-sm mb-4 md:mb-0">
              © 2024 Stories at Scale. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="font-bricolage text-agency-medium-gray hover:text-foreground text-sm transition-colors">
                Privacy policy
              </a>
              <a href="#" className="font-bricolage text-agency-medium-gray hover:text-foreground text-sm transition-colors">
                Terms of service
              </a>
              <a href="#" className="font-bricolage text-agency-medium-gray hover:text-foreground text-sm transition-colors">
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