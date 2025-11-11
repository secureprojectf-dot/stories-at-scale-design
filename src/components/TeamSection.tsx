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
  {
    id: 7,
    name: "Rachel Martinez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 8,
    name: "Tom Harrison",
    role: "Creative Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 9,
    name: "Sophie Turner",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: 10,
    name: "Alex Thompson",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    id: 11,
    name: "Maria Garcia",
    role: "Visual Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
  },
  {
    id: 12,
    name: "Chris Evans",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Featured Gallery
          </h2>
          <p className="font-bricolage text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of creative excellence and innovation
          </p>
        </div>

        <HoverExpand panels={teamMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
