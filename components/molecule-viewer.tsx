"use client"

import * as React from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rotate3D } from "lucide-react"

interface Atom {
  position: [number, number, number]
  element: string
  color: string
}

const waterMolecule: Atom[] = [
  { position: [0, 0, 0], element: "O", color: "#ff0000" },
  { position: [-0.8, 0.6, 0], element: "H", color: "#ffffff" },
  { position: [0.8, 0.6, 0], element: "H", color: "#ffffff" },
]

export function MoleculeViewer() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isAutoRotate, setIsAutoRotate] = React.useState(true)

  React.useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.autoRotate = isAutoRotate

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Add atoms
    waterMolecule.forEach((atom) => {
      const geometry = new THREE.SphereGeometry(atom.element === "O" ? 0.4 : 0.2)
      const material = new THREE.MeshPhongMaterial({
        color: atom.color,
        specular: 0x444444,
        shininess: 20,
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(...atom.position)
      scene.add(sphere)
    })

    // Add bonds
    const bondMaterial = new THREE.MeshPhongMaterial({
      color: 0x666666,
    })

    waterMolecule.slice(1).forEach((atom) => {
      const start = new THREE.Vector3(0, 0, 0)
      const end = new THREE.Vector3(...atom.position)
      const direction = end.clone().sub(start)
      const length = direction.length()

      const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, length)
      const bond = new THREE.Mesh(bondGeometry, bondMaterial)

      // Position and rotate bond
      bond.position.copy(start.clone().add(end).multiplyScalar(0.5))
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize())

      scene.add(bond)
    })

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [isAutoRotate])

  return (
    <Card className="p-4">
      <div className="mb-4">
        <Button variant="outline" onClick={() => setIsAutoRotate(!isAutoRotate)}>
          <Rotate3D className="mr-2 h-4 w-4" />
          {isAutoRotate ? "Stop" : "Start"} Rotation
        </Button>
      </div>
      <div ref={containerRef} className="h-[400px] w-full rounded-lg border bg-white" />
    </Card>
  )
}

