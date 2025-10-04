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
      className="fixed top-0 left-0 w-full z-30 flex justify-center lg:justify-center pt-2 px-0 md:px-10 lg:px-12 xl:px-14"
    >
      <div className="flex items-center justify-between lg:justify-center w-full lg:w-fit lg:gap-24 px-10 md:px-16 bg-white shadow-lg my-2 py-2 rounded-full">
        {/* Logo */}
        <div
          className="relative w-[7rem] md:w-[8rem] h-14 md:h-20 cursor-pointer"
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Image
            src="/logo.png"
            alt="Meine Electric Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-sm font-semibold text-[#222222]">
          <button onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}>
            Technology
          </button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}>
            News
          </button>
        </nav>

        {/* Contact Button */}
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden lg:flex items-center h-[2.25rem] justify-center text-white px-4 py-2 rounded-sm font-semibold bg-meine-electric text-sm tracking-wider leading-none">
          Contact
        </button>



        {/* Mobile Hamburger */}
        {/* <button
          className="lg:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button> */}
        <div></div>
      </div>


      {/* Mobile Menu
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden absolute -z-10 left-0 top-[100] w-full bg-white shadow-lg  overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8 text-base font-semibold text-[#222222]">
              <button onClick={() => { setMenuOpen(false); document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' }) }}>Technology</button>
              <button onClick={() => { setMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</button>
              <button onClick={() => { setMenuOpen(false); document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' }) }}>News</button>
              <button onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.header>
  )
}
