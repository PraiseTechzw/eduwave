import { Card } from "@/components/ui/card"
import { Award, Code, Database, FileCode2, GitBranch } from "lucide-react"

const skills = [
  {
    name: "Python Expert",
    description: "Completed Advanced Python Programming",
    icon: Code,
  },
  {
    name: "Data Structures Pro",
    description: "Mastered Core Data Structures",
    icon: Database,
  },
  {
    name: "Algorithm Master",
    description: "Solved 100+ Algorithm Challenges",
    icon: FileCode2,
  },
  {
    name: "Git Certified",
    description: "Completed Version Control Essentials",
    icon: GitBranch,
  },
  {
    name: "Top Contributor",
    description: "Most Active in Course Discussions",
    icon: Award,
  },
]

export function SkillBadges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <Card key={skill.name} className="p-4">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <skill.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="font-medium">{skill.name}</div>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

