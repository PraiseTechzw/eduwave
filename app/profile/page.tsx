import { ProfileHeader } from "@/components/profile-header"
import { ActivityHeatmap } from "@/components/activity-heatmap"
import { SkillBadges } from "@/components/skill-badges"
import { GoalTracker } from "@/components/goal-tracker"

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8">
        <ProfileHeader />
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Learning Activity</h2>
              <ActivityHeatmap />
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Achievements</h2>
              <SkillBadges />
            </section>
          </div>
          <div>
            <GoalTracker />
          </div>
        </div>
      </div>
    </div>
  )
}

