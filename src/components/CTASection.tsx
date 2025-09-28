import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    // 1. Further reduced vertical padding on the section wrapper
    <section className="py-10 px-4 md:py-12 md:px-8">
      <div 
        // 2. Further reduced vertical padding on the inner container
        className="relative flex items-center justify-between gap-10 rounded-3xl bg-[#F6FA5E] p-8 md:p-10 lg:p-12"
      >
        {/* --- Left Column (Text & Buttons) --- */}
        <div className="z-10 w-full md:w-3/5">
          <div className="max-w-xl text-center md:text-left">
            <h2 
              className="font-bricolage mb-6 text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl"
            >
              Ready to elevate your digital marketing?
            </h2>
            
            <p className="font-bricolage max-w-2xl text-lg leading-relaxed text-black md:text-xl">
              Let's discuss how we can transform your brand's digital strategy and drive meaningful results.
            </p>
          </div>
          
          {/* 3. Reduced margin-top on the button container */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button 
              className="group font-bricolage flex items-center justify-center rounded-full border-2 border-black bg-transparent px-10 py-4 text-lg font-semibold text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Button>
            <Button 
              className="font-bricolage rounded-full bg-black px-10 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-gray-800"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* --- Right Column (Image) --- */}
        <div className="hidden md:flex md:w-2/5 md:items-center md:justify-center">
          <img
            src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a83d3992372c25556b9_peep-76.svg"
            alt="Illustration for call to action"
            className="h-auto w-full max-w-sm transform -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
