"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORT YOUR IMAGES HERE ---
import processStep1Img from "@/assets/process-bg.jpg";
import processStep2Img from "@/assets/marketing-strategy.jpg";
import processStep3Img from "@/assets/content-creation.jpg";

const processSteps = [
  {
    id: "discover",
    tabName: "Discover",
    overline: "01. CONSULTATION",
    title: "Initial Assessment & Strategy Development",
    description: "We dive deep into your business goals and current marketing landscape to craft a tailored and effective approach.",
    image: processStep1Img,
  },
  {
    id: "strategy",
    tabName: "Strategy",
    overline: "02. PLANNING",
    title: "Data-Driven Campaign & Content Planning",
    description: "Our team develops a comprehensive strategy, outlining key milestones, channels, and KPIs for measurable success.",
    image: processStep2Img,
  },
  {
    id: "insights",
    tabName: "Insights",
    overline: "03. EXECUTION & ANALYSIS",
    title: "Performance Tracking & Actionable Insights",
    description: "We continuously monitor campaign performance, providing transparent reports and making data-driven optimizations.",
    image: processStep3Img,
  },
];

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState(processSteps[0].id);
  const [isPaused, setIsPaused] = useState(false); // State to handle pause on hover
  const activeContent = processSteps.find((step) => step.id === activeTab);

  // useEffect hook to handle the automatic tab switching
  useEffect(() => {
    // Set up an interval only if the animation is not paused
    if (!isPaused) {
      const interval = setInterval(() => {
        // Find the index of the current active tab
        const currentIndex = processSteps.findIndex((step) => step.id === activeTab);
        // Calculate the index of the next tab, looping back to the start
        const nextIndex = (currentIndex + 1) % processSteps.length;
        // Set the next tab as active
        setActiveTab(processSteps[nextIndex].id);
      }, 5000); // Change tab every 5 seconds (5000ms)

      // Clean up the interval when the component unmounts or dependencies change
      return () => clearInterval(interval);
    }
  }, [activeTab, isPaused]); // Rerun the effect if activeTab or isPaused changes

  return (
    <section 
      className="py-24 px-8 bg-gray-50 dark:bg-gray-900/50" 
      id="process"
      // Pause the automatic switching on mouse enter
      onMouseEnter={() => setIsPaused(true)}
      // Resume the automatic switching on mouse leave
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <p className="font-bricolage text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
            Process
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="text-blue-600">How We Work</span>
          </h2>
          <p className="font-bricolage text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            Our collaborative approach ensures transparent and effective marketing solutions, tailored to you.
          </p>
        </div>
        
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-12">
          {processSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`font-bricolage px-1 sm:px-6 py-3 font-medium transition-colors duration-300 relative text-sm sm:text-base ${
                activeTab === step.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {step.tabName}
              {activeTab === step.id && (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <p className="font-bricolage text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
                {activeContent?.overline}
              </p>
              <h3 className="font-bricolage text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {activeContent?.title}
              </h3>
              <p className="font-bricolage text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {activeContent?.description}
              </p>
              <Button className="font-bricolage bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-base">
                Learn More
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={activeContent?.image} 
                alt={activeContent?.title}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessSection;
