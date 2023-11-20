import React, { useState } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.div`
  height : 100vh;
  scroll-snap-align: center;
  animation: animateIn 1s forward;
  
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  transition: transform 0.5s ease-in-out;
  @media only screen and (max-width: 768px) {
    margin-top:500px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <Section>
      <Container data-oas="fade-up">
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name'/>
            <Input placeholder='Email'/>
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {submitted && (
              "Thanks for reaching out! 😊 This form is just a demo to display the design. We'll get back to you soon! :)"
            )}
            <p>© Madhav, 2023</p>
          </Form>
        </Left>
      </Container>
      
    </Section>
  )
}

export default Contact;
