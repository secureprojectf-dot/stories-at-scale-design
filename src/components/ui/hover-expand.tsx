import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Panel {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
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
    <div className={cn("flex h-[500px] w-full gap-2", className)}>
      {panels.map((panel, index) => {
        const isExpanded = hoveredIndex === index || clickedIndex === index;
        const isCollapsed = (hoveredIndex !== null && hoveredIndex !== index) || 
                          (clickedIndex !== null && clickedIndex !== index);

        return (
          <motion.div
            key={panel.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            initial={false}
            animate={{
              flex: isExpanded ? 2 : 1,
              opacity: isCollapsed ? 0.6 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.image})` }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <motion.div
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0.9,
                }}
              >
                <h3 className="text-2xl font-bold mb-1">{panel.name}</h3>
                <p className="text-sm text-white/80 mb-3">{panel.role}</p>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="text-sm text-white/90 leading-relaxed"
                    >
                      {panel.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Collapsed State Vertical Text */}
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-white text-xl font-bold transform -rotate-90 whitespace-nowrap">
                  {panel.name}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
