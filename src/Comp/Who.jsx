import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';


const Section = styled.div`
  height : 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -230px;
  }

`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-top: -200px;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
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
      transform: translateY(20px);
    }
  }
`;

const redirectToGitHub = () => {
  window.open('https://github.com/immadhav31', '_blank');
};

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[6,6,6]}}>
            <Cube/>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
          </Canvas>
        </Left>
        <Right>
          <Title>Think Out of the Box!</Title>
          <WhatWeDo>
            <Line src="./images/line.png"/>
            <Subtitle>Who we are?</Subtitle>
          </WhatWeDo>
          <Desc>A creative group of like-minded individuals driven by a passion for innovation, exploration, and a shared passion for imaginative pursuits.</Desc>
          <Button onClick={redirectToGitHub}>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;
