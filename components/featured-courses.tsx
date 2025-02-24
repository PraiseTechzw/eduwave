"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const featuredCourses = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts with hands-on coding exercises",
    instructor: "Dr. Sarah Chen",
    students: 1234,
    subject: "Computer Science",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Quantum Mechanics",
    description: "Explore the fascinating world of quantum physics through interactive simulations",
    instructor: "Prof. Michael Brown",
    students: 890,
    subject: "Physics",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Advanced Calculus",
    description: "Deep dive into multivariable calculus and differential equations",
    instructor: "Dr. Emily Taylor",
    students: 567,
    subject: "Mathematics",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of ML with Python and real-world applications",
    instructor: "Prof. James Wilson",
    students: 2341,
    subject: "Computer Science",
    image: "/placeholder.svg",
  },
]

export function FeaturedCourses() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {featuredCourses.map((course) => (
          <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
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
                <Badge className="w-fit" variant="secondary">
                  {course.subject}
                </Badge>
                <h3 className="line-clamp-1 text-lg font-semibold">{course.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{course.instructor}</span>
                  <span>•</span>
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

