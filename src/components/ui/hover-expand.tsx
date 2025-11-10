import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Panel {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface HoverExpandProps {
  panels: Panel[];
  className?: string;
}

export function HoverExpand({ panels, className }: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className={cn("flex h-[600px] w-full gap-1", className)}>
      {panels.map((panel, index) => {
        const isExpanded = hoveredIndex === index || clickedIndex === index;

        return (
          <motion.div
            key={panel.id}
            className="relative overflow-hidden cursor-pointer bg-muted"
            initial={false}
            animate={{
              flex: isExpanded ? 3 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(index)}
          >
            {/* Background Image - only visible when expanded */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.image})` }}
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
                scale: isExpanded ? 1 : 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
            />
            
            {/* Overlay Gradient - only when expanded */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
              }}
            />

            {/* Vertical Text - Always Visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center"
                initial={false}
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-foreground text-lg font-semibold tracking-wider transform -rotate-90 whitespace-nowrap origin-center">
                  {panel.name}
                </p>
              </motion.div>
            </div>

            {/* Expanded Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-2">{panel.name}</h3>
              <p className="text-lg text-white/90">{panel.role}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
