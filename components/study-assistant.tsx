"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User } from "lucide-react"

export function StudyAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Study Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.length > 0 ? (
            messages.map((message, i) => (
              <div key={i} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <User className="mt-0.5 h-5 w-5 shrink-0" />
                  )}
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-muted-foreground">Ask me anything about your studies! I'm here to help.</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input placeholder="Type your message..." value={input} onChange={handleInputChange} />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

