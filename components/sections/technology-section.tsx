'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full xl:w-1/2 lex flex-col items-center xl:items-start text-left mt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight xl:ml-28">
            Our Technology
          </h2>
          <div className="space-y-4 xl:ml-28">
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg font-bold">
              Our reversible rust battery transforms a natural iron-air reaction into a powerful, repeatable energy cycle.
            </p>
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              At the heart of this breakthrough is a simple yet revolutionary process: during discharge, iron reacts with oxygen to form rust, releasing energy, and our proprietary charging method reverses this reaction, converting rust back into pure iron. This clean cycle can be repeated thousands of times, enabling scalable, affordable, and sustainable energy storage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
