"use client";
import React from "react";

export default function ShowcasePage() {
  const handleFullscreen = () => {
    const video = document.querySelector('video');
    if (video && video.requestFullscreen) {
      video.requestFullscreen().catch(err => {
        console.log('Fullscreen not supported:', err);
      });
    }
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
          <p className="text-gray-400 mb-6 text-sm">
            Haz clic en el video para controlar la reproducción
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center">
            <button 
              onClick={handleFullscreen}
              className="w-64 h-10 rounded-xl bg-[#ff00ff] border dark:border-white border-transparent text-white text-sm font-semibold hover:bg-[#e600e6] transition-colors"
            >
              Pulsa para pantalla completa
            </button>
            <button 
              onClick={() => window.close()}
              className="w-48 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-100 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 