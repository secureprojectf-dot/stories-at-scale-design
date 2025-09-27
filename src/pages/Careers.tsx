import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Digital Marketing Manager",
    department: "Marketing",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description: "Lead our digital marketing initiatives and drive growth through innovative campaigns.",
    requirements: [
      "5+ years of digital marketing experience",
      "Experience with Google Ads, Facebook Ads, and SEO",
      "Strong analytical and project management skills",
      "Bachelor's degree in Marketing or related field"
    ]
  },
  {
    id: 2,
    title: "Creative Content Strategist",
    department: "Creative",
    location: "Los Angeles, CA / Remote",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    description: "Develop creative content strategies that engage audiences and drive brand awareness.",
    requirements: [
      "3+ years of content marketing experience",
      "Excellent writing and storytelling skills",
      "Experience with social media platforms",
      "Portfolio of creative campaigns"
    ]
  },
  {
    id: 3,
    title: "Data Analytics Specialist",
    department: "Analytics",
    location: "Chicago, IL / Remote",
    type: "Full-time",
    salary: "$70,000 - $100,000",
    description: "Turn data into actionable insights that drive marketing performance and ROI.",
    requirements: [
      "3+ years of data analysis experience",
      "Proficiency in Google Analytics, SQL, and Excel",
      "Experience with data visualization tools",
      "Strong problem-solving skills"
    ]
  },
  {
    id: 4,
    title: "Marketing Intern",
    department: "Marketing",
    location: "New York, NY",
    type: "Internship",
    salary: "$20/hour",
    description: "Gain hands-on experience in digital marketing while supporting our team's initiatives.",
    requirements: [
      "Currently pursuing Marketing or related degree",
      "Strong communication skills",
      "Eagerness to learn and grow",
      "Basic knowledge of social media platforms"
    ]
  }
];

const benefits = [
  "Competitive salary and equity package",
  "Comprehensive health, dental, and vision insurance",
  "Flexible work arrangements and remote options",
  "Professional development budget",
  "Unlimited PTO policy",
  "Team retreats and company events",
  "Latest technology and equipment",
  "Collaborative and inclusive work environment"
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="font-bricolage text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're looking for passionate individuals who want to make an impact in the digital marketing world. 
            Join us in creating stories that scale and drive meaningful results for our clients.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-bricolage text-2xl mb-4">Why Work With Us?</CardTitle>
              <CardDescription className="text-lg">
                At Stories at Scale, we believe in empowering our team to do their best work while growing professionally and personally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Collaborative Team</h3>
                  <p className="text-sm text-muted-foreground">Work with talented professionals who support each other's growth</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-sm text-muted-foreground">Flexible schedules and remote work options</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Competitive Benefits</h3>
                  <p className="text-sm text-muted-foreground">Great compensation and comprehensive benefits package</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-sm text-muted-foreground">Professional development and career advancement paths</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-center">Our Benefits Package</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="font-bricolage text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="font-bricolage text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</p>
                      <p className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="font-bricolage" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-primary/5">
            <CardContent className="py-12">
              <h3 className="font-bricolage text-2xl font-bold mb-4">Don't See a Perfect Match?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
              </p>
              <Button size="lg" className="font-bricolage" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;