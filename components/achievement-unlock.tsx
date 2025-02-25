"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface AchievementUnlockProps {
  title: string
  description: string
  show: boolean
  onHide: () => void
}

export function AchievementUnlock({ title, description, show, onHide }: AchievementUnlockProps) {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onHide])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
          <Card className="flex items-center gap-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

