import CloudMap from "../assets/textures/04_earthcloudmap.jpg";
import CloudAlphaMap from "../assets/textures/05_earthcloudmaptrans.jpg";
import { AdditiveBlending, Mesh, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

export default function Clouds() {
  const [cloudMap, cloudAlphaMap] = useLoader(TextureLoader, [
    CloudMap,
    CloudAlphaMap,
  ]);
  const cloudRef = useRef<Mesh>(null!);
  useFrame(() => {
    cloudRef.current.rotation.y += 0.0013;
  });
  return (
    <mesh scale={1.003} ref={cloudRef}>
      <icosahedronGeometry args={[1, 12]}></icosahedronGeometry>
      <meshStandardMaterial
        map={cloudMap}
        transparent={true}
        opacity={0.5}
        blending={AdditiveBlending}
        alphaMap={cloudAlphaMap}
      />
    </mesh>
  );
}
