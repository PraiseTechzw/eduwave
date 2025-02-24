import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, GraduationCap, Target } from "lucide-react"

const stats = [
  {
    title: "Study Hours",
    value: "32.5",
    unit: "hrs",
    description: "this week",
    icon: Clock,
  },
  {
    title: "Course Progress",
    value: "85",
    unit: "%",
    description: "completion rate",
    icon: GraduationCap,
  },
  {
    title: "Goals Met",
    value: "12",
    unit: "/15",
    description: "this month",
    icon: Target,
  },
  {
    title: "Achievements",
    value: "8",
    unit: "",
    description: "badges earned",
    icon: Award,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stat.value}
              <span className="text-muted-foreground">{stat.unit}</span>
            </div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

