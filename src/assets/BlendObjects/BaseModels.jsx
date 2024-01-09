import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 150, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  );
};


import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations } from "@react-three/drei";

const ModelViewer = ({ modelPath, scale = 150, position = [0, -1, 0] }) => {
  return (
    <Canvas className="w-full" >
      <ambientLight intensity={2} />
      <spotLight position={[10, 10, 10]} angle={0.90} penumbra={1}  />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;