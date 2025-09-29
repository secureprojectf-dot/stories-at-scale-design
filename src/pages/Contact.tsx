"use client";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

// A reusable component for the contact information items on the left side.
const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">
      <Icon className="h-6 w-6 text-gray-600" />
    </div>
    <div className="flex flex-col">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {children}
    </div>
  </div>
);

// A reusable component for the selectable service checkboxes in the form.
const ServiceCheckbox = ({ label, id, checked, onChange }) => (
  <label htmlFor={id} className="flex items-center gap-3 text-base font-medium text-gray-800 cursor-pointer">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-5 w-5 rounded border-gray-400 text-gray-900 focus:ring-gray-800"
    />
    {label}
  </label>
);

const ContactPage = () => {
  const [services, setServices] = useState({
    websiteDesign: false,
    uxDesign: false,
    userResearch: false,
    contentCreation: false,
    strategyConsulting: false,
    other: false
  });
  const [otherServiceDetail, setOtherServiceDetail] = useState('');

  const handleServiceChange = (event) => {
    const { id, checked } = event.target;
    setServices(prevServices => ({ ...prevServices, [id]: checked }));
  };
  
  // --- Replace this URL with your external background image ---
  const scheduleContainerBgImage = 'https://i.ibb.co/bR6cp7g9/Untitled-design-25.png';


  return (
    <main className="w-full h-screen overflow-hidden grid grid-cols-1 md:grid-cols-10">

      {/* Left Side: Contact Information & Scheduling */}
      <div className="col-span-10 md:col-span-4 bg-white p-8 sm:p-12 flex flex-col justify-between">
        <div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Stories at Scale
            </h2>
          </div>

          <div className="space-y-10">
            <ContactInfoItem icon={MessageSquare} title="Chat to us">
              <p className="text-gray-600">Our friendly team is here to help.</p>
              <a href="mailto:hello@storiesatscale.com" className="font-semibold text-gray-900 hover:underline">
                hello@storiesatscale.in
              </a>
            </ContactInfoItem>

            <ContactInfoItem icon={Phone} title="Call us">
              <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+15550000000" className="font-semibold text-gray-900 hover:underline">
              +91 7425882688
              </a>
            </ContactInfoItem>
          </div>
        </div>

        {/* Schedule a Meet Section */}
        <div className="mt-12">
            <div 
              className="relative aspect-square p-8 rounded-xl flex flex-col justify-between text-left bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${scheduleContainerBgImage})` }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-black">Schedule a Meet</h3>
                <p className="mt-2 text-gray-800">Prefer a face-to-face? Schedule a 15-minute introductory call with our team.</p>
                <p className="mt-1 text-sm text-gray-700">Let's connect and discuss how we can help your brand grow.</p>
                 <button
                  className="mt-6 w-full max-w-xs bg-transparent border-2 border-black text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                    Schedule Now!
                </button>
              </div>

              <div className="relative z-10 flex gap-6">
                <a href="#" className="text-gray-700 hover:text-black"><Instagram size={24} /></a>
                <a href="#" className="text-gray-700 hover:text-black"><Twitter size={24} /></a>
                <a href="#" className="text-gray-700 hover:text-black"><Linkedin size={24} /></a>
              </div>
            </div>
        </div>

      </div>

      {/* Right Side: Contact Form */}
      <div className="relative col-span-10 md:col-span-6 bg-[#F6FA5E] p-8 sm:p-12 flex flex-col justify-center items-center overflow-y-auto">
        
        <Link 
            to="/" 
            className="absolute top-8 right-8 bg-transparent border-2 border-black text-black text-sm font-semibold py-2 px-5 rounded-full hover:bg-black hover:text-white transition-colors"
        >
            Back to Home
        </Link>

        <div className="w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Let's Scale Your Story.
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Clear, compelling messaging drives leads, shortens sales cycles, and powers growth. Tell us about your project.
          </p>

          <form className="mt-10 space-y-8">
            <div className="space-y-8">
               <div>
                   <label htmlFor="name" className="text-base font-semibold text-gray-800">Your name</label>
                   <input type="text" id="name" className="mt-2 w-full bg-transparent text-xl font-semibold text-gray-900 border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-black transition-colors" />
               </div>
               <div>
                   <label htmlFor="email" className="text-base font-semibold text-gray-800">you@company.com</label>
                   <input type="email" id="email" className="mt-2 w-full bg-transparent text-xl font-semibold text-gray-900 border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-black transition-colors" />
               </div>
               <div>
                   <label htmlFor="project" className="text-base font-semibold text-gray-800">Tell us a little about the project...</label>
                   <textarea id="project" rows={2} className="mt-2 w-full bg-transparent text-xl font-semibold text-gray-900 border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-black transition-colors resize-none"></textarea>
               </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">How can we help?</h4>
              <p className="text-sm text-gray-700 mb-4">(Please mark all that apply)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                <ServiceCheckbox label="Website design" id="websiteDesign" checked={services.websiteDesign} onChange={handleServiceChange} />
                <ServiceCheckbox label="Content creation" id="contentCreation" checked={services.contentCreation} onChange={handleServiceChange} />
                <ServiceCheckbox label="UX design" id="uxDesign" checked={services.uxDesign} onChange={handleServiceChange} />
                <ServiceCheckbox label="Strategy & consulting" id="strategyConsulting" checked={services.strategyConsulting} onChange={handleServiceChange} />
                <ServiceCheckbox label="User research" id="userResearch" checked={services.userResearch} onChange={handleServiceChange} />
                <ServiceCheckbox label="Other" id="other" checked={services.other} onChange={handleServiceChange} />
                
                {services.other && (
                    <div className="sm:col-span-2 transition-all duration-300 ease-in-out">
                        <label htmlFor="otherDetail" className="text-base font-semibold text-gray-800">Please specify</label>
                        <input
                            type="text"
                            id="otherDetail"
                            value={otherServiceDetail}
                            onChange={(e) => setOtherServiceDetail(e.target.value)}
                            className="mt-2 w-full bg-transparent text-xl font-semibold text-gray-900 border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-black transition-colors"
                            placeholder="Your specific need..."
                        />
                    </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent border-2 border-black text-black text-lg font-semibold py-4 px-6 rounded-full hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
            >
              Let's get started!
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
