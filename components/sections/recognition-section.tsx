'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const partners = [
  { name: 'AIC', logo: '/logos/aic.png' },
  { name: 'ARAI', logo: '/logos/arai.png' },
  { name: 'Grad Capital', logo: '/logos/grad.png' },
  { name: 'Greenr', logo: '/logos/greenr.png' },
  { name: 'HDFC', logo: '/logos/hdfc.jpeg' },
  { name: 'Irena', logo: '/logos/irena.png' },
  { name: 'PIEDS', logo: '/logos/PIEDS.png' },
  { name: 'SPTBI', logo: '/logos/sptbi.png' },
  { name: 'Niti Aayog', logo: '/logos/niti.png' },
  { name: 'Nidhi Prayas', logo: '/logos/nidhi.png' },
  { name: 'Venture Catalysts', logo: '/logos/vc.png' },
]

// Parent container
const containerVariants = {
  hidden: { opacity: 1 }, // keep container visible so only children animate
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

// Card animation (fade + rise together)
const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }, // both run in same duration
  },
}

export function RecognitionSection() {
  return (
    <section className="section-spacing bg-gray-50 lg:mx-28">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider mb-4">
            Recognition & Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:max-w-3xl">
            Recognized and supported by leading technology and climate initiatives
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto lg:max-w-xl">
            In collaboration with energy and climate initiatives, we&apos;re driving solutions that power a cleaner tomorrow.
          </p>
        </div>

        {/* Partner Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={cardVariants}
              className={cn(
                'relative bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 cursor-pointer overflow-hidden group',
                'transition-transform duration-300 hover:scale-105'
              )}
            >
              {/* Partner Logo */}
              <Image
                src={partner.logo}
                alt={partner.name}
                width={130}
                height={130}
                className="object-contain z-10 aspect-square"
              />

              {/* Overlay Title */}
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-2 text-center text-sm font-semibold text-gray-700 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
