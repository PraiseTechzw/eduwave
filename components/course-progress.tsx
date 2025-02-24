"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const courses = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    progress: 65,
    lastAccessed: "2 hours ago",
    nextLesson: "Binary Trees",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Quantum Mechanics",
    progress: 45,
    lastAccessed: "1 day ago",
    nextLesson: "Wave Functions",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Advanced Calculus",
    progress: 90,
    lastAccessed: "3 days ago",
    nextLesson: "Multiple Integrals",
    image: "/placeholder.svg",
  },
]

interface CourseProgressProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CourseProgress({ className, ...props }: CourseProgressProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Active Courses</CardTitle>
        <CardDescription>Your current course progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center">
              <img
                src={course.image || "/placeholder.svg"}
                alt=""
                className="mr-4 h-16 w-16 rounded-md object-cover"
                width={64}
                height={64}
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <Link href={`/course/${course.id}`} className="font-semibold hover:underline">
                    {course.title}
                  </Link>
                  <span className="text-sm text-muted-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Next: {course.nextLesson}</span>
                  <span>Last accessed {course.lastAccessed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

