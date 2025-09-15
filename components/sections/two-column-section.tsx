'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TwoColumnSectionProps {
  title: string
  description: string
  linkText?: string
  linkHref?: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  className?: string
}

export function TwoColumnSection({
  title,
  description,
  linkText,
  linkHref = '#',
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  className,
}: TwoColumnSectionProps) {
  const isImageLeft = imagePosition === 'left'
  
  return (
    <section className={cn('section-spacing', className)}>
      <div className="container-padding">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
          isImageLeft && "lg:flex-row-reverse"
        )}>
          <motion.div 
            initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "space-y-4 md:space-y-6 lg:col-span-5 mt-4",
              isImageLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-maine-text-subtle text-base lg:text-lg">
              {description}
            </p>
            {linkText && (
              <a
                href={linkHref}
                className={cn(
                  "inline-flex items-center gap-2 group",
                  "text-base font-medium hover:text-maine-electric transition-colors"
                )}
              >
                {linkText}
                <ArrowUpRight className={cn(
                  "h-4 w-4 text-maine-electric",
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                )} />
              </a>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden rounded-xl lg:col-span-7",
              isImageLeft ? "lg:order-1" : "lg:order-2"
            )}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-maine-electric/20 to-maine-electric/30 flex items-center justify-center">
                <span className="text-maine-electric text-6xl font-bold opacity-30">ME</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}