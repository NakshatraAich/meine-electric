'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const partners = [
  { name: 'Irena', logo: '/logos/irena.png', sizes: { sm: 120, md: 120, lg: 180 } },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', sizes: { sm: 120, md: 80, lg: 30 } },
  { name: 'Climate Collective', logo: '/logos/climate.webp', sizes: { sm: 120, md: 80, lg: 100 } },
  { name: 'Shell', logo: '/logos/shell.png', sizes: { sm: 120, md: 80, lg: 100 } },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', sizes: { sm: 120, md: 120, lg: 180 } },
  { name: 'Baker Hughes', logo: '/logos/baker.png', sizes: { sm: 120, md: 120, lg: 180 } },
  { name: 'ARAI', logo: '/logos/arai.png', sizes: { sm: 120, md: 120, lg: 1800 } },
  { name: 'SPTBI', logo: '/logos/sptbi.png', sizes: { sm: 120, md: 120, lg: 180 } },
  { name: 'Anna University', logo: '/logos/anna.svg', sizes: { sm: 120, md: 80, lg: 100 } },
  { name: 'Technoserve', logo: '/logos/technoserve.png', sizes: { sm: 120, md: 120, lg: 180 } },
  { name: 'Niti Aayog', logo: '/logos/niti.png', sizes: { sm: 120, md: 80, lg: 100 } },
  { name: 'Dept. of Science and Tech.', logo: '/logos/dst.svg', sizes: { sm: 120, md: 80, lg: 20 } },
]

export function RecognitionSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [
      AutoScroll({
        speed: 1, // pixels per frame, adjust slower/faster
        playOnInit: true,
        stopOnInteraction: false,
      }),
    ]
  )

  const [isHovered, setIsHovered] = useState(false)

  // Pause/resume on hover
  useEffect(() => {
    if (!emblaApi) return
    const autoScroll = emblaApi.plugins().autoScroll
    if (!autoScroll) return

    if (isHovered) autoScroll.stop()
    else autoScroll.play()
  }, [isHovered, emblaApi])

  return (
    <div className="w-full mt-6">
      <p className="text-stone-800 text-sm sm:text-base lg:text-lg font-semibold text-center">
        Supported By
      </p>

      <div
        className="embla relative overflow-hidden py-4"
        ref={emblaRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="embla__container h-fit flex gap-4 md:gap-6 lg:gap-6 flex-row items-center">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={partner.name + idx}
              className="h-fit embla__slide flex-shrink-0 flex items-center justify-center p-3 sm:p-4 cursor-pointer group transition-transform duration-300 hover:scale-105 relative"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.sizes.sm}
                height={partner.sizes.sm}
                className="aspect-[2/1] object-contain"
                style={{
                  '--sm': `${partner.sizes.sm}px`,
                  '--md': `${partner.sizes.md}px`,
                  '--lg': `${partner.sizes.lg}px`,
                  width: 'var(--sm)',
                  height: 'auto',
                } as React.CSSProperties}
              />
              <div className="absolute top-0 right-0 bg-white text-black text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 z-10 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-1/2 -translate-y-1/2">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
