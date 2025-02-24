import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
          Join thousands of students and start learning today with our interactive platform.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-8">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8">
            View Courses
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">No credit card required</p>
      </div>
    </section>
  )
}

