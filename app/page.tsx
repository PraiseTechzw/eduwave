import { Button } from "@/components/ui/button"
import { FeaturedCourses } from "@/components/featured-courses"
import { Testimonials } from "@/components/testimonials"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 py-20 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Learn Without Limits</h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Access world-class education from CUT's top instructors. Master new skills at your own pace.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container space-y-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter">CUT's Top Modules</h2>
          <p className="mx-auto mt-2 max-w-[600px] text-muted-foreground">
            Discover our most popular courses and start learning today
          </p>
        </div>
        <FeaturedCourses />
      </section>

      {/* Testimonials */}
      <section className="border-t bg-muted/50">
        <div className="container space-y-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">What Our Students Say</h2>
            <p className="mx-auto mt-2 max-w-[600px] text-muted-foreground">
              Join thousands of students who have transformed their careers with EduWave
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  )
}

