import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="px-8 py-12">
      <div 
        className="relative h-[75vh] flex items-center justify-start text-white rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl text-left px-8 sm:px-12 md:px-16 lg:px-20">
          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 normal-case">
            digital marketing<br />
            that transforms<br />
            your story
          </h1>
          
          <p className="font-bricolage text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
            We craft compelling narratives that drive engagement and results. Our experienced 
            digital creators turn complex marketing challenges into powerful communication 
            strategies.
          </p>
          
          <Button className="font-bricolage bg-white text-agency-dark hover:bg-agency-light-gray px-8 py-3 text-lg">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
