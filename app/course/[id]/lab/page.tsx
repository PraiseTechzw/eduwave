import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodePlayground } from "@/components/lab/code-playground"
import { DataStructureViz } from "@/components/lab/data-structure-viz"
import { PhysicsSimulation } from "@/components/lab/physics-simulation"
import { MoleculeViewer } from "@/components/lab/molecule-viewer"

export default function LabPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Interactive Lab</h1>
        <p className="text-muted-foreground">Experiment with interactive demonstrations and simulations</p>
      </div>
      <Tabs defaultValue="code" className="space-y-4">
        <TabsList>
          <TabsTrigger value="code">Code Playground</TabsTrigger>
          <TabsTrigger value="datastructures">Data Structures</TabsTrigger>
          <TabsTrigger value="physics">Physics Simulation</TabsTrigger>
          <TabsTrigger value="chemistry">Molecule Viewer</TabsTrigger>
        </TabsList>
        <TabsContent value="code" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold">Code Playground</h2>
              <p className="text-sm text-muted-foreground">
                Write and execute code in real-time with syntax highlighting and error checking
              </p>
            </div>
            <CodePlayground />
          </div>
        </TabsContent>
        <TabsContent value="datastructures" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold">Data Structure Visualization</h2>
              <p className="text-sm text-muted-foreground">Visualize linked lists and understand how they work</p>
            </div>
            <DataStructureViz />
          </div>
        </TabsContent>
        <TabsContent value="physics" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold">Physics Simulation</h2>
              <p className="text-sm text-muted-foreground">
                Experiment with gravity and elasticity in this interactive physics simulation
              </p>
            </div>
            <PhysicsSimulation />
          </div>
        </TabsContent>
        <TabsContent value="chemistry" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold">3D Molecule Viewer</h2>
              <p className="text-sm text-muted-foreground">
                Explore molecular structures in 3D with interactive controls
              </p>
            </div>
            <MoleculeViewer />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

