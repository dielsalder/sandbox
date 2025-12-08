import { Canvas } from "@react-three/fiber";
import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
export function R3F() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <EffectComposer>
          <DotScreen
            blendFunction={BlendFunction.NORMAL} // blend mode
            angle={Math.PI * 0.5} // angle of the dot pattern
            scale={1.0} // scale of the dot pattern
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
