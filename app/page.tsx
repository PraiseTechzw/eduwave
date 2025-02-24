import { CourseGrid } from "@/components/course-grid"
import { CourseFilters } from "@/components/course-filters"

export default function HomePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">Continue learning from where you left off</p>
        </div>
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <CourseFilters />
          <CourseGrid />
        </div>
      </div>
    </div>
  )
}

