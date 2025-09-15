'use client'

import { motion } from 'framer-motion'

export function FontShowcase() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-maine-electric font-medium">Typography Showcase</p>
            <h2 className="font-basiersquarrow">
              Basiersquarrow Font
            </h2>
            <p className="text-lg text-maine-text-subtle max-w-3xl mx-auto">
              A modern, clean typeface that perfectly represents our commitment to innovation and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Font Weights</h3>
              <p className="font-normal">Regular (400): Clean energy for everyone</p>
              <p className="font-medium">Medium (500): Sustainable solutions</p>
              <p className="font-semibold">Semibold (600): Innovation drives us</p>
              <p className="font-bold">Bold (700): MAINE ELECTRIC</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sample Text</h3>
              <p className="text-4xl font-bold text-maine-electric">Aa Bb Cc</p>
              <p className="text-2xl">1234567890</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
              <p className="text-sm uppercase tracking-wider">Maine Electric &copy; 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}