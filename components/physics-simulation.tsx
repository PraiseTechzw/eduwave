"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Play, Pause, RotateCcw } from "lucide-react"

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function PhysicsSimulation() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = React.useState(false)
  const [gravity, setGravity] = React.useState(0.5)
  const [elasticity, setElasticity] = React.useState(0.7)
  const animationRef = React.useRef<number>()
  const ballRef = React.useRef<Ball>({
    x: 50,
    y: 50,
    vx: 2,
    vy: 0,
    radius: 15,
  })

  const draw = React.useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!ctx || !canvas) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw ball
    const ball = ballRef.current
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = "#2D5D7C"
    ctx.fill()
    ctx.closePath()

    // Draw ground
    ctx.beginPath()
    ctx.moveTo(0, canvas.height - 20)
    ctx.lineTo(canvas.width, canvas.height - 20)
    ctx.strokeStyle = "#666"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [])

  const update = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ball = ballRef.current

    // Update position
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vy += gravity

    // Bounce off walls
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.vx *= -elasticity
    }

    // Bounce off ground
    if (ball.y + ball.radius > canvas.height - 20) {
      ball.y = canvas.height - 20 - ball.radius
      ball.vy *= -elasticity
    }

    draw()

    if (isRunning) {
      animationRef.current = requestAnimationFrame(update)
    }
  }, [draw, gravity, elasticity, isRunning])

  React.useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(update)
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, update])

  const reset = () => {
    const ball = ballRef.current
    ball.x = 50
    ball.y = 50
    ball.vx = 2
    ball.vy = 0
    draw()
  }

  return (
    <Card className="p-4">
      <div className="mb-4 grid gap-4">
        <div className="flex items-center gap-4">
          <Button onClick={() => setIsRunning(!isRunning)} variant={isRunning ? "secondary" : "default"}>
            {isRunning ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start
              </>
            )}
          </Button>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
        <div className="grid gap-2">
          <Label>Gravity</Label>
          <Slider value={[gravity]} onValueChange={([value]) => setGravity(value)} max={2} step={0.1} />
        </div>
        <div className="grid gap-2">
          <Label>Elasticity</Label>
          <Slider value={[elasticity]} onValueChange={([value]) => setElasticity(value)} max={1} step={0.1} />
        </div>
      </div>
      <canvas ref={canvasRef} width={800} height={400} className="w-full rounded-lg border bg-white" />
    </Card>
  )
}

