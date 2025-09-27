import ResizableNavigation from "@/components/ResizableNavigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-bricolage">
      <ResizableNavigation />
      <div className="pt-20">
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;