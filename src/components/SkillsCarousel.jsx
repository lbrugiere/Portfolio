import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { techIcons, techColors } from "../utils/techIcons";

export default function SkillsCarousel({ skills }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth =
      scrollRef.current.firstChild?.clientWidth || 260; 

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + 16 : -cardWidth - 16,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex items-center">
      <button onClick={() => scroll("left")} className="p-2 hidden md:block">
        <ChevronLeft className="w-8 h-8 text-light-accent hover:text-warm-accent" aria-label="Scroll skills to the left"/>
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth 
          scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-dark-secondary
          w-full px-4">
        {skills.map((skill, index) => {
          const Icon = techIcons[skill.icon];
          const color = techColors[skill.icon];

          return (
            <div
              key={index}
              className="
                 shadow px-6 py-6
                flex flex-col items-start flex-shrink-0
                w-[260px] sm:w-[300px] lg:w-[340px]  
                 transition-all">
              {Icon && <Icon className="w-16 h-16 mb-4" color={color} />}

              <h3 className="font-bold text-light-accent text-lg mb-2">
                {skill.name}
              </h3>

              <p className="text-base text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={() => scroll("right")} className="p-2 hidden md:block">
        <ChevronRight className="w-8 h-8 text-light-accent hover:text-warm-accent" aria-label="Scroll skills to the right" />
      </button>
    </div>
  );
}

