import { Star } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Stories at Scale helped us reimagine our digital presence and drive unprecedented growth.",
      name: "Sarah Johnson",
      title: "CEO, Tech Innovations",
      image: client1
    },
    {
      quote: "Their strategic approach turned our marketing challenges into opportunities.",
      name: "Michael Chen", 
      title: "Marketing Director, Global Enterprises",
      image: client2
    },
    {
      quote: "Exceptional creativity and data-driven insights that truly understand our brand.",
      name: "Emma Rodriguez",
      title: "Founder, Creative Solutions", 
      image: client3
    }
  ];

  return (
    <section className="py-20 px-8 bg-agency-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-foreground mb-8">
            CLIENT STORIES
          </h2>
          <p className="font-bricolage text-lg text-agency-medium-gray">
            Real results from brands we've transformed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="font-bricolage text-lg text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bricolage font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-bricolage text-agency-medium-gray text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;