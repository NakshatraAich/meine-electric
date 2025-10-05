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
          <motion.div
            className="w-full h-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">Why Iron-Air?</h2>
              <div className="space-y-2 mb-6">
                <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                  Clean energy transition is not limited by renewable generation today, but by how we store and shift energy across time - not just for hours, but for days, weeks, and even seasons. Long Duration Energy Storage (LDES) that is affordable, scalable, and sustainable is the missing link in building a reliable renewable grid.
                </p>
                <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                  Iron-air batteries are the most practical LDES solution: using abundant iron to deliver multi-day storage at the lowest cost per kWh, they solve renewable curtailment and make decarbonizing the grid both feasible and affordable. This breakthrough bridges the gap between renewable supply and continuous demand, ensuring a resilient, fossil-free energy future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content (Image + Boxes) */}
          <div className="w-full lg:w-[108rem] h-full relative flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/skid.png"
                alt="Iron-Air Battery Illustration"
                className="object-contain w-full lg:w-[60%] h-auto rounded"
              />
            </div>

            {/* Bottom-left animated boxes */}
            <motion.div
              className="flex flex-wrap w-full justify-center gap-10 mt-10
                         relative sm:absolute sm:bottom-4 sm:left-0"
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
                    className="aspect-square w-28 sm:w-32 md:w-28 lg:w-32 flex flex-col items-center
                               border-0 bg-gradient-to-br from-meine-electric via-meine-electric/80 to-meine-electric/60 p-2
                               rounded justify-between shadow-lg backdrop-blur-sm"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="rounded-full bg-white text-xs font-bold text-meine-electric w-4 h-4 flex items-center justify-center">
                        <div>{idx + 1}</div>
                      </div>

                      <Icon className="aspect-square text-white" size={44} strokeWidth={2} />
                    </div>

                    <div className="text-left text-xs sm:text-xs md:text-xs font-medium text-[#064919] leading-snug">
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
