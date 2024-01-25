import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, Mesh, TextureLoader } from "three";
import LightMap from "../assets/textures/03_earthlights1k.jpg";
export default function Light() {
  const [lightMap] = useLoader(TextureLoader, [LightMap]);
  const lightRef = useRef<Mesh>(null!);
  useFrame(() => {
    lightRef.current.rotation.y += 0.001;
  });
  return (
    <mesh ref={lightRef}>
      <icosahedronGeometry args={[1, 12]}></icosahedronGeometry>
      <meshBasicMaterial
        map={lightMap}
        blending={AdditiveBlending}
      ></meshBasicMaterial>
    </mesh>
  );
}
