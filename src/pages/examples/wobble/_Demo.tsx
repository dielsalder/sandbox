import {
  CubeCamera,
  GradientTexture,
  GradientType,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { useControls } from "leva";

export function R3F() {
  const distort = useControls("Distort", {
    intensity: { value: 0.75, min: 0, max: 2 },
    speed: { value: 10, min: 0, max: 20 },
  });
  const geometry = useControls("Sphere", {
    size: { value: 1, min: 0, max: 5 },
    segments: { value: 50, min: 0, max: 100 },
    isSphere: true,
  });

  const light = useControls("Light", {
    intensity: { value: 2, min: 0, max: 10 },
  });

  const colors = useControls("Colors", {
    start: { value: "aquamarine" },
    middle: { value: "purple" },
    end: { value: "hotpink" },
  });

  return (
    <div id="canvas-container">
      <Canvas className="example">
        <CubeCamera position={[0, 0, 100]} />
        <ambientLight intensity={light.intensity} />
        <mesh>
          {geometry.isSphere ? (
            <sphereGeometry
              args={[geometry.size, geometry.segments, geometry.segments]}
            />
          ) : (
            <circleGeometry
              args={[geometry.size, geometry.segments, geometry.segments]}
            />
          )}
          <MeshDistortMaterial
            distort={distort.intensity}
            speed={distort.speed}
          >
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={[colors.start, colors.middle, colors.end]}
              size={1024}
            />
          </MeshDistortMaterial>
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
