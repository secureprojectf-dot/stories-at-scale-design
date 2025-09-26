import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="py-20 px-8">
      <div 
        className="relative py-20 px-8 md:px-16 lg:px-24 flex items-center text-white rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${ctaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-3xl text-center md:text-left">
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to elevate your digital marketing
          </h2>
          
          <p className="font-bricolage text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Let's discuss how we can transform your brand's digital strategy and drive meaningful 
            results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="font-bricolage bg-agency-blue hover:bg-agency-dark-blue text-white px-8 py-3 text-lg rounded-full">
              Get started
            </Button>
            <Button 
              variant="outline" 
              className="font-bricolage bg-transparent border-white text-white hover:bg-white hover:text-agency-dark px-8 py-3 text-lg rounded-full"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
