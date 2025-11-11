import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  image: string;
}

interface HoverMemberProps {
  teamMembers: TeamMember[];
  defaultName?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  cursorColor?: string;
}

export function HoverMember({
  teamMembers,
  defaultName = "Our Team",
  className,
  backgroundColor = "bg-background",
  textColor = "text-foreground",
  hoverTextColor = "text-primary",
  cursorColor = "bg-primary",
}: HoverMemberProps) {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const displayName = hoveredMember || defaultName;

  return (
    <div
      className={cn(
        "relative w-full py-20 px-4 sm:px-8 overflow-hidden",
        backgroundColor,
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor Follower */}
      <motion.div
        className={cn("pointer-events-none fixed w-4 h-4 rounded-full mix-blend-difference z-50", cursorColor)}
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Animated Text Display */}
        <div className="text-center mb-16 h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={displayName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold",
                hoveredMember ? hoverTextColor : textColor
              )}
            >
              {displayName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Name Label at Bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <p className="text-lg font-semibold">{member.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
