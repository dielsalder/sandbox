import { TextureLoader } from "three";
import "./style.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
const imageUrl = "/300.jpg";
export function Demo() {
  const texture = useLoader(TextureLoader, imageUrl);
  return (
    <div id="canvas-container">
      {/* <img src={imageUrl} /> */}
      <Canvas>
        <perspectiveCamera
          args={[75, window.innerWidth / window.innerHeight, 0.1, 1000]}
          position={[0, 0, 0]}
        />
        <mesh position={[0, 0, 3]}>
          <planeGeometry />
          <meshBasicMaterial map={texture} />
        </mesh>
        <EffectComposer>
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
