import { Button } from "@/components/ui/button"
import { FeaturedCourses } from "@/components/landing/featured-courses"
import { Features } from "@/components/landing/features"
import { Stats } from "@/components/landing/stats"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CtaSection } from "@/components/landing/cta-section"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 py-20 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-fit rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground">
              🎓 The Future of Learning
            </div>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Learn Without Limits with <span className="text-primary">EduWave</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Access world-class education from CUT's top instructors. Master new skills at your own pace with
              interactive learning experiences.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-8 grid gap-4 text-center">
            <p className="text-sm text-muted-foreground">Trusted by leading universities</p>
            <div className="flex flex-wrap justify-center gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <img
                  key={i}
                  src="/placeholder.svg"
                  alt="University logo"
                  className="h-8 w-auto dark:invert"
                  width={100}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container space-y-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">CUT's Top Modules</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Discover our most popular courses and start learning today with interactive lessons and real-world projects.
          </p>
        </div>
        <FeaturedCourses />
      </section>

      {/* Features */}
      <section className="container space-y-8 py-20">
        <Features />
      </section>

      {/* Stats */}
      <section className="border-t border-b bg-muted/50">
        <Stats />
      </section>

      {/* Testimonials */}
      <section className="container space-y-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Join thousands of students who have transformed their careers with EduWave's interactive learning platform.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="container space-y-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Find answers to common questions about our platform and courses.
          </p>
        </div>
        <FAQ />
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

