"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Data Structures",
    description: "Learn fundamental data structures and algorithms",
    progress: 65,
    subject: "Computer Science",
    difficulty: "Intermediate",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "CUT Physics 101",
    description: "Introduction to classical mechanics and thermodynamics",
    progress: 30,
    subject: "Physics",
    difficulty: "Beginner",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Linear Algebra",
    description: "Vectors, matrices, and linear transformations",
    progress: 90,
    subject: "Mathematics",
    difficulty: "Advanced",
    image: "/placeholder.svg",
  },
]

export function CourseGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link key={course.id} href={`/course/${course.id}`}>
          <Card className="overflow-hidden transition-colors hover:bg-muted/50">
            <CardHeader className="border-b p-0">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="aspect-video object-cover"
                width={400}
                height={225}
              />
            </CardHeader>
            <CardContent className="grid gap-2.5 p-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{course.subject}</Badge>
                <Badge variant="outline">{course.difficulty}</Badge>
              </div>
              <h3 className="line-clamp-1 text-lg font-semibold">{course.title}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="w-full space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

