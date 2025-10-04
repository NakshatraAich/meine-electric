'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Table } from './table'

export function WhyIronair() {
  const boxIcons = [
    { src: '/images/cost.png', alt: 'Battery', text: 'Extremely cost effective storage' },
    { src: '/images/clock.png', alt: 'Power', text: 'Stores electricity for seasonal use' },
    { src: '/images/scale.png', alt: 'Renewable', text: 'Scalable without harm' },
    { src: '/images/safety.png', alt: 'Safety', text: 'No emissions, No byproducts' },
  ]

  return (
    <section className="section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <div className="container-padding space-y-40">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">Why Iron-Air?</h2>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                Iron-air batteries provide affordable, multi-day energy storage using simple, safe, and abundant materials.
              </p>
              <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                They keep the grid reliable during renewable lulls and accelerate the shift to a fossil-free future.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="lg:w-[108rem] relative aspect-square lg:aspect-[4/3] rounded-sm group flex flex-col items-center justify-center">
            <img
              src="/images/skid.png"  // Replace with your image path
              alt="Iron-Air Battery Illustration"
              className="object-cover w-full lg:w-[60%] mb-16 sm:mb-24 md:mb-44 h-auto rounded"
            />

            {/* Bottom-left animated boxes */}
            <motion.div
              className="flex flex-wrap w-full justify-center gap-10
                         relative sm:absolute sm:bottom-4 sm:left-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {boxIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="aspect-square w-28 sm:w-32 md:w-28 lg:w-32 p-2 flex flex-col items-center justify-center
                             border-0 bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur
                             rounded gap-2 shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto object-contain"
                  />
                  <div className="text-center text-xs sm:text-xs md:text-xs font-medium text-white leading-snug">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
