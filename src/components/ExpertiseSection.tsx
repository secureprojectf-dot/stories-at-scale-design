import { Button } from "@/components/ui/button";
import expertiseImg1 from "@/assets/expertise-1.jpg";
import expertiseImg2 from "@/assets/expertise-2.jpg";
import expertiseImg3 from "@/assets/expertise-3.jpg";

const ExpertiseSection = () => {
  const features = [
    {
      title: "SEASONED DIGITAL CREATORS WITH PROVEN TRACK RECORDS",
      description: "Professionals who understand the digital landscape deeply.",
      buttonText: "Learn more",
      image: expertiseImg1,
      label: "Expertise"
    },
    {
      title: "CUSTOMIZED MARKETING SOLUTIONS FOR YOUR UNIQUE NEEDS",
      description: "Tailored approaches that align with your business objectives.",
      buttonText: "Discover",
      image: expertiseImg2,
      label: "Strategy"
    },
    {
      title: "DATA-DRIVEN STRATEGIES THAT GENERATE MEASURABLE IMPACT",
      description: "Transparent reporting and continuous optimization of marketing efforts.",
      buttonText: "View results",
      image: expertiseImg3,
      label: "Results"
    }
  ];

  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-foreground leading-tight">
            YOUR SUCCESS IS OUR MISSION
          </h2>
          <p className="font-bricolage text-lg text-agency-medium-gray mt-8 max-w-3xl mx-auto">
            We deliver results that matter through strategic and innovative approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider">
                {feature.label}
              </p>
              <h3 className="font-bricolage text-2xl font-bold text-foreground mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="font-bricolage text-agency-medium-gray mb-8 leading-relaxed">
                {feature.description}
              </p>
              <Button 
                variant="ghost" 
                className="font-bricolage text-foreground hover:text-agency-blue p-0 h-auto font-medium"
              >
                {feature.buttonText} →
              </Button>
              
              <div className="mt-8 rounded-lg overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;