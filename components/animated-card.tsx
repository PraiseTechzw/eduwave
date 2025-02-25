"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function AnimatedCard({ children, className, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-lg border bg-card p-4 text-card-foreground shadow transition-colors hover:bg-accent/5",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

