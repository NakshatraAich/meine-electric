'use client'

import { motion } from 'framer-motion'
import { RecognitionSection } from './recognition-section'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function HeroSection() {
  return (
    <section className="relative bg-white mt-24 md:mt-36 lg:mt-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full gap-5 md:gap-12 lg:gap-0">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center gap-4 w-full lg:w-2/5 container-padding sm:container-left sm:mt-0 lg:mt-16 mt-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-4xl md:max-w-lg font-bold text-[#222222] mb-6 lg:mb-0"
          >
            Low-Cost Multi-Day Energy Storage with Breakthrough{' '}
            <span className="text-meine-electric">Iron Air Technology</span>
          </motion.h2>

          <div className='lg:block hidden'>
            <RecognitionSection />
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="w-full lg:w-2/3 flex-shrink-0 relative">

          {/* Small & Medium screens: aspect ratio 3:4 */}
          <div className="lg:hidden w-full aspect-[3/4] overflow-hidden relative">
            <img
              src="/images/hero-background.png"
              alt="Scalable Energy"
              className="w-full h-full object-cover object-left"
            />

            {/* Gradient overlay */}
            <div className="absolute -bottom-1 inset-0 bg-gradient-to-b from-transparent via-white/10 to-white overflow-hidden"></div>
          </div>

          {/* Large screens: full width, fixed height */}
          <div className="hidden lg:block w-full h-dvh overflow-hidden rounded-bl-xl">
            <img
              src="/images/hero-background.png"
              alt="Scalable Energy"
              className="w-full h-full object-cover object-left"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          </div>
        </div>

        <div className='lg:hidden block'>
          <RecognitionSection />
        </div>
      </div>
    </section>
  )
}
