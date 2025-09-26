import ResizableNavigation from "@/components/ResizableNavigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-bricolage">
      <ResizableNavigation />
      <div className="pt-20">
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;