"use client"
import { motion } from "framer-motion"

interface ConfettiProps {
  count?: number
}

export function Confetti({ count = 50 }: ConfettiProps) {
  const colors = ["#FFC107", "#4CAF50", "#2196F3", "#E91E63", "#9C27B0"]

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          initial={{
            top: "-10%",
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
          animate={{
            top: "100%",
            rotate: Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

