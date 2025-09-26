"use client"; // Required for framer-motion animations

import { motion } from "framer-motion";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import contentCreationImg from "@/assets/content-creation.jpg";
import marketingStrategyImg from "@/assets/marketing-strategy.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: digitalMarketingImg,
      title: "Digital Marketing",
      description: "Targeted campaigns that reach and convert your ideal audience."
    },
    {
      image: contentCreationImg,
      title: "Content Creation", 
      description: "Engaging content that tells your authentic story."
    },
    {
      image: marketingStrategyImg,
      title: "Marketing Strategy",
      description: "Data-driven strategies that drive measurable business growth."
    }
  ];

  // Animation variants for the container to orchestrate the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animation
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    }, // Animate to original position and fully visible
  };

  return (
    <section className="py-24 px-8 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider">
            Expertise
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Comprehensive <span className="text-agency-blue">Digital</span><br />
            <span className="text-agency-blue">Marketing Solutions</span>
          </h2>
          <p className="font-bricolage text-lg text-agency-medium-gray mt-8 max-w-3xl">
            We deliver strategic marketing approaches tailored to your unique business needs and goals.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the element is in view, and only once
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }} // Special effect: lift card on hover
            >
              <div 
                className="relative p-[1px] bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-800 dark:to-transparent rounded-2xl h-full group hover:from-agency-blue transition-all duration-300"
              >
                <div 
                  className="bg-card rounded-[15px] h-full w-full overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }} // Special effect: zoom image on hover
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-8 text-left">
                    <p className="font-bricolage text-5xl font-bold text-gray-200 dark:text-gray-700 mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-bricolage text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="font-bricolage text-agency-medium-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
