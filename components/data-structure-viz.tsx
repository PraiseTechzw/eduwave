"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

interface Node {
  value: number
  x: number
  y: number
  next?: number
}

export function DataStructureViz() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [nodes, setNodes] = React.useState<Node[]>([])
  const [value, setValue] = React.useState("")

  const drawNode = React.useCallback(
    (ctx: CanvasRenderingContext2D, node: Node, isHighlighted = false) => {
      // Draw circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI)
      ctx.fillStyle = isHighlighted ? "#4CAF50" : "#2D5D7C"
      ctx.fill()

      // Draw value
      ctx.fillStyle = "white"
      ctx.font = "14px Inter"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.value.toString(), node.x, node.y)

      // Draw arrow if there's a next node
      if (typeof node.next === "number") {
        const nextNode = nodes[node.next]
        if (nextNode) {
          ctx.beginPath()
          ctx.moveTo(node.x + 25, node.y)
          ctx.lineTo(nextNode.x - 25, nextNode.y)
          ctx.strokeStyle = "#666"
          ctx.lineWidth = 2
          ctx.stroke()

          // Draw arrow head
          const angle = Math.atan2(nextNode.y - node.y, nextNode.x - node.x)
          ctx.beginPath()
          ctx.moveTo(nextNode.x - 35, nextNode.y - 10)
          ctx.lineTo(nextNode.x - 25, nextNode.y)
          ctx.lineTo(nextNode.x - 35, nextNode.y + 10)
          ctx.strokeStyle = "#666"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    },
    [nodes],
  )

  const draw = React.useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    nodes.forEach((node, index) => {
      drawNode(ctx, node)
    })
  }, [nodes, drawNode])

  React.useEffect(() => {
    draw()
  }, [draw])

  const addNode = () => {
    const newValue = Number.parseInt(value)
    if (isNaN(newValue)) return

    setNodes((prev) => {
      const newNodes = [...prev]
      const x = prev.length ? prev[prev.length - 1].x + 100 : 50
      const y = 50

      if (prev.length > 0) {
        newNodes[prev.length - 1] = {
          ...prev[prev.length - 1],
          next: prev.length,
        }
      }

      newNodes.push({ value: newValue, x, y })
      return newNodes
    })
    setValue("")
  }

  return (
    <Card className="p-4">
      <div className="mb-4 flex items-end gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="value">Node Value</Label>
          <Input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a number"
          />
        </div>
        <Button onClick={addNode}>
          <Plus className="mr-2 h-4 w-4" />
          Add Node
        </Button>
      </div>
      <div className="relative">
        <canvas ref={canvasRef} width={800} height={100} className="w-full border rounded-lg bg-white" />
      </div>
    </Card>
  )
}

