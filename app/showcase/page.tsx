"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ShowcasePage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        {/* Video MP4 optimizado para máxima calidad */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          <video 
            className="w-full h-full object-contain"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ 
              maxWidth: '100%', 
              height: '100%',
              backgroundColor: '#000'
            }}
          >
            <source src="/motion-graphics.mp4" type="video/mp4" />
            <source src="/motion-graphics.mov" type="video/quicktime" />
            <p className="text-white p-8 text-center">
              Tu navegador no soporta la reproducción de video. 
              <br />
              <a href="/motion-graphics.mp4" className="text-[#ff00ff] underline">
                Descargar video
              </a>
            </p>
          </video>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={handleGoBack}
            className="w-32 h-10 rounded-xl bg-[#ff00ff] border dark:border-white border-transparent text-white text-sm font-semibold hover:bg-[#e600e6] transition-colors"
          >
            ATRÁS
          </button>
        </div>
      </div>
    </div>
  );
} 