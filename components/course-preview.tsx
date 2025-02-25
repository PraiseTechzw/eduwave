"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Users } from "lucide-react"

interface CoursePreviewProps {
  course: {
    id: string
    title: string
    description: string
    image: string
    rating: number
    students: number
    progress?: number
    instructor: string
    category: string
    level: string
  }
}

export function CoursePreview({ course }: CoursePreviewProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Link href={`/course/${course.id}`}>
      <Card
        className="group relative overflow-hidden transition-all"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <CardHeader className="p-0">
          <motion.div
            className="relative aspect-video overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="object-cover"
              width={400}
              height={225}
            />
          </motion.div>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
          </div>
          <h3 className="line-clamp-1 text-lg font-semibold">{course.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students} students</span>
            </div>
          </div>
        </CardContent>
        {course.progress !== undefined && (
          <CardFooter className="p-4 pt-0">
            <div className="w-full space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} />
            </div>
          </CardFooter>
        )}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <span className="rounded-full bg-white px-4 py-2 font-medium text-black">View Course</span>
        </motion.div>
      </Card>
    </Link>
  )
}

