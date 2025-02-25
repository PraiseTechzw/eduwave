"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Lock } from "lucide-react"

interface Module {
  id: string
  title: string
  status: "locked" | "available" | "completed"
  position: { x: number; y: number }
  connections: string[]
}

const modules: Module[] = [
  {
    id: "1",
    title: "Introduction",
    status: "completed",
    position: { x: 100, y: 100 },
    connections: ["2", "3"],
  },
  {
    id: "2",
    title: "Basic Concepts",
    status: "available",
    position: { x: 300, y: 50 },
    connections: ["4"],
  },
  {
    id: "3",
    title: "Core Principles",
    status: "available",
    position: { x: 300, y: 150 },
    connections: ["4"],
  },
  {
    id: "4",
    title: "Advanced Topics",
    status: "locked",
    position: { x: 500, y: 100 },
    connections: [],
  },
]

export function CourseMap() {
  const [hoveredModule, setHoveredModule] = React.useState<string | null>(null)

  const getStatusColor = (status: Module["status"]) => {
    switch (status) {
      case "completed":
        return "var(--primary)"
      case "available":
        return "var(--secondary)"
      case "locked":
        return "var(--muted)"
    }
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-card p-4">
      <svg className="absolute inset-0 h-full w-full">
        {modules.map((module) =>
          module.connections.map((targetId) => {
            const target = modules.find((m) => m.id === targetId)
            if (!target) return null

            return (
              <motion.line
                key={`${module.id}-${targetId}`}
                x1={module.position.x + 50}
                y1={module.position.y + 30}
                x2={target.position.x + 50}
                y2={target.position.y + 30}
                stroke={getStatusColor(module.status)}
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )
          }),
        )}
      </svg>
      {modules.map((module) => (
        <motion.div
          key={module.id}
          className="absolute"
          style={{
            left: module.position.x,
            top: module.position.y,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          onHoverStart={() => setHoveredModule(module.id)}
          onHoverEnd={() => setHoveredModule(null)}
        >
          <Card
            className={`relative w-[100px] cursor-pointer p-2 text-center transition-colors hover:bg-accent/5 ${
              hoveredModule === module.id ? "ring-2 ring-primary" : ""
            }`}
          >
            <div className="absolute -right-1 -top-1">
              {module.status === "completed" ? (
                <Badge variant="default" className="h-6 w-6 rounded-full p-0">
                  <Check className="h-3 w-3" />
                </Badge>
              ) : module.status === "locked" ? (
                <Badge variant="secondary" className="h-6 w-6 rounded-full p-0">
                  <Lock className="h-3 w-3" />
                </Badge>
              ) : null}
            </div>
            <p className="text-sm font-medium">{module.title}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

