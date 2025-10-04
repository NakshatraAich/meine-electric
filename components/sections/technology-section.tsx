'use client'

import { useEffect, useRef } from 'react'

export function TechnologySection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  return (
    <section
      id="tech"
      className="section-spacing mt-20 container-padding xl:mx-12 pt-20"
    >
      {/* Center the flex container horizontally */}
      <div className="flex flex-col-reverse xl:flex-row gap-20 max-w-7xl">
        
        {/* 🎥 Video Left */}
        <div className="w-full max-w-[40rem] aspect-[4/3]">
          <video
            ref={videoRef}
            src="/cycle.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg s"
          />
        </div>

        {/* 📝 Text Right */}
        <div className="w-full xl:w-1/2 lex flex-col items-center xl:items-start text-left mt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Our Technology
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              During discharge, iron reacts with oxygen to form rust — a simple, natural reaction that releases stored energy. When recharged, the rust is converted back into pure iron through our proprietary method. 
            </p>
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              This reversible cycle enables a sustainable, low-cost solution to power widespread future energy systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
