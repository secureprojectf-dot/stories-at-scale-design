import { Button } from "@/components/ui/button";
import processImg from "@/assets/process-bg.jpg";

const ProcessSection = () => {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider uppercase">
            PROCESS
          </p>
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-foreground mb-8">
            HOW WE WORK
          </h2>
          <p className="font-bricolage text-lg text-agency-medium-gray mb-8">
            Our collaborative approach ensures transparent and effective marketing solutions.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              <Button className="font-bricolage bg-white text-agency-dark border border-border px-6 py-2">
                Explore
              </Button>
              <Button 
                variant="ghost" 
                className="font-bricolage text-foreground hover:text-agency-blue px-6 py-2"
              >
                Learn more →
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-border">
            <button className="font-bricolage px-6 py-3 border-b-2 border-agency-blue text-agency-blue font-medium">
              Discover
            </button>
            <button className="font-bricolage px-6 py-3 text-agency-medium-gray hover:text-foreground">
              Strategy
            </button>
            <button className="font-bricolage px-6 py-3 text-agency-medium-gray hover:text-foreground">
              Insights
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bricolage text-sm font-medium text-agency-medium-gray mb-4 tracking-wider uppercase">
              CONSULTATION
            </p>
            <h3 className="font-bricolage text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              INITIAL BRAND ASSESSMENT<br />
              AND STRATEGY<br />
              DEVELOPMENT
            </h3>
            <p className="font-bricolage text-agency-medium-gray mb-8 leading-relaxed">
              We dive deep into your business goals and current marketing landscape to craft a 
              tailored approach.
            </p>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="font-bricolage border-border text-foreground hover:bg-agency-light-gray px-6 py-2"
              >
                Details
              </Button>
              <Button 
                variant="ghost" 
                className="font-bricolage text-foreground hover:text-agency-blue p-0 h-auto font-medium"
              >
                Learn more →
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={processImg} 
              alt="Team collaboration process"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;