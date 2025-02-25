"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FloatProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  duration?: number
  delay?: number
}

export function Float({ children, duration = 3, delay = 0, ...props }: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

