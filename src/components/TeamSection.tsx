import { HoverExpand } from "@/components/ui/hover-expand";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Video Producer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Digital Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="font-bricolage text-lg text-muted-foreground max-w-2xl mx-auto">
            The creative minds behind Dhasha Media, dedicated to bringing your brand to life
          </p>
        </div>

        <HoverExpand panels={teamMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
