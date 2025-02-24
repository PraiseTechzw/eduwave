"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1}`,
  hours: Math.floor(Math.random() * 6),
}))

export function ActivityHeatmap() {
  return (
    <Card className="p-6">
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip />
          <Bar dataKey="hours" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

