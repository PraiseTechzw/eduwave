const stats = [
  {
    value: "100,000+",
    label: "Active Students",
  },
  {
    value: "1,000+",
    label: "Expert Instructors",
  },
  {
    value: "500+",
    label: "Interactive Courses",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
]

export function Stats() {
  return (
    <div className="container py-20">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

