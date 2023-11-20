import React from 'react';
import Hero from './Comp/Hero';
import Who from './Comp/Who';
import Works from './Comp/Works';
import Contact from './Comp/Contact';
import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth; 
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./images/background.jpeg');
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
