'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { siteImages } from '@/lib/images-config'

export function Header() {
  const { scrollY } = useScroll()
  const lastScrollY = useMotionValue(0)
  const scrollDirection = useMotionValue(0)
  
  // Spring configuration for ultra-smooth animation
  const springConfig = { stiffness: 300, damping: 30, mass: 0.8 }
  const headerY = useSpring(0, springConfig)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (current) => {
      const previous = lastScrollY.get()
      const halfPageHeight = document.documentElement.scrollHeight / 2
      const isScrollingDown = current > previous
      const isPastHalfway = current > halfPageHeight
      
      // Update scroll direction
      scrollDirection.set(isScrollingDown ? 1 : -1)
      
      // Determine if header should be hidden
      if (isPastHalfway && isScrollingDown) {
        headerY.set(-100)
      } else if (!isPastHalfway || !isScrollingDown) {
        headerY.set(0)
      }
      
      lastScrollY.set(current)
    })

    return () => unsubscribe()
  }, [scrollY, lastScrollY, scrollDirection, headerY])

  // Add opacity transform based on scroll position
  const headerOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0.97]
  )

  return (
    <motion.header 
      style={{ 
        y: headerY,
        opacity: headerOpacity
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg"
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={siteImages.logo}
              alt="Maine Electric"
              width={140}
              height={32}
              className="h-8 sm:h-8 md:h-12 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </motion.header>
  )
}