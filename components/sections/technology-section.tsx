'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const steps = [
  { 
    text: "Iron, one of the most abundant and sustainable metals on Earth, forms the foundation of our breakthrough energy technology. By starting with a simple, natural material, we unlock scalable and eco-friendly power solutions.", 
    img: "/images/dri.jpg" 
  },
  { 
    text: "Reliable power for everyday needs from homes to industries. Our system ensures a consistent and clean energy supply, helping reduce dependence on fossil fuels while supporting a greener future.", 
    img: "/images/transformer.jpg" 
  },
  { 
    text: "As the battery discharges, pure iron naturally transforms into rust. This simple yet powerful reaction drives the flow of energy, making the process both efficient and environmentally responsible.", 
    img: "/images/rust.jpeg" 
  },
  { 
    text: "When it's time to recharge, our proprietary system rapidly converts rust back into usable iron. This closed-loop cycle enables quick, efficient, and sustainable recharging - ready to power the next cycle of clean energy (Image is only for representational purpose)", 
    img: "/images/recharge.jpg" 
  },
]

export function TechnologySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='container-padding'>
      <div className="text-left mb-8 flex flex-col items-start">
        <p className="text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider mb-4">
          Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:max-w-3xl">
          Inside the technology that defines us
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl">
          At the core of our innovation is simplicity — using natural materials for dependable energy storage that powers a resilient, sustainable future.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-[14rem] md:h-[36rem] rounded-2xl bg-white shadow-lg flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={step.img}
                alt={`Step ${i + 1}`}
                fill
                className="object-cover rounded-2xl"
              />

              {/* Gradient overlay on active or hover */}
              {(activeIndex === i) && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              )}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Animated border (active only) */}
              {activeIndex === i && (
                <motion.div
                  key={`border-${i}`}
                  initial={{ clipPath: 'inset(100% 0 0 0 round 0rem)' }}
                  animate={{ clipPath: 'inset(0 0 0 0 round 0rem)' }}
                  transition={{ 
                    duration: 7, 
                    ease: 'easeInOut', 
                    repeat: Infinity, 
                    repeatType: 'loop' 
                  }}
                  className="absolute inset-0 rounded-2xl border-4 border-meine-electric pointer-events-none z-20"
                />
              )}

              {/* Text overlay - visible on active or hover */}
              {(activeIndex === i) && (
                <motion.div
                  key={`text-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute bottom-4 px-4 text-white font-medium text-xs z-30"
                >
                  {step.text}
                </motion.div>
              )}
              <div className="absolute bottom-4 px-4 text-white font-medium text-xs z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                {step.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
