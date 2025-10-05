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
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Our Technology:  From Rust to Reliable Power
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              At the core of our innovation is the reversible rust battery - a breakthrough iron-air chemistry that turns one of nature&apos;s most common reactions into a powerful energy storage solution.
            </p>
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              During discharge, iron reacts with oxygen to form rust, releasing energy. On charging, our proprietary process reverses the rust back to pure iron, completing a clean and repeatable cycle. This cycle can be repeated thousands of times, providing a low-cost, long-duration, and sustainable way to store renewable energy.
            </p>
            <p className="leading-relaxed text-gray-600 text-base sm:text-lg max-w-lg">
              Unlike conventional batteries that rely on rare or expensive materials, our iron-air technology harnesses earth-abundant, safe, and recyclable elements - making it an ideal solution for grid-scale applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
