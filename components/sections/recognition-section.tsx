'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const partners = [
  { name: 'Irena', logo: '/logos/irena.png', size: 160 },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', size: 120 },
  { name: 'Climate Collective', logo: '/logos/climate.webp', size: 180 },
  { name: 'Shell', logo: '/logos/shell.png', size: 170 },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', size: 160 },
  { name: 'Baker Hughes', logo: '/logos/baker.png', size: 200 },
  { name: 'ARAI', logo: '/logos/arai.png', size: 200 },
  { name: 'SPTBI', logo: '/logos/sptbi.png', size: 160 },
  { name: 'Anna University', logo: '/logos/anna.svg', size: 100 },
  { name: 'Technoserve', logo: '/logos/technoserve.png', size: 400 },
  { name: 'Niti Aayog', logo: '/logos/niti.png', size: 100 },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', size: 160 },

  { name: 'Irena', logo: '/logos/irena.png', size: 160 },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', size: 120 },
  { name: 'Climate Collective', logo: '/logos/climate.webp', size: 180 },
  { name: 'Shell', logo: '/logos/shell.png', size: 170 },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', size: 160 },
  { name: 'Baker Hughes', logo: '/logos/baker.png', size: 200 },
  { name: 'ARAI', logo: '/logos/arai.png', size: 200 },
  { name: 'SPTBI', logo: '/logos/sptbi.png', size: 160 },
  { name: 'Anna University', logo: '/logos/anna.svg', size: 120 },
  { name: 'Technoserve', logo: '/logos/technoserve.png', size: 400 },
  { name: 'Niti Aayog', logo: '/logos/niti.png', size: 120 },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', size: 160 },
]

export function RecognitionSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['-0%', '-622%'],
      transition: { x: { repeat: Infinity, repeatType: 'loop', duration: 5, ease: 'linear' } },
    })
  }, [controls])

  return (
    <div className="w-full mt-6">
      <p className="text-stone-800 text-sm sm:text-base lg:text-lg font-semibold text-center">
        Supported By
      </p>

      {/* Scroller */}
      <div className="relative overflow-hidden">
        <motion.div animate={controls} className="flex gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={cn(
                'relative flex-shrink-0 flex items-center justify-center p-4 cursor-pointer group',
                'transition-transform duration-300 hover:scale-105'
              )}
              style={{ width: 200, height: 200 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.size}
                height={partner.size}
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-90 py-1 text-center text-xs sm:text-sm font-semibold text-gray-700 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
