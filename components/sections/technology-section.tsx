'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const steps = [
  { text: "During discharge, iron reacts with oxygen to form rust — a simple, natural reaction that releases stored energy.", top: '0%', left: '0%' },
  { text: "When recharged, the rust is converted back into pure iron through our proprietary method.", top: '25%', right: '-10%' },
  { text: "This reversible cycle enables a sustainable, low-cost solution to power widespread future energy systems.", top: '80%', left: '0%' },
]

export function TechnologySection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1
  }, [])

  return (
    <section className="container-padding xl:mx-12 pt-20 md:pt-24">
      <div className="text-center mb-12 flex flex-col items-center">
        <p className="text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider mb-4">
          Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 lg:max-w-xl">
          Redefining Iron-Air Energy
        </h2>

        <div className="relative w-full max-w-5xl">
          {/* Video */}
          <video
            ref={videoRef}
            src="/cycle.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="mt-6 flex flex-col space-y-4 md:hidden">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 text-sm rounded-full bg-meine-electric text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-600 text-left text-sm font-semibold leading-relaxed">{step.text}</span>
              </div>
            ))}
          </div>

          {/* Manual bullets */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1, y: -15 }}
              whileInView={{ opacity: 1, scale: 1 , y: 0}}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute hidden md:flex items-start gap-3 max-w-xs"
              style={{
                top: step.top,
                left: step.left,
                right: step.right,
              }}
            >
              <span className="flex-shrink-0 w-8 h-8 text-sm rounded-full bg-meine-electric text-white flex items-center justify-center font-semibold">
                {index + 1}
              </span>
              <span className="text-gray-600 text-left text-base font-semibold leading-relaxed">{step.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
