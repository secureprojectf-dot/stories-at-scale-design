"use client";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-[#F6FA5E] flex items-center justify-center px-4 sm:px-8 pt-32 pb-32 mx-4 mt-24 mb-6 rounded-[3rem]">
      <div className="relative flex w-full max-w-4xl items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="flex w-full flex-col items-center text-center">
          
          <div className="font-bricolage mb-12 text-5xl font-bold leading-tight text-black normal-case md:text-6xl lg:text-7xl">
            Dhasha Media
            <br />
            <span className="text-black">Your Digital Growth Partner</span>
          </div>

          <p className="font-bricolage mb-16 max-w-2xl text-lg leading-relaxed text-black md:text-xl">
            We are Dhasha Media - a full-service digital marketing agency that transforms brands through innovative strategies, compelling content, and data-driven campaigns.
          </p>

          <Button
            className="group font-bricolage flex items-center rounded-full border-2 border-black bg-transparent px-16 py-6 text-xl font-semibold text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
            <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2">
              &rarr;
            </span>
          </Button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
