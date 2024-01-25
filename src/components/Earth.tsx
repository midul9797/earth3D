import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import EarthMap from "../assets/textures/00_earthmap1k.jpg";
import EarthSpec from "../assets/textures/02_earthspec1k.jpg";
import EarthBump from "../assets/textures/01_earthbump1k.jpg";
export default function Earth() {
  const earthRef = useRef<Mesh>(null!);
  const [earthMap, earthSpec, earthBump] = useLoader(TextureLoader, [
    EarthMap,
    EarthSpec,
    EarthBump,
  ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.001;
  });
  return (
    <mesh position={[0, 0, 0]} ref={earthRef}>
      <icosahedronGeometry args={[1, 12]}></icosahedronGeometry>
      <meshPhongMaterial
        map={earthMap}
        specularMap={earthSpec}
        bumpMap={earthBump}
        bumpScale={0.04}
      ></meshPhongMaterial>
    </mesh>
  );
}
