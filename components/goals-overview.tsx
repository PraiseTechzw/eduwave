import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

const goals = [
  {
    title: "Complete Data Structures Course",
    target: "2 modules per week",
    progress: 75,
  },
  {
    title: "Practice Problem Solving",
    target: "5 problems per day",
    progress: 60,
  },
  {
    title: "Review Course Materials",
    target: "1 hour daily",
    progress: 45,
  },
]

export function GoalsOverview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Goals Overview</CardTitle>
            <CardDescription>Your learning objectives</CardDescription>
          </div>
          <Target className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.title} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{goal.title}</span>
                <span className="text-muted-foreground">{goal.progress}%</span>
              </div>
              <div className="text-xs text-muted-foreground">{goal.target}</div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

