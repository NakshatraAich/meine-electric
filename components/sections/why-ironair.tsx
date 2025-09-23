'use client'

import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-3 text-left group"
      >
        <span className="font-semibold text-meine-electric">{title}</span>
        <ChevronRight
          className={`h-5 w-5 text-meine-electric transition-transform duration-300 ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden text-gray-600"
          >
            <div className="py-2">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ✅ Correct / PartialCorrect as inline span
const Correct = () => (
  <span className="p-4 inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white font-bold text-lg">
    &#10003;
  </span>
)

const PartialCorrect = () => (
  <span className="p-4 inline-flex items-center justify-center w-6 h-6 border-2 border-dotted border-green-500 bg-transparent rounded-full text-green-500 font-bold text-lg">
    &#10003;
  </span>
)

export function WhyIronair() {
  return (
    <section className="section-spacing bg-white pt-20 md:pt-24">
      <div className="container-padding space-y-20">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="xl:max-w-sm lg:max-w-xs w-full"
            >
                <p className="text-white px-3 py-1 w-fit rounded-md font-semibold bg-meine-electric text-sm tracking-wide mb-3">
                Reasoning
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">
                Why choose <span className="text-meine-electric">Iron-Air</span> for the future grid?
                </h2>
                <div className='space-y-2 mb-6'>
                <p className="text-gray-600 text-lg max-w-lg">
                    Iron-air batteries provide affordable, multi-day energy storage using simple, safe, and abundant materials.
                </p>
                <p className="text-gray-600 text-lg max-w-lg">
                    They keep the grid reliable during renewable lulls and accelerate the shift to a fossil-free future.
                </p>
                </div>

                {/* Accordions */}
                <div className="space-y-2">
                <Accordion
                    title="Affordable Storage"
                    content="Iron-air batteries deliver long-duration storage at a fraction of the cost of lithium-ion solutions."
                />
                <Accordion
                    title="Safe & Sustainable"
                    content="They use earth-abundant, non-toxic materials ensuring minimal environmental impact."
                />
                <Accordion
                    title="Grid Reliability"
                    content="Multi-day storage ensures grid stability during periods of low renewable generation."
                />
                </div>
            </motion.div>

            <div className="flex-1 w-full relative aspect-[3/4] lg:aspect-[4/3]">
            <Image
                src="/images/introduction-image.jpg"
                alt="Iron-Air Technology"
                fill
                className="object-cover rounded-sm"
            />

            {/* Bottom-left animated boxes */}
            <motion.div
                className="hidden md:flex flex-row gap-2 absolute bottom-4 right-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                    },
                }}
                >
                {['Box 1', 'Box 2', 'Box 3'].map((text, idx) => (
                    <motion.div
                    key={idx}
                    className="bg-meine-electric aspect-square text-white px-12 py-12 rounded shadow-md flex items-center justify-center"
                    variants={{
                        hidden: { opacity: 0, y: 20, scale: 1 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                    }}
                    >
                    {text}
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </div>

        {/* Comparison Table with Legend */}
        <div className='flex flex-col mt-10 gap-6'>
            <div className='font-semibold text-sm text-white w-fit px-4 py-2 bg-[#626262]/30 rounded-lg'>Iron-Air V/S Other Energy Technologies</div>
            <div className="flex lg:flex-row flex-col gap-8 items-start">
                {/* Table */}
                <div className="border-2 border-meine-text-subtle/30 rounded-sm overflow-x-auto w-full">
                    <table className="min-w-full bg-white border-collapse text-center sm:text-base text-xs">
                    <thead>
                        <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Flexibility<br/>duration</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Power system parameter</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Redox Flow Batteries</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Zinc Air Batteries</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Lead Acid Batteries</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Lithium Ion Batteries</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Pumped Hydro Store</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262] bg-meine-electric">Iron Air Batteries</th>
                        <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Net Metering</th>
                        </tr>
                    </thead>
                    <tbody className="text-center py-8">
                        <tr className="border-b border-[#626262]">
                        <td rowSpan={2} className="px-4 py-2 text-left font-semibold"></td>
                        <td className="px-4 py-2 text-left font-bold">LCOS<br/>($/kWh)</td>
                        <td>0.25</td>
                        <td>0.22</td>
                        <td>0.19</td>
                        <td>0.15</td>
                        <td>0.09</td>
                        <td className="bg-meine-electric">0.08</td>
                        <td>0.05</td>
                        </tr>
                        <tr className="border-b border-[#626262]">
                        <td className="px-4 py-2 text-left">Commercial grid level readiness</td>
                        <td>Early Commercial</td>
                        <td>Emerging</td>
                        <td>Commercial</td>
                        <td>Commercial</td>
                        <td>Commercial</td>
                        <td className="bg-meine-electric">Early Commercial</td>
                        <td>Commercial</td>
                        </tr>

                        {/* Intraday */}
                        <tr className="border-b border-[#626262]">
                        <td className="px-4 py-2 text-left font-bold">Intraday</td>
                        <td className="px-4 py-2 text-left">Intermittent daily generation</td>
                        <td><Correct /></td>
                        <td><Correct /></td>
                        <td><PartialCorrect /></td>
                        <td><Correct /></td>
                        <td><Correct /></td>
                        <td className="bg-meine-electric"><PartialCorrect /></td>
                        <td><Correct /></td>
                        </tr>

                        {/* Multiday */}
                        <tr className="border-b border-[#626262]">
                        <td rowSpan={2} className="px-4 py-2 text-left font-bold">Multiday, multiweek</td>
                        <td className="px-4 py-2 text-left">Multiday<br/>imbalances</td>
                        <td><PartialCorrect /></td>
                        <td><PartialCorrect /></td>
                        <td></td>
                        <td><PartialCorrect /></td>
                        <td><PartialCorrect /></td>
                        <td className="bg-meine-electric"><Correct /></td>
                        <td></td>
                        </tr>
                        <tr className="border-b border-[#626262]">
                        <td className="px-4 py-2 text-left">Grid<br/>congestion</td>
                        <td><Correct /></td>
                        <td><PartialCorrect /></td>
                        <td></td>
                        <td><PartialCorrect /></td>
                        <td><PartialCorrect /></td>
                        <td className="bg-meine-electric"><Correct /></td>
                        <td><PartialCorrect /></td>
                        </tr>

                        {/* Seasonal duration */}
                        <tr className="border-b border-[#626262]">
                        <td rowSpan={2} className="px-4 py-2 text-left font-bold">Seasonal<br/>duration</td>
                        <td className="px-4 py-2 text-left">Seasonal<br/>unbalances</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Correct /></td>
                        <td className="bg-meine-electric"><Correct /></td>
                        <td></td>
                        </tr>
                        <tr className="">
                        <td className="px-4 py-2 text-left">Extreme weather<br/>events</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><PartialCorrect /></td>
                        <td className="bg-meine-electric"><Correct /></td>
                        <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-gray-800">Legend</h3>
                <div className="flex items-center gap-2">
                    <Correct />
                    <span className="text-gray-600">Fully Suitable</span>
                </div>
                <div className="flex items-center gap-2">
                    <PartialCorrect />
                    <span className="text-gray-600">Partially Suitable</span>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
