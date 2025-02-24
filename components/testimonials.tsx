"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    content:
      "EduWave transformed my learning experience. The interactive modules and real-time feedback made complex topics much easier to understand.",
    author: "Alex Thompson",
    role: "Computer Science Student",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    content:
      "As an instructor, I love how EduWave makes it easy to create engaging content and track student progress. The platform is intuitive and powerful.",
    author: "Dr. Maria Garcia",
    role: "Physics Professor",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    content:
      "The code playground and instant feedback features helped me improve my programming skills significantly. Highly recommended!",
    author: "James Wilson",
    role: "Software Engineering Student",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    content:
      "EduWave's collaborative features made remote learning feel more connected. The discussion threads and note-sharing are game-changers.",
    author: "Sarah Chen",
    role: "Mathematics Student",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2">
            <Card>
              <CardContent className="grid gap-4 p-6">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

