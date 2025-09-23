'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [menuOpen, setMenuOpen] = useState(false)
  const y = useSpring(0, { stiffness: 300, damping: 50 })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY

      if (Math.abs(delta) < 50) return
      setDirection(delta > 0 ? 'down' : 'up')
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    y.set(direction === 'down' ? -150 : 0)
  }, [direction, y])

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  }

  return (
    <motion.header
      style={{ y }}
      className="fixed top-0 left-0 w-full z-30 flex justify-center lg:justify-start px-2 md:px-10 lg:px-12 xl:px-14"
    >
      <div className="flex items-center justify-between lg:justify-start lg:w-fit lg:gap-20 w-full max-w-[1500px] bg-white shadow-lg my-5 px-6 py-1 rounded-sm">
        {/* Logo */}
        <div className="relative w-[10rem] lg:w-[14rem] h-20 mx-0">
          <Image
            src="/logo.svg"
            alt="Meine Electric Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-sm font-semibold text-[#222222] ml-auto">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-sm font-semibold text-[#222222]">
              <button onClick={() => setMenuOpen(false)}>Home</button>
              <button onClick={() => setMenuOpen(false)}>About</button>
              <button onClick={() => setMenuOpen(false)}>Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
