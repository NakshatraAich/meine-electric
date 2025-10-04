"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"

const IconFull = () => <CheckCircle className="w-6 h-6 mx-auto text-meine-electric" />
const IconPartial = () => <CheckCircle className="w-6 h-6 mx-auto text-gray-400" />
const IconNone = () => <div />

export function Table() {
  return (
    <section className="container-padding section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">
          Comparison of present LDES solutions?
        </h2>

        <div className="space-y-2 mb-6">
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col-reverse gap-8 justify-center items-center w-full">
              <div className="rounded-sm overflow-x-auto w-full">
                <table className="min-w-full text-center sm:text-base text-xs relative border-separate">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-bold text-[#222222] text-lg"></th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Iron Air Batteries</th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Redox Flow Batteries</th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Zinc Air Batteries</th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Lead Acid Batteries</th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Lithium Ion Batteries</th>
                      <th className="px-4 py-2 pb-5 font-bold text-[#222222] text-xs">Pumped Hydro Store</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* LCOS Row */}
                    <tr className="border-spacing-x-6">
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-bold bg-stone-300 rounded-t-xl">
                        <div>LCOS ($/kWh)</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Levelized Cost of Storage - the average lifetime cost of storing and delivering one kWh of energy.
                        </div>
                      </td>

                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-meine-electric text-lg">
                          0.08
                        </div>
                      </td>
                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-stone-400 text-lg">
                          0.25
                        </div>
                      </td>
                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-stone-400 text-lg">
                          0.22
                        </div>
                      </td>
                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-stone-400 text-lg">
                          0.19
                        </div>
                      </td>
                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-stone-400 text-lg">
                          0.15
                        </div>
                      </td>
                      <td className="px-4 py-2 font-semibold text-white">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-stone-400 text-lg">
                          0.09
                        </div>
                      </td>
                    </tr>

                    {/* Intermittent daily generation */}
                    <tr>
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-semibold bg-stone-300">
                        <div>Intermittent daily generation</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Ability to balance daily fluctuations from renewable sources like solar and wind.
                        </div>
                      </td>
                      <td><IconPartial /></td>
                      <td><IconFull /></td>
                      <td><IconFull /></td>
                      <td><IconPartial /></td>
                      <td><IconFull /></td>
                      <td><IconFull /></td>
                    </tr>

                    {/* Multiday imbalances */}
                    <tr>
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-semibold bg-stone-300">
                        <div>Multiday imbalances</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Capability to supply power over multiple days when generation is lower than demand.
                        </div>
                      </td>
                      <td><IconFull /></td>
                      <td><IconPartial /></td>
                      <td><IconPartial /></td>
                      <td><IconNone /></td>
                      <td><IconPartial /></td>
                      <td><IconPartial /></td>
                    </tr>

                    {/* Grid congestion */}
                    <tr>
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-semibold bg-stone-300">
                        <div>Grid congestion</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Effectiveness in reducing transmission bottlenecks and shifting energy delivery across the grid.
                        </div>
                      </td>
                      <td><IconFull /></td>
                      <td><IconFull /></td>
                      <td><IconPartial /></td>
                      <td><IconNone /></td>
                      <td><IconPartial /></td>
                      <td><IconPartial /></td>
                    </tr>

                    {/* Seasonal unbalances */}
                    <tr>
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-semibold bg-stone-300">
                        <div>Seasonal unbalances</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Ability to store excess energy from one season and supply it in another (e.g., summer to winter).
                        </div>
                      </td>
                      <td><IconFull /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconFull /></td>
                    </tr>

                    {/* Extreme weather events */}
                    <tr>
                      <td className="pr-8 pl-2 py-3 text-left text-lg font-semibold bg-stone-300 rounded-b-xl shadow-md">
                        <div>Extreme weather events</div>
                        <div className="hidden sm:block text-sm font-normal text-[#222222]/90 max-w-xs">
                          Capability to provide backup power during rare but prolonged grid disruptions or disasters.
                        </div>
                      </td>
                      <td><IconFull /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconNone /></td>
                      <td><IconPartial /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
