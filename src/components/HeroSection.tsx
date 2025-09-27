import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const HeroSection = () => {
  return (
    <section className="px-8 py-12">
      <div 
        className="relative h-[75vh] flex items-center justify-start rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.ibb.co/dw6YrN4m/i-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Changed to a light overlay for black text readability */}
       
        
        <div className="relative z-10 max-w-4xl text-left px-8 sm:px-12 md:px-16 lg:px-20">
          <div 
            // Corrected 'lg-text-7xl' to 'lg:text-7xl'
            className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 normal-case text-white"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            <LayoutTextFlip
              text="Digital Marketing that "
              words={["transforms", "amplifies", "elevates", "revolutionizes"]}
              duration={2500}
              style={{ color: '#2563eb' }} 
            />
            <br />
            your <span 
              className="underline decoration-white decoration-2 underline-offset-8"
              style={{ color: 'white' }}
            >
              story
            </span>
          </div>
          
          {/* Description text color changed to black */}
          <p className="font-bricolage text-lg md:text-xl mb-16 max-w-3xl leading-relaxed text-black">
            We craft <span style={{ color: '#2563eb' }}>compelling narratives</span> that drive engagement and results. Our experienced 
            digital creators turn complex marketing challenges into powerful communication 
            strategies.
          </p>
          
          <Button 
            // Increased vertical padding from py-3 to py-4 to increase height
            className="font-bricolage bg-black/50 text-white hover:bg-black/70 rounded-full px-14 py-4 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
