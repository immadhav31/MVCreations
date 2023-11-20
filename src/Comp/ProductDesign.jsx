import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Shoe from './Shoe'

const ProductDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={1} scale={[2,2,2]}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
  )
}

export default ProductDesign;
