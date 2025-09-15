'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof formSchema>

export function SubscriptionSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Subscribing email:', data.email)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl leading-tight">
              Join our mission of clean mobility
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl leading-snug">
              Subscribe to our mailing list to help turn the wheels of change
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className={cn(
                "flex flex-col sm:flex-row gap-3 sm:gap-0",
                "sm:p-1 sm:bg-white sm:rounded-full",
                "sm:border sm:border-maine-border-light",
                "sm:focus-within:border-maine-electric transition-colors"
              )}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  className={cn(
                    "flex-1 h-12 sm:h-auto",
                    "border border-maine-border-light sm:border-0",
                    "rounded-full sm:rounded-l-full sm:rounded-r-none",
                    "focus-visible:ring-1 sm:focus-visible:ring-0",
                    "focus-visible:border-maine-electric sm:focus-visible:border-transparent"
                  )}
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto shrink-0 h-12 sm:h-auto rounded-full"
                  size="lg"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </Button>
              </div>
              
              {errors.email && (
                <p className="text-sm text-red-500 px-4">
                  {errors.email.message}
                </p>
              )}
              
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-green-600 px-4"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>
            
            <p className="text-xs md:text-sm text-maine-text-subtle px-2 sm:px-4">
              By signing up to the newsletter I agree with Maine Electric processing my 
              personal data in line with the{' '}
              <a href="/privacy" className="underline hover:text-black">
                privacy policy
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}