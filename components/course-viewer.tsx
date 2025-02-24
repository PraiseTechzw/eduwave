"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { ChevronDown, Play } from "lucide-react"

const modules = [
  {
    id: 1,
    title: "Introduction to Data Structures",
    lessons: [
      {
        id: 1,
        title: "What are Data Structures?",
        duration: "10:00",
        completed: true,
      },
      {
        id: 2,
        title: "Arrays and Linked Lists",
        duration: "15:00",
        completed: true,
      },
      {
        id: 3,
        title: "Stacks and Queues",
        duration: "12:00",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Topics",
    lessons: [
      {
        id: 4,
        title: "Trees and Graphs",
        duration: "20:00",
        completed: false,
      },
      {
        id: 5,
        title: "Hash Tables",
        duration: "18:00",
        completed: false,
      },
    ],
  },
]

export function CourseViewer() {
  const [activeLesson, setActiveLesson] = React.useState(modules[0].lessons[0])

  return (
    <SidebarProvider defaultOpen>
      <div className="grid h-[calc(100vh-3.5rem)] lg:grid-cols-[320px_1fr]">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-4">
            <h2 className="text-lg font-semibold">Course Content</h2>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Progress value={33} className="h-2 w-20" />
              <span>33% Complete</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <nav className="space-y-1 p-2">
              {modules.map((module) => (
                <div key={module.id} className="space-y-1">
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium">
                    <ChevronDown className="h-4 w-4" />
                    {module.title}
                  </div>
                  <div className="ml-4 space-y-1">
                    {module.lessons.map((lesson) => (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-2 text-sm font-normal",
                          lesson.id === activeLesson.id && "bg-muted",
                        )}
                        onClick={() => setActiveLesson(lesson)}
                      >
                        <Play className="h-3 w-3" />
                        <span className="flex-1 truncate text-left">{lesson.title}</span>
                        <span className="text-muted-foreground">{lesson.duration}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col">
          <div className="flex items-center gap-4 border-b px-6 py-3">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">{activeLesson.title}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Lesson {activeLesson.id}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>{activeLesson.duration}</span>
              </div>
            </div>
            <Button>Next Lesson</Button>
          </div>
          <div className="flex-1 p-6">
            {/* Content renderer would go here */}
            <div className="rounded-lg border p-4">
              <p className="text-muted-foreground">
                Lesson content would be rendered here, including videos, interactive exercises, and quizzes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

