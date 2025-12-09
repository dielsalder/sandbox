import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";
import "./_style.css";
import vertexShader from "./_shaders/vertexShader.vert?raw";

const Flag = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef(undefined);

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        // fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
      />
    </mesh>
  );
};

export const Demo = () => {
  return (
    <Canvas camera={{ position: [1.0, 1.0, 1.0] }}>
      <Flag />
      <axesHelper />
      <OrbitControls />
    </Canvas>
  );
};
