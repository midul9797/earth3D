import { Canvas } from "@react-three/fiber";

import "./App.css";
import { useEffect, useState } from "react";
import Scene from "./components/Scene";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <div>
      <Canvas
        style={{
          width: windowWidth,
          height: windowHeight,
          background: "black",
        }}
      >
        <Scene></Scene>
      </Canvas>
    </div>
  );
}

export default App;
