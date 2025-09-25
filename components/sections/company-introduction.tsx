'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function CompanyIntroduction() {
  return (
    <section className="section-spacing bg-white pt-20 md:pt-24 xl:mx-12">
      <div className="container-padding flex flex-col  gap-12 lg:gap-36 lg:flex-row items-start">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:max-w-sm lg:max-w-xl h-full"
        >
          <p className="text-white px-4 py-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider mb-4">
            Company
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-sm">
            About <span className='text-meine-electric'>Meine Electric</span>
          </h2>
          <p className="max-w-lg text-gray-600 text-base sm:text-lg mb-2 font-semibold">
            We are building energy infrastructure of tomorrow &mdash; innovative, sustainable, and resilient.
          </p>
          <p className="max-w-lg text-gray-600 text-base sm:text-lg mb-2">
            At Meine Electric, our passionate team of engineers, creators, and visionaries is united by a shared purpose: to transform the way energy is generated, stored, and delivered. 
          </p>
          <p className="max-w-lg text-gray-600 text-base sm:text-lg">
            Together, we are shaping a future where clean power is reliable, accessible, and empowers communities and industries to thrive.
          </p>
          <div className='mt-12 text-xl font-semibold'>
            Contact Us at <span className='text-meine-electric underline font-bold'>support@meineelectric.com</span>
          </div>
        </motion.div>

        {/* Right Image Collage */}
        <div
          className="w-full lg:w-2/3 flex flex-col sm:grid grid-cols-3 grid-rows-2 gap-2 h-[1000px] lg:h-[650px]"
        >
          <div className="flex-1 relative col-span-2 rounded-sm overflow-hidden">
            <Image
              src="/images/comp1.jpeg"
              alt="Collage image 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 origin-top relative col-span-1 rounded-sm overflow-hidden">
            <Image
              src="/images/comp2.webp"
              alt="Collage image 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 relative col-span-1 rounded-sm overflow-hidden">
            <Image
              src="/images/comp3.jpeg"
              alt="Collage image 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 relative col-span-2 rounded-sm overflow-hidden">
            <Image
              src="/images/comp4.jpeg"
              alt="Collage image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
