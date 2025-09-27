import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-8">
      <div 
        className="relative py-20 px-8 md:px-16 lg:px-24 flex items-center rounded-3xl overflow-hidden"
        style={{
          // Replace with your actual external image link
          backgroundImage: `url('https://i.ibb.co/zhWsr212/Untitled-design-13.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Changed to a light overlay for black text readability */}
       
        
        <div className="relative z-10 max-w-3xl text-center md:text-left">
          <h2 
            className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            // Added text shadow for visibility against the light overlay
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Ready to elevate your digital marketing
          </h2>
          
          <p className="font-bricolage text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed text-black">
            Let's discuss how we can transform your brand's digital strategy and drive meaningful 
            results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="font-bricolage bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full"
              onClick={() => window.location.href = '/contact'}
            >
              Get started
            </Button>
            <Button 
              className="font-bricolage bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-full"
              onClick={() => window.location.href = '/contact'}
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
