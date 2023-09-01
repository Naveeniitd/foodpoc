import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const ThreeDModel = () => {
  return (
    <Canvas colorManagement backgroundColor="#ffffff" style ={{ width: '100%', height: '600px' }}>
      <Box />
    </Canvas>
  );
};

export default ThreeDModel;
