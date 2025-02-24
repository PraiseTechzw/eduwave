import { Card, CardContent } from "@/components/ui/card"
import { Blocks, BookOpen, Code2, Fingerprint, Gauge, GraduationCap, LineChart, Users } from "lucide-react"

const features = [
  {
    title: "Interactive Learning",
    description: "Engage with hands-on exercises, real-time code execution, and interactive simulations.",
    icon: Blocks,
  },
  {
    title: "Expert Instructors",
    description: "Learn from CUT's top professors and industry experts with years of experience.",
    icon: GraduationCap,
  },
  {
    title: "Self-Paced Courses",
    description: "Study at your own pace with flexible schedules and lifetime access to course content.",
    icon: Gauge,
  },
  {
    title: "Real-World Projects",
    description: "Apply your knowledge to practical projects that simulate real-world scenarios.",
    icon: Code2,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning progress with detailed analytics and performance insights.",
    icon: LineChart,
  },
  {
    title: "Collaborative Learning",
    description: "Connect with peers, join study groups, and participate in discussions.",
    icon: Users,
  },
  {
    title: "Verified Certificates",
    description: "Earn recognized certificates upon course completion to showcase your skills.",
    icon: Fingerprint,
  },
  {
    title: "Extensive Library",
    description: "Access a vast collection of courses across various subjects and disciplines.",
    icon: BookOpen,
  },
]

export function Features() {
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything You Need to Succeed</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
          Our platform provides all the tools and resources you need to master new skills and advance your career.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden">
            <CardContent className="p-6">
              <feature.icon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

