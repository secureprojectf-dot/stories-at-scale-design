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
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", validatedData);
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: []
      });
      setErrors({});
      
      alert("Thank you for your message! We'll get back to you soon.");
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-white font-bricolage">
      {/* Back to Home Button - Top Right */}
      <Button
        asChild
        variant="ghost"
        className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white"
      >
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </Button>

      <div className="flex h-full">
        {/* Left Side - White Background */}
        <div className="flex-1 bg-white p-8 flex flex-col justify-between">
          {/* Profile Section */}
          <div className="mt-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.ytimg.com/vi/uVyFsh9g3iM/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgRihYMA8=&rs=AOn4CLDAYWhGOFIKBBCC9rESxVdpl_Q7MQ"
                  alt="Harshith Tunuguntla"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  hello@storiesatscale.in
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Send Message
                </Badge>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-gray-800 text-lg font-medium mb-2">Harshith Tunuguntla -</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Project Coordinator,<br />
                can guide your project's<br />
                initial steps.
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex-1 flex items-center">
            <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Every project<br />
              starts with a plan.
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Twitter className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Right Side - Dark Background Form */}
        <div className="flex-1 bg-gray-900 p-8 flex flex-col">
          <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
              What services<br />
              we can support<br />
              you with?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Services Selection */}
              <div>
                <p className="text-white text-sm mb-4">I'm interested in</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                        formData.services.includes(service)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-transparent text-white border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-400 text-sm">{errors.services}</p>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-400 focus:border-blue-400 resize-none min-h-[80px]"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors mt-8"
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
