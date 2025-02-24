"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CourseFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-sm font-medium">Filters</h3>
        <Accordion type="single" collapsible defaultValue="subject">
          <AccordionItem value="subject">
            <AccordionTrigger>Subject</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="computer-science" />
                  <label
                    htmlFor="computer-science"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Computer Science
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="physics" />
                  <label
                    htmlFor="physics"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Physics
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mathematics" />
                  <label
                    htmlFor="mathematics"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mathematics
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="difficulty">
            <AccordionTrigger>Difficulty</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="beginner" />
                  <label
                    htmlFor="beginner"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Beginner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="intermediate" />
                  <label
                    htmlFor="intermediate"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Intermediate
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="advanced" />
                  <label
                    htmlFor="advanced"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Advanced
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="progress">
            <AccordionTrigger>Progress</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="in-progress" />
                  <label
                    htmlFor="in-progress"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    In Progress
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="completed" />
                  <label
                    htmlFor="completed"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Completed
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="not-started" />
                  <label
                    htmlFor="not-started"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Not Started
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

