'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface OverlayMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Solar Solutions', href: '#solutions' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Company', href: '#company' },
  { label: 'Careers', href: '#careers' },
]

const secondaryItems = [
  { label: 'Invest', href: '#invest' },
  { label: 'News', href: '#news' },
  { label: 'Press', href: '#press' },
  { label: 'Contact us', href: '#contact' },
]

export function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="h-full flex flex-col p-4 md:p-8 lg:p-16"
          >
            <div className="flex items-center justify-between mb-12 md:mb-16">
              <Image
                src="/logo.svg"
                alt="Maine Electric"
                width={160}
                height={37}
                className="h-8 md:h-9 w-auto brightness-0 invert"
              />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="tap-target text-white hover:text-white/80"
              >
                <X className="h-6 w-6 md:h-8 md:w-8" />
              </Button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row justify-between">
              <nav className="mb-8 md:mb-0">
                <ul className="space-y-4 md:space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "text-3xl md:text-4xl lg:text-5xl font-semibold",
                          "hover:text-maine-electric transition-colors"
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="md:max-w-sm"
              >
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent border-0 border-b border-white/20 rounded-none pl-12 text-white placeholder:text-white/50 focus:border-white/40"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
              <nav>
                <ul className="flex flex-wrap gap-4 md:gap-6">
                  {secondaryItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="text-sm md:text-base hover:text-maine-electric transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <p className="text-sm text-white/50">
                © 2025 Maine Electric
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}