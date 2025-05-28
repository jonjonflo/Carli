"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const wordsLine1 = [
    { text: "Estás" },
    { text: "preparado" },
    { text: "para" },
    { text: "ver" },
    { text: "los" },
    { text: "motion" },
    { text: "graphics" },
  ];

  const wordsLine2 = [
    { text: "más" },
    { text: "increíbles" },
    { text: "de" },
    { text: "tu" },
    { text: "vida?", className: "text-[#ff00ff] dark:text-[#ff00ff]" },
  ];

  const handleQuieroClick = () => {
    // Crear una nueva página para mostrar el archivo
    window.open('/showcase', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-8">
        Carla Cocozza for Hogarth
      </p>
      
      {/* Primera línea: 0s - 2s */}
      <TypewriterEffectSmooth 
        words={wordsLine1} 
        className="mb-1"
        cursorClassName="hidden"
        delay={0}
        duration={2}
      />
      
      {/* Segunda línea: 2s - 3.5s (duración 1.5s) */}
      <TypewriterEffectSmooth 
        words={wordsLine2} 
        className="mt-0"
        cursorClassName="bg-[#ff00ff]"
        delay={2}
        duration={1.5}
      />
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
        <button 
          onClick={handleQuieroClick}
          className="w-32 h-10 rounded-xl bg-[#ff00ff] border dark:border-white border-transparent text-white text-sm font-semibold hover:bg-[#e600e6] transition-colors cursor-pointer"
        >
          Quiero
        </button>
        <button className="w-48 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-100 transition-colors">
          No, me da miedo
        </button>
      </div>
    </div>
  );
} 