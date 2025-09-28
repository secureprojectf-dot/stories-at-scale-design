import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin, Twitter, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
  services: z.array(z.string()).min(1, "Please select at least one service")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[]
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "UI/UX Design",
    "Website", 
    "Brand Identity",
    "Content Production",
    "Illustration",
    "Other"
  ];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const validatedData = contactSchema.parse(formData);
      console.log("Form submitted:", validatedData);
      
      setFormData({ name: "", email: "", phone: "", message: "", services: [] });
      setErrors({});
      
      alert("Thank you for your message! We'll get back to you soon.");
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // On small screens, allow scrolling if content overflows
    <div className="min-h-screen bg-white font-bricolage md:h-screen md:overflow-hidden">
      <div className="flex h-full flex-col md:flex-row">
        {/* 
          Left Side - Blue Background 
          - Hidden on mobile (hidden)
          - Becomes a flex container on medium screens and up (md:flex)
          - Right corners are rounded for a modern look (rounded-r-3xl)
        */}
        <div className="hidden flex-1 flex-col justify-between rounded-r-3xl bg-blue-600 p-8 text-white md:flex">
          {/* Profile Section */}
          <div className="mt-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-700">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFn4R1C2f_1L0Qenfy1mzZpmpPyTetzjNhA&s"
                  alt="Harshith Tunuguntla"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="rounded-full bg-white px-4 py-2 text-blue-600 hover:bg-gray-100">
                  hello@storiesatscale.in
                </Badge>
                <Badge variant="secondary" className="rounded-full bg-white px-4 py-2 text-blue-600 hover:bg-gray-100">
                  Send Message
                </Badge>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-2 text-lg font-medium text-white">Harshith Tunuguntla -</h3>
              <p className="leading-relaxed text-blue-100">
                Project Coordinator,<br />
                can guide your project's<br />
                initial steps.
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex flex-1 items-center">
            <h1 className="text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              Every project<br />
              starts with a plan.
            </h1>
          </div>

          {/* Social Icons */}
          <div className="mb-8 flex gap-4">
            <a href="#" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 transition-colors hover:bg-gray-100">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 transition-colors hover:bg-gray-100">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 transition-colors hover:bg-gray-100">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 transition-colors hover:bg-gray-100">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* 
          Right Side - White Background Form 
          - Full width on mobile, flex-1 on larger screens
        */}
        <div className="relative flex w-full flex-1 flex-col bg-white p-8">
          {/* Back to Home Button - Top Right */}
          <Button
            asChild
            variant="ghost"
            className="absolute top-4 right-4 z-50 h-auto rounded-full bg-gray-100 px-4 py-2 text-gray-800 backdrop-blur-sm hover:bg-gray-200"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12 md:py-0">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              What services<br />
              we can support<br />
              you with?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Services Selection */}
              <div>
                <p className="mb-4 text-sm text-gray-600">I'm interested in</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        formData.services.includes(service)
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-transparent text-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-sm text-red-500">{errors.services}</p>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[80px] resize-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
