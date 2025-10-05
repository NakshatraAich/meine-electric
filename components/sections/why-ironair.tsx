'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { DollarSign, Zap, Expand, HardHat } from 'lucide-react'

export function WhyIronair() {
  const boxIcons = [
    { icon: DollarSign, text: 'Extremely cost effective storage' },
    { icon: Zap, text: 'Stores electricity for seasonal use' },
    { icon: Expand, text: 'Scalable without harm' },
    { icon: HardHat, text: 'Safe to use and deploy' },
  ]

  return (
    <section className="section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <div className="container-padding space-y-40">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-4">
          
          {/* Left Content */}
          <motion.div className="w-full h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">Why Iron-Air?</h2>
              <div className="space-y-2 mb-6 xl:mr-28">
                <p className="text-gray-600 text-base sm:text-lg max-w-lg font-bold">
                  Energy storage, not generation, is the real barrier limiting the clean energy transition today.
                </p>
                <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                  Affordable, scalable, and sustainable Long Duration Energy Storage (LDES) is essential for a reliable renewable grid. Iron-air batteries are the most practical LDES solution: using abundant iron, they provide multi-day storage at the lowest cost per kWh, reduce renewable curtailment, and make decarbonizing the grid achievable. By bridging the gap between intermittent supply and continuous demand, this technology enables a resilient, fossil-free energy future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Image + Boxes stacked vertically */}
          <div className="w-full lg:w-[108rem] h-full flex flex-col justify-start items-center gap-10">
            
            {/* 📸 Image on top */}
            <div className="flex items-center justify-center w-full">
              <img
                src="/images/skid.png"
                alt="Iron-Air Battery Illustration"
                className="object-contain w-full lg:w-[60%] h-auto rounded"
              />
            </div>

            {/* 📦 Boxes below as row */}
            <motion.div
              className="flex flex-wrap justify-center items-stretch gap-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {boxIcons.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    className="flex flex-col justify-between items-start w-32 sm:w-36 md:w-40 p-3 
                               bg-gradient-to-br from-meine-electric via-meine-electric/80 to-meine-electric/60 
                               rounded shadow-lg backdrop-blur-sm aspect-square"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="rounded-full bg-white text-xs font-bold text-meine-electric w-5 h-5 flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <Icon className="text-white" size={44} strokeWidth={2} />
                    </div>

                    <div className="text-left text-xs sm:text-sm font-medium text-[#064919] leading-snug mt-3">
                      {item.text}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
