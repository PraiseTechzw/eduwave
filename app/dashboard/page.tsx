import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CourseProgress } from "@/components/course-progress"
import { DeadlinesCard } from "@/components/deadlines-card"
import { GoalsOverview } from "@/components/goals-overview"
import { RecentActivity } from "@/components/recent-activity"
import { StatsCards } from "@/components/stats-cards"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Welcome back! Here's an overview of your learning progress." />
      <div className="grid gap-4 md:gap-8">
        <StatsCards />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <CourseProgress className="lg:col-span-4" />
          <div className="grid gap-4 lg:col-span-3">
            <DeadlinesCard />
            <GoalsOverview />
          </div>
        </div>
        <RecentActivity />
      </div>
    </DashboardShell>
  )
}

