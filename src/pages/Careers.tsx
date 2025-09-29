// Be sure to install this library for the icons: npm install lucide-react
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import ResizableNavigation from "@/components/ResizableNavigation";
import { X, UploadCloud, FileText, CheckCircle } from 'lucide-react';

// --- Begin: New and Modified Components for 2-Step Application ---

const JobDescriptionModal = ({ isOpen, onClose, onProceed }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="p-8 border-b relative">
                    <h2 className="text-2xl font-bold text-gray-900">Content Writer</h2>
                    <p className="text-gray-600 mt-1">Join our team of strategists and help craft compelling B2B narratives.</p>
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                    
                </div>
                <div className="p-8 overflow-y-auto space-y-6">
                    <div>
                        <h3 className="font-bold text-gray-800 mb-2">About the Role</h3>
                        <p className="text-gray-600">As a Content Writer at Stories at Scale, you will be instrumental in helping our B2B clients find their voice. You will transform complex ideas into clear, compelling content that drives engagement and supports business goals. This role requires a blend of creativity, strategic thinking, and exceptional writing skills.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3">Key Responsibilities</h3>
                        <ul className="space-y-2 text-gray-600 list-disc list-inside">
                            <li>Develop and write high-quality, long-form content including blog posts, whitepapers, and case studies.</li>
                            <li>Craft compelling copy for websites, landing pages, and email campaigns.</li>
                            <li>Collaborate with our strategy team to develop content calendars and align content with client objectives.</li>
                            <li>Conduct research on industry trends to ensure content is authoritative and relevant.</li>
                            <li>Proofread and edit content to maintain a high standard of quality and consistency.</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-bold text-gray-800 mb-3">Qualifications</h3>
                        <ul className="space-y-2 text-gray-600 list-disc list-inside">
                            <li>2+ years of experience in B2B content writing, preferably in a tech or agency environment.</li>
                            <li>A strong portfolio showcasing your writing skills and ability to tackle complex topics.</li>
                            <li>Excellent research, editing, and proofreading abilities.</li>
                            <li>Ability to work independently and manage multiple projects simultaneously.</li>
                            <li>Familiarity with SEO best practices is a plus.</li>
                        </ul>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 border-t flex justify-end gap-4 mt-auto">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                    <Button className="bg-gray-900 text-white hover:bg-black" onClick={onProceed}>Proceed to Application</Button>
                </div>
            </div>
        </div>
    );
};


const ApplicationModal = ({ isOpen, onClose }) => {
  // (This component's code is unchanged from the previous version)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxFileSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxFileSize) {
        setFileError('File size exceeds 5MB. Please upload a smaller file.');
        setResumeFile(null);
      } else {
        setFileError('');
        setResumeFile(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setFileError('Please upload your resume.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form Submitted:', { ...formData, resume: resumeFile.name });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
    setResumeFile(null);
    setFileError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-8 relative">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={closeModal}>
            <X className="h-5 w-5" />
          </Button>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Application Sent!</h2>
              <p className="text-gray-600 mt-2">Thank you for your interest. We've received your application and will be in touch if you're a good fit.</p>
              <Button className="mt-6" onClick={closeModal}>Close</Button>
            </div>
          ) : (
             <>
              <h2 className="text-2xl font-bold text-gray-900">Apply for Content Writer</h2>
              <p className="text-gray-600 mt-1">We're excited to see if you're a good fit for our team.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Upload Resume</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>
                  {fileError && <p className="text-sm text-red-600 mt-2">{fileError}</p>}
                  {resumeFile && !fileError && (
                    <div className="mt-3 flex items-center justify-between bg-gray-50 p-2 rounded-md">
                       <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-700 font-medium">{resumeFile.name}</span>
                      </div>
                       <button type="button" onClick={() => setResumeFile(null)} className="text-red-600 hover:text-red-800"><X size={16}/></button>
                    </div>
                  )}
                </div>
                <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-black" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


const JobOpeningCard = ({ onApplyClick }) => (
    <div className="bg-gray-50/70 border border-gray-100 p-8 rounded-xl h-full flex flex-col">
        <LogoDisplay />
        <h3 className="mt-6 mb-2 text-xl font-bold text-gray-900">Content Writer</h3>
        <p className="text-gray-600 mb-4">We're looking for a creative B2B content writer to help us craft compelling narratives for our clients.</p>
        <ul className="space-y-2 text-sm text-gray-500 list-disc list-inside mb-6">
            <li>Develop high-quality blog posts & articles.</li>
            <li>Write compelling website and landing page copy.</li>
            <li>Collaborate with strategists on content calendars.</li>
        </ul>
        <div className="mt-auto">
             <Button className="w-full bg-gray-900 text-white hover:bg-black" onClick={onApplyClick}>
                View Role & Apply
            </Button>
        </div>
    </div>
);

// --- End: New and Modified Components ---


const logoUrl = 'https://i.ibb.co/4gRrzy0c/STORIESat-SCALE-W-Transparent.png';

const LogoDisplay = () => (
    <div className="w-16 h-16 flex items-center justify-center">
       <img src={logoUrl} alt="Stories at Scale Logo" className="w-12 h-12" />
    </div>
);

const LogoDisplayLarge = () => (
    <div className="w-48 h-48 flex items-center justify-center">
       <img src={logoUrl} alt="Stories at Scale Logo" className="w-44 h-44" />
    </div>
);

const CareersPage = () => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleProceedToApplication = () => {
    setIsDescriptionModalOpen(false);
    setIsApplicationModalOpen(true);
  };

  return (
    <>
      <JobDescriptionModal 
        isOpen={isDescriptionModalOpen} 
        onClose={() => setIsDescriptionModalOpen(false)}
        onProceed={handleProceedToApplication}
      />
      <ApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
      
      <div className="min-h-screen bg-white font-sans">
        <ResizableNavigation />
        <main className="pt-20 pb-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
              <div className="bg-[#ECF55D] p-12 rounded-xl min-h-[500px] flex flex-col justify-between">
                  <div>
                      <LogoDisplayLarge />
                  </div>
                  <div>
                      <p className="text-sm font-bold tracking-widest text-gray-800 mb-2">CAREERS AT STORIES AT SCALE</p>
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                          Help us write the next chapter.
                      </h1>
                  </div>
              </div>
              <div className="h-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto-format&fit=crop" 
                  alt="Collaborative team working in an office" 
                  className="w-full h-full min-h-[500px] object-cover"
                />
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-bold tracking-widest text-gray-800">WHY STORIES AT SCALE?</h2>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                  We help ambitious B2B companies find their voice and scale their story.
                </h3>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Stories at Scale is a team of strategists, writers, and creative thinkers dedicated to one thing: helping B2B brands articulate their value. We believe clear, compelling messaging is the engine for growth, and we're looking for passionate people to join our mission.
                  </p>
                  <p>
                    Our culture is built on curiosity, collaboration, and a relentless drive for quality. We empower our team to think strategically, take ownership, and make a real impact on our clients' success.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-24">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                       We're looking for talented individuals to join our growing team.
                     </p>
                </div>
                <div className="max-w-sm mx-auto">
                    <JobOpeningCard onApplyClick={() => setIsDescriptionModalOpen(true)} />
                </div>
            </section>

            <section className="bg-[#ECF55D] p-16 rounded-xl flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md-text-left">
                  <LogoDisplay />
                  <p className="text-sm font-bold tracking-widest text-gray-800 my-2">STAY IN TOUCH</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Don't see a fit? <br /> Let's connect anyway.
                  </h2>
              </div>
              <Button className="bg-gray-900 text-white text-sm font-bold hover:bg-black rounded-sm px-8 py-6 flex-shrink-0">
                  GET IN TOUCH
              </Button>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default CareersPage;
