import { OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
import Light from "./Light";
import Earth from "./Earth";
import Stars from "./Stars";
import Clouds from "./Clouds";
// import { DirectionalLightHelper, Mesh } from "three";

export default function Scene() {
  //   const directionalLightRef = useRef<Mesh>(null!);
  //   useHelper(directionalLightRef, DirectionalLightHelper, 1, "white");
  return (
    <>
      <Stars />

      <group rotation-z={(-23.4 * Math.PI) / 180}>
        <directionalLight
          color={"0xffffff"}
          position={[-2, 0.15, 1.5]}
          intensity={5}
        ></directionalLight>

        <Earth />
        <Light></Light>
        <Clouds></Clouds>
        <OrbitControls></OrbitControls>
      </group>
    </>
  );
}
