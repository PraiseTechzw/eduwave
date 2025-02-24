import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plus } from "lucide-react"

const goals = [
  {
    id: 1,
    title: "Complete Data Structures Course",
    target: "2 modules per week",
    progress: 75,
  },
  {
    id: 2,
    title: "Master Python Programming",
    target: "4 hours per day",
    progress: 60,
  },
  {
    id: 3,
    title: "Finish Algorithm Challenges",
    target: "3 challenges per week",
    progress: 40,
  },
]

export function GoalTracker() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium">Learning Goals</CardTitle>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add goal</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{goal.title}</span>
              <span className="text-muted-foreground">{goal.progress}%</span>
            </div>
            <div className="text-xs text-muted-foreground">{goal.target}</div>
            <Progress value={goal.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

