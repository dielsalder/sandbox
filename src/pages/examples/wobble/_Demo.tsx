import {
  CubeCamera,
  GradientTexture,
  GradientType,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { useControls } from "leva";

export function R3F() {
  const distort = useControls("Distort", {
    intensity: { value: 1, min: 0, max: 2 },
    speed: { value: 10, min: 0, max: 20 },
  });
  const sphere = useControls("Sphere", {
    size: { value: 1, min: 0, max: 5 },
    segments: { value: 50, min: 0, max: 100 },
  });

  const light = useControls("Light", {
    intensity: { value: 2, min: 0, max: 10 },
  });
  return (
    <div id="canvas-container">
      <Canvas className="example">
        <CubeCamera position={[0, 0, 100]} />
        <ambientLight intensity={light.intensity} />
        <mesh>
          <sphereGeometry
            args={[sphere.size, sphere.segments, sphere.segments]}
          />
          <MeshDistortMaterial
            distort={distort.intensity}
            speed={distort.speed}
          >
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={["aquamarine", "purple", "hotpink"]}
              size={1024}
            />
          </MeshDistortMaterial>
        </mesh>
      </Canvas>
    </div>
  );
}
