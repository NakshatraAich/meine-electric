'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { newsList } from '@/lib/news-data'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'

export function NewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="section-spacing bg-white">
      <div className="container-padding">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="text-white px-4 pb-2 pt-2 w-fit rounded-lg font-semibold bg-meine-electric text-sm tracking-wider text-center mb-4">
                News & Updates
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Latest from Meine Electric
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Embla Carousel with arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {newsList.map((news, index) => (
                <div
                  key={index}
                  className="mx-3 flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] bg-white rounded-2xl overflow-hidden border flex flex-col"
                >
                  {news.image && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={news.image}
                        alt={news.content}
                        fill
                        className="object-cover origin-top"
                      />
                    </div>
                  )}

                  {/* Card content - flex column with 'Read more' at bottom */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-gray-800 font-medium mb-4">{news.content}</div>

                    <a
                      href={news.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center text-meine-electric font-semibold hover:underline"
                    >
                      Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
