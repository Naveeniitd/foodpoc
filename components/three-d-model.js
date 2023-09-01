import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'https://storage.googleapis.com/3d_model/3DModels/Burger.glb');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

const ThreeDModel = () => {
  return (
    <Canvas camera={{ position: [4, 3, 0.5] }} style={{ width: '100%', height: '540px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
