'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13, // ⏱ controls delay between each child
      delayChildren: 0.2,    // ⏱ delay before the first starts
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="container-padding pt-28 sm:pt-32 md:pt-36 pb-4 md:pb-10">
        
        {/* Staggered Main Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto flex flex-col justify-center"
        >
          {/* Tagline */}
          <motion.div variants={item} className="flex flex-row gap-2 items-center justify-center">
            <button className="text-xs mb-2 text-[#222222] px-4 pb-2 pt-2 w-fit rounded-full font-semibold bg-meine-electric/30 tracking-wider">
              Building the Foundation for Tomorrow&apos;s Energy
            </button>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4 sm:mt-0"
          >
            <span className="text-[#222222] block">Powering the Future</span>
            <span className="text-[#222222]">with </span>
            <span className="text-meine-electric">Iron Air Fuel Cells</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-gray-600 text-base sm:text-base md:text-lg leading-tight max-w-3xl mx-auto mb-4 sm:mb-4 md:mb-4"
          >
            Revolutionizing energy storage by harnessing abundant materials and oxygen<br className="hidden md:block" />
            to create efficient, sustainable power solutions for the future
          </motion.p>

          {/* Divider + CTA */}
          <motion.div
            variants={item}
            className="flex flex-col gap-3 items-center justify-center mb-8"
          >
            <div className="p-[1px] w-8 bg-stone-200 rounded-full"></div>
            <button className="shadow-lg text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image (fades in after content) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} // delayed until content finishes
          className="flex flex-col justify-center items-center"
        >
          <div className="max-w-6xl relative aspect-[9/12] sm:aspect-[18/9] z-20 rounded-2xl sm:rounded-t-xl overflow-hidden bg-gray-100">
            <img
              src="/images/hero-background.webp"
              alt="Iron Air Energy Storage"
              className="w-full h-full object-cover scale-[1.25]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
