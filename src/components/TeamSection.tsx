import { HoverExpand } from "@/components/ui/hover-expand";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    description: "Leading our creative vision with 10+ years of experience in brand strategy and digital storytelling.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Crafting compelling narratives that drive engagement and build lasting connections with audiences.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    description: "Transforming social platforms into powerful growth engines through data-driven strategies.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Video Producer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    description: "Creating stunning visual content that captures attention and tells your brand's story.",
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
