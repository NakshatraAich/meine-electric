'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-3 text-left group"
      >
        <span className="font-semibold text-base lg:text-lg text-meine-electric">{title}</span>
        <ChevronRight
          className={`h-5 w-5 text-meine-electric text-base lg:text-lg transition-transform duration-300 ${
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
            <div className="py-2 text-base lg:text-sm ">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Correct = () => (
  <span className="p-2 inline-flex items-center justify-center w-6 h-6 bg-meine-electric rounded-full text-white font-bold text-xs">
    &#10003;
  </span>
)

const PartialCorrect = () => (
  <span className="p-2 inline-flex items-center justify-center w-6 h-6 border-2 border-dotted border-meine-electric bg-transparent rounded-full text-meine-electric font-bold text-xs">
    &#10003;
  </span>
)

export function WhyIronair() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 = half speed, 2 = double speed
    }
  }, []);

  const boxIcons = [
    { src: '/images/cost.png', alt: 'Battery', text: 'Extremely Cost Effective'},
    { src: '/images/clock.png', alt: 'Power', text: 'Can Store Electricity for Seasonal Durations' },
    { src: '/images/scale.png', alt: 'Renewable', text: 'Scalable Without Impacting Nature' },
    { src: '/images/safety.png', alt: 'Safety', text: 'Safe Without Fire Risk' },
  ];

  return (
    <section className="section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <div className="container-padding space-y-20">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-42">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xl:max-w-sm lg:max-w-xs w-full"
          >
            <p className="text-white px-3 py-1 w-fit rounded-md font-semibold border-meine-electric bg-meine-electric border-2 text-sm tracking-wide mb-3">
              Reasoning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">
              Why choose <span className="text-meine-electric">Iron-Air</span> for the future grid?
            </h2>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                Iron-air batteries provide affordable, multi-day energy storage using simple, safe, and abundant materials.
              </p>
              <p className="text-gray-600 text-base sm:text-lg max-w-lg">
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

          {/* Video Section */}
          <div className="flex-1 w-full relative aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-sm group">
            <video
              src="/vid.mkv"
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />

            {/* Tooltip for hovered box */}
            {hoveredBox && (
              <span className="absolute top-2 text-white text-sm lg:text-lg right-2 bg-meine-electric font-semibold px-2 py-1 rounded shadow-md z-20 transition-opacity duration-200 pointer-events-none">
                {hoveredBox}
              </span>
            )}

            {/* Bottom-left animated boxes */}
            <motion.div
              className="flex flex-row gap-2 absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {boxIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative border-meine-electric border-2 aspect-square bg-meine-electric rounded flex items-center justify-center p-2"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 1 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                  }}
                  onMouseEnter={() => setHoveredBox(item.text)}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  <img src={item.src} alt={item.alt} className="w-12 h-12 sm:w-20 sm:h-20 object-contain" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Comparison Table with Legend */}
        <div className="flex flex-col items-center gap-6 lg:px-20">
          <div className="font-bold text-sm text-[#222222] w-fit px-4 py-2 bg-[#626262]/30 rounded-lg">
            Iron-Air V/S Other Energy Technologies
          </div>

          <div className="flex flex-col-reverse gap-8 justify-center items-center w-full">
            <div className="shadow-lg rounded-sm overflow-x-auto w-full">
              <table className="min-w-full bg-stone-100/50 border-collapse text-center sm:text-base text-xs relative">
                <colgroup>
                  <col />
                  <col />
                  <col className="bg-meine-electric/10 border-x-2 border-meine-electric" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>

                <thead>
                  <tr className="bg-stone-100/50 border-b-2 border-[#626262]">
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">
                      Flexibility<br />duration
                    </th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">
                      Power system parameter
                    </th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-2 border-meine-electric">
                      Iron Air Batteries
                    </th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Redox Flow Batteries</th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Zinc Air Batteries</th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Lead Acid Batteries</th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Lithium Ion Batteries</th>
                    <th className="px-4 py-2 text-[#222222] font-bold border-b-2 border-[#626262]">Pumped Hydro Store</th>
                  </tr>
                </thead>

                <tbody className="text-center py-8">
                  <tr>
                    <td rowSpan={2} className="px-4 py-2 text-left font-semibold"></td>
                    <td className="px-4 py-2 text-left font-bold">LCOS<br />($/kWh)</td>
                    <td className="border-meine-electric border-x-2">0.08</td>
                    <td>0.25</td>
                    <td>0.22</td>
                    <td>0.19</td>
                    <td>0.15</td>
                    <td>0.09</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-left">Commercial grid level readiness</td>
                    <td className="border-meine-electric border-x-2">Early Commercial</td>
                    <td>Early Commercial</td>
                    <td>Emerging</td>
                    <td>Commercial</td>
                    <td>Commercial</td>
                    <td>Commercial</td>
                  </tr>

                  {/* Intraday */}
                  <tr>
                    <td className="px-4 py-2 text-left font-bold">Intraday</td>
                    <td className="px-4 py-2 text-left">Intermittent daily generation</td>
                    <td className="border-meine-electric border-x-2"><PartialCorrect /></td>
                    <td><Correct /></td>
                    <td><Correct /></td>
                    <td><PartialCorrect /></td>
                    <td><Correct /></td>
                    <td><Correct /></td>
                  </tr>

                  {/* Multiday */}
                  <tr>
                    <td rowSpan={2} className="px-4 py-2 text-left font-bold">Multiday, multiweek</td>
                    <td className="px-4 py-2 text-left">Multiday<br />imbalances</td>
                    <td className="border-meine-electric border-x-2"><Correct /></td>
                    <td><PartialCorrect /></td>
                    <td><PartialCorrect /></td>
                    <td></td>
                    <td><PartialCorrect /></td>
                    <td><PartialCorrect /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-left">Grid<br />congestion</td>
                    <td className="border-meine-electric border-x-2"><Correct /></td>
                    <td><Correct /></td>
                    <td><PartialCorrect /></td>
                    <td></td>
                    <td><PartialCorrect /></td>
                    <td><PartialCorrect /></td>
                  </tr>

                  {/* Seasonal */}
                  <tr>
                    <td rowSpan={2} className="px-4 py-2 text-left font-bold">Seasonal<br />duration</td>
                    <td className="px-4 py-2 text-left">Seasonal<br />unbalances</td>
                    <td className="border-meine-electric border-x-2 border-b-0"><Correct /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Correct /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-left">Extreme weather<br />events</td>
                    <td className="border-meine-electric border-x-2 border-t-0 border-b-2"><Correct /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><PartialCorrect /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex flex-row gap-4 text-xs">
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
