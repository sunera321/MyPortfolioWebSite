import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import  CanvasLoader  from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
    
      <pointLight position={[-2, 1, 1]} intensity={70} />
      <pointLight position={[-2,-3, 4]} intensity={70} />
      <pointLight position={[-1,-1, -2]} intensity={30} />
      <pointLight position={[-1,-4, 4]} intensity={50} />
    
      <primitive
        object={computer.scene}
        scale={windowWidth < 500 ? 0.6 : 0.75}
        position={windowWidth < 500 ?[0, -2.5, -1.5]:[0, -3.25, -1.5]}
        rotation={[0,-0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  
  return (
    <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
     
    >
      <Suspense fallback ={<CanvasLoader/>}  >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers  />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;