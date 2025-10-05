'use client'

import React from 'react'
import Image from 'next/image'

const partners = [
  { name: 'Irena', logo: '/logos/irena.png', size: { w: 160, h: 80 } },
  { name: 'BITS Pilani', logo: '/logos/bits.svg', size: { w: 100, h: 60 } },
  { name: 'Climate Collective', logo: '/logos/climate.png', size: { w: 140, h: 70 } },
  { name: 'Nasscom', logo: '/logos/nasscom.svg', size: { w: 200, h: 100 } },
  { name: 'ARAI', logo: '/logos/arai.png', size: { w: 180, h: 90 } },
  { name: 'SPTBI', logo: '/logos/sptbi.png', size: { w: 160, h: 80 } },
  { name: 'Anna University', logo: '/logos/anna.svg', size: { w: 100, h: 70 } },
]

export function RecognitionSection() {
  // Duplicate array for seamless loop
  const looped = [...partners, ...partners]

  return (
    <div className="w-full py-8 bg-white overflow-hidden relative">
      <p className="text-center text-stone-800 text-sm sm:text-base lg:text-lg font-semibold mb-6">
        Supported By
      </p>

      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex w-[calc(250px*14)] animate-scroll">
        {looped.map((partner, i) => (
          <div
            key={partner.name + i}
            className="flex-shrink-0 flex items-center justify-center p-4"
            style={{
              width: `${partner.size.w + 50}px`, // +padding for spacing between slides
              height: `${partner.size.h + 40}px`,
            }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.size.w}
              height={partner.size.h}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
