import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-background border-b border-border">
      <div className="font-bricolage text-2xl font-bold text-foreground">
        Stories at Scale
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#services" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
          Services
        </a>
        <a href="#work" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
          Work
        </a>
        <a href="#about" className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
          About
        </a>
        <div className="relative group">
          <button className="font-bricolage text-foreground hover:text-agency-blue transition-colors">
            Resources
          </button>
        </div>
      </div>
      
      <Button className="font-bricolage bg-agency-blue hover:bg-agency-dark-blue text-white px-6 py-2">
        Contact
      </Button>
    </nav>
  );
};

export default Navigation;