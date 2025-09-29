"use client";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#F6FA5E] flex items-center justify-center px-4 sm:px-8 pt-20">
      <div className="relative flex w-full max-w-7xl items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
          
          {/* --- Left Column: Text Content --- */}
          <div className="z-10 max-w-2xl text-left md:w-3/5">
            
            {/* --- MESSAGE TAG (ICON REMOVED) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-md"
            >
              Wanna scale your story?
            </motion.div>

            <div className="font-bricolage mb-12 text-5xl font-bold leading-tight text-black normal-case md:text-6xl lg:text-7xl">
              <span className="inline-block">Digital Marketing that </span>
              <FlipWords
                words={["transforms", "amplifies", "elevates", "revolutionizes"]}
                duration={2500}
                className="text-[#1E40AF] text-5xl md:text-6xl lg:text-7xl font-bold"
              />
              <br />
              your <span className="underline decoration-black decoration-2 underline-offset-8">story</span>
            </div>

            <p className="font-bricolage mb-16 max-w-3xl text-lg leading-relaxed text-black md:text-xl">
              We craft <span style={{ color: '#1E40AF' }}>compelling narratives</span> that drive engagement and results. Our experienced
              digital creators turn complex marketing challenges into powerful communication
              strategies.
            </p>

            {/* --- REDESIGNED TRANSPARENT BUTTON --- */}
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

          {/* --- Right Column: Image --- */}
          <div className="hidden md:flex md:w-2/5 md:items-center md:justify-center">
            <img
              src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535ae064109d61f102506b_peep-79.svg"
              alt="Illustration of a person engaging with digital content"
              className="h-auto w-full max-w-md transform -scale-x-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
