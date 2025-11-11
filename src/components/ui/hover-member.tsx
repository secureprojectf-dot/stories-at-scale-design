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
        "relative w-full min-h-screen py-8 px-4 sm:px-8 overflow-hidden flex flex-col items-center justify-center",
        backgroundColor,
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor Follower */}
      <motion.div
        className={cn("pointer-events-none fixed w-16 h-16 rounded-full z-50 opacity-80", cursorColor)}
        animate={{
          x: cursorPosition.x - 32,
          y: cursorPosition.y - 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Small Team Images at Top */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Large Animated Text Display */}
        <div className="text-center flex items-center justify-center min-h-[350px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={displayName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "font-bricolage font-extrabold uppercase tracking-tighter leading-none whitespace-nowrap",
                "text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem]",
                hoveredMember ? "text-[#F6FA5E]" : textColor
              )}
              style={{ 
                fontWeight: 800
              }}
            >
              {displayName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
