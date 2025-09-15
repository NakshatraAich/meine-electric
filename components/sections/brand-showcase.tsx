'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function BrandShowcase() {
  return (
    <section className={cn(
      "section-spacing bg-maine-electric",
      "overflow-hidden relative"
    )}>
      <div className="container-padding">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-black">
              Powered by Innovation
            </h2>
            <p className="text-black/80 text-lg md:text-xl max-w-3xl mx-auto">
              Maine Electric is at the forefront of sustainable energy solutions, 
              combining cutting-edge technology with environmental responsibility.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-8 flex-wrap"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Image
                src="/maine-electric-full-logo.png"
                alt="Maine Electric Full Logo"
                width={300}
                height={69}
                className="w-auto h-16 md:h-20"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-black mb-2">100%</h3>
              <p className="text-black/80">Clean Energy</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-black mb-2">50k+</h3>
              <p className="text-black/80">Vehicles Powered</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-black mb-2">24/7</h3>
              <p className="text-black/80">Solar Charging</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}