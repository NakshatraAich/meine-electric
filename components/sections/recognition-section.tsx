'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const partners = [
  { name: 'Irena', logo: '/logos/irena.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Climate Collective', logo: '/logos/climate.webp', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Shell', logo: '/logos/shell.png', size: { sm: 80, md: 140, lg: 170 } },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Baker Hughes', logo: '/logos/baker.png', size: { sm: 80, md: 140, lg: 180 } },
  { name: 'ARAI', logo: '/logos/arai.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'SPTBI', logo: '/logos/sptbi.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Anna University', logo: '/logos/anna.svg', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Technoserve', logo: '/logos/technoserve.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Niti Aayog', logo: '/logos/niti.png', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', size: { sm: 80, md: 140, lg: 160 } },
  // duplicates for infinite scroll
  { name: 'Irena', logo: '/logos/irena.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Climate Collective', logo: '/logos/climate.webp', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Shell', logo: '/logos/shell.png', size: { sm: 80, md: 140, lg: 170 } },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Baker Hughes', logo: '/logos/baker.png', size: { sm: 80, md: 140, lg: 180 } },
  { name: 'ARAI', logo: '/logos/arai.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'SPTBI', logo: '/logos/sptbi.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Anna University', logo: '/logos/anna.svg', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Technoserve', logo: '/logos/technoserve.png', size: { sm: 80, md: 140, lg: 160 } },
  { name: 'Niti Aayog', logo: '/logos/niti.png', size: { sm: 80, md: 90, lg: 100 } },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', size: { sm: 80, md: 140, lg: 160 } },
]

export function RecognitionSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['0%', '-485%'],
      transition: { x: { repeat: Infinity, repeatType: 'loop', duration: 10, ease: 'linear' } },
    })
  }, [controls])

  return (
    <div className="w-full mt-6">
      <p className="text-stone-800 text-sm sm:text-base lg:text-lg font-semibold text-center mb-8">
        Supported By
      </p>

      <div className="relative overflow-hidden">
        <motion.div animate={controls} className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={cn(
                'relative flex-shrink-0 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105',
                'w-[var(--sm)] h-[var(--sm)] md:w-[var(--md)] md:h-[var(--md)] lg:w-[var(--lg)] lg:h-[var(--lg)]'
              )}
                style={
                  {
                    '--sm-size': `${partner.size.sm}px`,
                    '--md-size': `${partner.size.md}px`,
                    '--lg-size': `${partner.size.lg}px`,
                  } as React.CSSProperties
                }
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.size.lg} // fallback
                height={partner.size.lg} // fallback
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-1 text-center text-xs sm:text-sm font-semibold text-gray-700 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
