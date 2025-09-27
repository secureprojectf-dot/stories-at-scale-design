import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Trophy, 
  Users, 
  Zap, 
  Shield, 
  Target, 
  Lightbulb,
  TrendingUp 
} from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="font-bricolage text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver exceptional results that drive your business forward.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-4xl mx-auto">
          <BentoGridItem
            title="Proven Track Record"
            description="Over 500+ successful campaigns and 95% client satisfaction rate across diverse industries."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"></div>
            }
            icon={<Trophy className="h-4 w-4 text-primary" />}
          />
          <BentoGridItem
            title="Expert Team"
            description="Certified professionals with 10+ years experience in digital marketing and brand development."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"></div>
            }
            icon={<Users className="h-4 w-4 text-secondary" />}
          />
          <BentoGridItem
            title="Lightning Fast Results"
            description="See measurable improvements within 30 days with our data-driven optimization strategies."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"></div>
            }
            icon={<Zap className="h-4 w-4 text-accent" />}
          />
          <BentoGridItem
            title="Secure & Reliable"
            description="Enterprise-grade security protocols ensuring your data and campaigns are always protected."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20"></div>
            }
            icon={<Shield className="h-4 w-4 text-emerald-500" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Targeted Approach"
            description="Precision targeting that reaches your ideal audience at the perfect moment for maximum conversion."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20"></div>
            }
            icon={<Target className="h-4 w-4 text-orange-500" />}
          />
          <BentoGridItem
            title="Innovation First"
            description="Always ahead of trends, implementing the latest technologies and strategies for competitive advantage."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20"></div>
            }
            icon={<Lightbulb className="h-4 w-4 text-purple-500" />}
          />
          <BentoGridItem
            title="Scalable Growth"
            description="Flexible solutions that grow with your business, from startup to enterprise level success."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"></div>
            }
            icon={<TrendingUp className="h-4 w-4 text-blue-500" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;