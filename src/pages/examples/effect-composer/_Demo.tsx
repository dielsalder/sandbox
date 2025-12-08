import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { BlendFunction } from "postprocessing";
import { EffectComposer, DotScreen } from "@react-three/postprocessing";
import Model from "./_Model";

export function Demo() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1} environment="city">
          <Model />
        </Stage>
        <EffectComposer>
          <DotScreen
            blendFunction={BlendFunction.NORMAL} // blend mode
            angle={Math.PI * 0.5} // angle of the dot pattern
            scale={1.0} // scale of the dot pattern
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
