import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Settings } from "lucide-react"

export function ProfileHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex items-start gap-4 sm:flex-col">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">Computer Science Student</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div className="grid gap-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Current Goal Progress</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center sm:gap-6">
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Courses Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold">256</div>
                <div className="text-xs text-muted-foreground">Hours of Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" className="ml-auto shrink-0">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

