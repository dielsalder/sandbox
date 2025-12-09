import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import "./_style.css";
import vertexShader from "./_shaders/vertexShader.vert?raw";
import fragmentShader from "./_shaders/shader.frag?raw";
import type { Mesh, PlaneGeometry, ShaderMaterial } from "three";

const Flag = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 1.0,
      },
    }),

    []
  );

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
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
