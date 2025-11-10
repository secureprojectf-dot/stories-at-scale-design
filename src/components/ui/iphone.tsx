import React from "react";
import { cn } from "@/lib/utils";

interface IphoneProps {
  videoSrc: string;
  className?: string;
}

export function Iphone({ videoSrc, className }: IphoneProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div className="relative w-[300px] md:w-[340px]">
        {/* iPhone Frame */}
        <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-[8px] border-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-7 bg-black rounded-b-3xl z-10"></div>
          
          {/* Screen */}
          <div className="relative bg-white rounded-[2.3rem] overflow-hidden aspect-[9/19.5]">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute -left-[2px] top-[100px] w-[3px] h-[30px] bg-black rounded-l-lg"></div>
        <div className="absolute -left-[2px] top-[140px] w-[3px] h-[50px] bg-black rounded-l-lg"></div>
        <div className="absolute -left-[2px] top-[200px] w-[3px] h-[50px] bg-black rounded-l-lg"></div>
        <div className="absolute -right-[2px] top-[160px] w-[3px] h-[70px] bg-black rounded-r-lg"></div>
      </div>
    </div>
  );
}
