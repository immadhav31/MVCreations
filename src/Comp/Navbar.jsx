import React,{ useState } from 'react'
import styled from 'styled-components'
import Home from './Hero';
import Who from './Who';
import Works from './Works';
import Contact from './Contact';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 80px;

`;
const List = styled.ul`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  List-style-type: None;
  transition: color 0.3s ease;

  &:hover {
    color: pink;
  }
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./images/logo1.png"/>
            <List>
              <ListItem onClick={() => setCurrentPage('Home')}>Home</ListItem>
              <ListItem onClick={() => setCurrentPage('Who')}>About</ListItem>
              <ListItem onClick={() => setCurrentPage('Works')}>Works</ListItem>
              <ListItem onClick={() => setCurrentPage('Contact')}>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./images/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>

        
    </Section>
  )
}

export default Navbar;