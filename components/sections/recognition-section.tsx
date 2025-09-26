'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

const partners = [
  { name: 'Irena', logo: '/logos/irena.png', sizes: { sm: 100, md: 120, lg: 180 } },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', sizes: { sm: 40, md: 80, lg: 100 } },
  { name: 'Climate Collective', logo: '/logos/climate.webp', sizes: { sm: 80, md: 80, lg: 100 } },
  { name: 'Shell', logo: '/logos/shell.png', sizes: { sm: 70, md: 80, lg: 100 } },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', sizes: { sm: 60, md: 120, lg: 180 } },
  { name: 'Baker Hughes', logo: '/logos/baker.png', sizes: { sm: 80, md: 120, lg: 180 } },
  { name: 'ARAI', logo: '/logos/arai.png', sizes: { sm: 80, md: 120, lg: 180 } },
  { name: 'SPTBI', logo: '/logos/sptbi.png', sizes: { sm: 60, md: 120, lg: 180 } },
  { name: 'Anna University', logo: '/logos/anna.svg', sizes: { sm: 30, md: 80, lg: 100 } },
  { name: 'Technoserve', logo: '/logos/technoserve.png', sizes: { sm: 80, md: 120, lg: 180 } },
  { name: 'Niti Aayog', logo: '/logos/niti.png', sizes: { sm: 50, md: 80, lg: 100 } },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', sizes: { sm: 50, md: 80, lg: 100 } },
]

export function RecognitionSection() {
  return (
    <div className="w-full mt-6">
      <p className="text-stone-800 text-sm sm:text-base lg:text-lg font-semibold text-center">
        Supported By
      </p>

      <div className="relative overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50.3%);
            }
          }

          .scroll-container {
            animation: scroll 30s linear infinite;
            width: fit-content;
          }

          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="scroll-container flex gap-4 sm:gap-6 md:gap-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={cn(
                'relative flex-shrink-0 flex items-center justify-center p-3 sm:p-4 cursor-pointer group transition-transform duration-300 hover:scale-105'
              )}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.sizes.sm}   // small screen
                height={partner.sizes.sm}
                className="sm:w-[var(--sm)] sm:h-[var(--sm)] md:w-[var(--md)] md:h-[var(--md)] lg:w-[var(--lg)] lg:h-[var(--lg)] object-contain"
                style={{
                  '--sm': `${partner.sizes.sm}px`,
                  '--md': `${partner.sizes.md}px`,
                  '--lg': `${partner.sizes.lg}px`,
                } as React.CSSProperties}
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-1 text-center text-xs sm:text-sm font-semibold text-gray-700 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
