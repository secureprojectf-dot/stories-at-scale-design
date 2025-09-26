import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          DIGITAL MARKETING<br />
          THAT TRANSFORMS<br />
          YOUR BRAND STORY
        </h1>
        
        <p className="font-bricolage text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft compelling narratives that drive engagement and results. Our experienced 
          digital creators turn complex marketing challenges into powerful communication 
          strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="font-bricolage bg-white text-agency-dark hover:bg-agency-light-gray px-8 py-3 text-lg">
            Explore
          </Button>
          <Button 
            variant="outline" 
            className="font-bricolage border-white text-white hover:bg-white hover:text-agency-dark px-8 py-3 text-lg"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;