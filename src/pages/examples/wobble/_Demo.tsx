import {
  CubeCamera,
  GradientTexture,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
export function R3F() {
  return (
    <div id="canvas-container">
      <Canvas className="example">
        <CubeCamera position={[0, 0, 100]} />
        <ambientLight intensity={0.5} />
        <mesh>
          <sphereGeometry args={[1, 50, 50]} />
          {/* <MeshWobbleMaterial factor={1} speed={10} /> */}
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
          <MeshDistortMaterial distort={1} speed={10} />
        </mesh>
      </Canvas>
    </div>
  );
}
