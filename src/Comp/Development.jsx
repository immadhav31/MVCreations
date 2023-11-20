import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Atom from './Atom'

const Development = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={1}>
          <Atom scale={[0.5,0.5,0.5]}/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
  )
}

export default Development;
