import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'
import TypingComponent from './TypingComponent';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';


const Section = styled.div`
  height : 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height : 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`\
  margin-left: 100px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: -30px;

  @media only screen and (max-width: 768px) {
    flex: 2;
    align-items: center;
    margin-top: -700px;
    margin-right: 100px;
  }
`;

const Title = styled.h1`
  margin-top: 0px; 
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 700px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const redirectToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/immadhav31/', '_blank');
};

const Hero = () => {
  return (
    <>
    
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>
            <TypingComponent />
          </Title>
          <WhatWeDo>
            <Line src="./images/line.png"/>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>Turning ideas into impactful realities through creative problem-solving.</Desc>
          <Button onClick={redirectToLinkedIn}>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={2.7}>
              <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2}/>
            </Sphere>
          </Canvas>
          <Img src="./images/moon4.png"/>
        </Right>
      </Container>
    </Section>
    </>
  )
}

export default Hero;
