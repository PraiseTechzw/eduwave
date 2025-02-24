import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BookOpen, CheckCircle, Trophy } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "completion",
    title: "Completed Module: Introduction to Arrays",
    course: "Data Structures",
    time: "2 hours ago",
    icon: CheckCircle,
  },
  {
    id: 2,
    type: "achievement",
    title: "Earned Badge: Python Expert",
    course: "Python Programming",
    time: "5 hours ago",
    icon: Trophy,
  },
  {
    id: 3,
    type: "progress",
    title: "Started New Module: Wave Functions",
    course: "Quantum Mechanics",
    time: "1 day ago",
    icon: BookOpen,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning milestones</CardDescription>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="rounded-full border p-2">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.course}</p>
              </div>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

