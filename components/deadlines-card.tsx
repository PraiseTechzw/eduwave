import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const deadlines = [
  {
    id: 1,
    title: "Algorithm Analysis Quiz",
    course: "Data Structures",
    due: "Tomorrow at 11:59 PM",
    urgent: true,
  },
  {
    id: 2,
    title: "Wave Functions Assignment",
    course: "Quantum Mechanics",
    due: "in 3 days",
    urgent: false,
  },
  {
    id: 3,
    title: "Integration Methods Project",
    course: "Advanced Calculus",
    due: "in 5 days",
    urgent: false,
  },
]

export function DeadlinesCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Tasks due soon</CardDescription>
          </div>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="font-medium leading-none">{deadline.title}</p>
                <p className="text-sm text-muted-foreground">{deadline.course}</p>
              </div>
              <Badge variant={deadline.urgent ? "destructive" : "secondary"}>Due {deadline.due}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

