import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import contentCreationImg from "@/assets/content-creation.jpg";
import marketingStrategyImg from "@/assets/marketing-strategy.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: digitalMarketingImg,
      title: "DIGITAL MARKETING",
      description: "Targeted campaigns that reach and convert your ideal audience."
    },
    {
      image: contentCreationImg,
      title: "CONTENT CREATION", 
      description: "Engaging content that tells your brand's authentic story."
    },
    {
      image: marketingStrategyImg,
      title: "MARKETING STRATEGY",
      description: "Data-driven strategies that drive measurable business growth."
    }
  ];

  return (
    <section className="py-20 px-8 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider uppercase">
            EXPERTISE
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            COMPREHENSIVE DIGITAL<br />
            MARKETING SOLUTIONS
          </h2>
          <p className="font-bricolage text-lg text-agency-medium-gray mt-8 max-w-3xl mx-auto">
            We deliver strategic marketing approaches tailored to your unique business needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-bricolage text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-bricolage text-agency-medium-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;