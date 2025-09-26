"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// --- IMPORT YOUR IMAGES HERE ---
import expertiseImg1 from "@/assets/expertise-1.jpg";
import expertiseImg2 from "@/assets/expertise-2.jpg";
import expertiseImg3 from "@/assets/expertise-3.jpg";

const features = [
  {
    title: "Seasoned Digital Creators with Proven Track Records",
    description: "Our professionals understand the digital landscape deeply, leveraging years of experience to deliver impactful results.",
    buttonText: "Meet the Team",
    image: expertiseImg1,
    label: "01. Expertise"
  },
  {
    title: "Customized Marketing Solutions for Your Unique Needs",
    description: "We craft tailored approaches that align with your specific business objectives, ensuring our strategies work for you.",
    buttonText: "Our Strategies",
    image: expertiseImg2,
    label: "02. Strategy"
  },
  {
    title: "Data-Driven Approaches That Generate Measurable Impact",
    description: "We provide transparent reporting and continuous optimization of all marketing efforts to maximize your ROI.",
    buttonText: "View Results",
    image: expertiseImg3,
    label: "03. Results"
  }
];

const ExpertiseSection = () => {
  return (
    // UPDATED: Added light grey background
    <section className="py-24 px-8 bg-gray-50 dark:bg-black" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-left">
          <p className="font-bricolage text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
            Why Choose Us
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Your Success is Our Mission
          </h2>
          <p className="font-bricolage text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            We deliver results that matter through strategic and innovative approaches tailored to your goals.
          </p>
        </div>
        
        {/* Features List */}
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              {/* UPDATED: Alternates order on large screens using 'lg:order-2' */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="font-bricolage font-medium text-blue-600 mb-4 tracking-wider">
                  {feature.label}
                </p>
                <h3 className="font-bricolage text-3xl font-bold text-foreground mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-bricolage text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <Button className="font-bricolage bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-base">
                  {feature.buttonText}
                </Button>
              </div>
              
              {/* Image */}
              {/* UPDATED: Alternates order on large screens using 'lg:order-1' */}
              <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
