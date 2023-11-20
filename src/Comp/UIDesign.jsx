import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Mac from './Mac'



const UIDesign = () => {
  return (
      <Canvas>
        <Stage environment="city" intensity={1} scale={[2,2,2]}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

  )
}

export default UIDesign;
