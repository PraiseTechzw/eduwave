"use client"

import * as React from "react"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, RotateCcw } from "lucide-react"

const defaultCode = `# Python Example
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Test the function
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers.copy())
print(f"Original array: {numbers}")
print(f"Sorted array: {sorted_numbers}")
`

interface CodePlaygroundProps {
  initialCode?: string
  language?: string
}

export function CodePlayground({ initialCode = defaultCode, language = "python" }: CodePlaygroundProps) {
  const [code, setCode] = React.useState(initialCode)
  const [output, setOutput] = React.useState("")

  const handleRun = () => {
    // In a real implementation, this would send the code to a backend service
    setOutput(
      "Running code...\n\nOriginal array: [64, 34, 25, 12, 22, 11, 90]\nSorted array: [11, 12, 22, 25, 34, 64, 90]",
    )
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput("")
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button onClick={handleRun}>
            <Play className="mr-2 h-4 w-4" />
            Run Code
          </Button>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-2">
          <Editor
            height="400px"
            language={language}
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </Card>
        <Card className="border-2 bg-zinc-950 p-4">
          <pre className="h-[400px] overflow-auto font-mono text-sm text-white">
            {output || "// Output will appear here after running the code"}
          </pre>
        </Card>
      </div>
    </div>
  )
}

