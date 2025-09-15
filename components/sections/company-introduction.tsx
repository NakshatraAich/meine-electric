'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { siteImages } from '@/lib/images-config'

export function CompanyIntroduction() {
  return (
    <section className="section-spacing bg-white pt-20 md:pt-24">
      <div className="container-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="space-y-4 pb-4">
              <p className="text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider">
                Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold max-w-sm">
                <div>Long-Duration Energy Storage</div> 
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p className="max-w-[30rem]">
                Conventional batteries struggle to deliver multi-day backup at scale, leaving critical energy needs unmet.         
              </p>
              <p className="max-w-[30rem]">  
                Iron-air technology changes that—offering reliable, cost-effective, and sustainable energy storage to power a resilient, fossil-free future. 
              </p> 
            </div>
            
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 lg:max-w-lg"
          >
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {siteImages.companyIntroImage ? (
                <Image
                  src='/images/introduction-image.jpg'
                  alt="Introduction"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-maine-electric to-maine-electricDark flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-30">ME</span>
                </div>
              )}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}