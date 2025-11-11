import { HoverMember } from "@/components/ui/hover-member";

const realTeamMembers = [
  {
    name: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    name: "Jessica Lee",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    name: "Ryan Cooper",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Daniel Kim",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    name: "Olivia Martinez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
];

const RealTeamSection = () => {
  return (
    <HoverMember
      teamMembers={realTeamMembers}
      defaultName="Meet Our Team"
      backgroundColor="bg-background"
      textColor="text-foreground"
      hoverTextColor="text-primary"
      cursorColor="bg-primary"
    />
  );
};

export default RealTeamSection;
