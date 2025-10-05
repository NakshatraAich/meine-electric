"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const IconFull = () => <CheckCircle className="w-8 h-8 mx-auto text-meine-electric" />
const IconPartial = () => <CheckCircle className="w-7 h-7 mx-auto text-gray-400" />
const IconNone = () => <div />

export function Table() {
  return (
    <section className="container-padding section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <motion.div
        className="w-full text-center flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold max-w-md mb-12">
          Technology Comparison
        </h2>

        <div className="w-full overflow-x-auto lg:overflow-hidden">
          <table className="w-full table-auto text-center sm:text-base text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-2 text-left font-bold text-[#222222] text-lg"></th>
                <th className="px-3 py-2 pb-5 font-bold text-[#222222] text-xl border-l border-gray-300">
                  Iron Air<br />Batteries
                </th>
                <th className="px-3 py-2 pb-5 font-semibold text-[#222222] text-sm border-l border-gray-300">
                  Pumped Hydro<br />Storage
                </th>
                <th className="px-3 py-2 pb-5 font-semibold text-[#222222] text-sm border-l border-gray-300">
                  Lithium Ion<br />Batteries
                </th>
                <th className="px-3 py-2 pb-5 font-semibold text-[#222222] text-sm border-l border-gray-300">
                  Lead Acid<br />Batteries
                </th>
                <th className="px-3 py-2 pb-5 font-semibold text-[#222222] text-sm border-l border-gray-300">
                  Zinc Air<br />Batteries
                </th>
                <th className="px-3 py-2 pb-5 font-semibold text-[#222222] text-sm border-l border-gray-300">
                  Redox Flow<br />Batteries
                </th>
              </tr>
            </thead>

            <tbody>
              {/* LCOS Row */}
              <tr>
                <td className="py-[3rem] p-2 text-lg font-bold text-center whitespace-nowrap">
                  LCOS ($/kWh)
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#d9ed01] to-meine-electric text-xl">
                    0.08
                  </div>
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg">
                    0.09
                  </div>
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg">
                    0.15
                  </div>
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg">
                    0.19
                  </div>
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg">
                    0.22
                  </div>
                </td>
                <td className="py-1 font-semibold text-white border-l border-gray-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg">
                    0.25
                  </div>
                </td>
              </tr>

              {/* Intraday Balancing */}
              <tr>
                <td className="py-4 text-center font-medium">Intraday Balancing</td>
                <td className="border-l border-gray-300"><IconFull /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
              </tr>

              {/* Multiday Balancing */}
              <tr>
                <td className="py-4 text-center font-medium">Multiday Balancing</td>
                <td className="border-l border-gray-300"><IconFull /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
              </tr>

              {/* Seasonal Balancing */}
              <tr>
                <td className="py-4 text-center font-medium">Seasonal Balancing</td>
                <td className="border-l border-gray-300"><IconFull /></td>
                <td className="border-l border-gray-300"><IconPartial /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
              </tr>

              {/* Extreme Weather Events */}
              <tr>
                <td className="py-4 text-center font-medium rounded-b-lg">Extreme Weather Events</td>
                <td className="border-l border-gray-300"><IconFull /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
                <td className="border-l border-gray-300"><IconNone /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
