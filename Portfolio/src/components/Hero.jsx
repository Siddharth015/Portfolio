import React from 'react'
import styled from 'styled-components'  
import Navbar from './Navbar'
const Section = styled.div`
height: 100vh;

scroll-snap-align: center;
display: flex;
flex-direction: column;
align items: center;
justify-content: space-between;
`
const Container = styled.div`

height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 100px;
`
const Title = styled.h1`
 font-size: 60px;
`
const WhatWeDo = styled.div`
 display: flex;
 margin-top: -30px;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`

  color: #da4ea2;

`
const Description = styled.p`
  font-size: 24px;
  color: lightgray;

`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Right = styled.div`
flex: 3;
  position: relative;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
}

  
`
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
`
const Hero = () => {
  return (
    <Section>
      <Navbar/>
   <Container>
    <Left>
      <Title>Hey! I am Siddharth Shukla</Title>
      <WhatWeDo>
      <Line src="./img/line.png"/>
      <Subtitle>Software Engineer</Subtitle>
      </WhatWeDo>
      <Description>
      I am a pre-final year student at National Institute of Technology, Patna. I am a passionate software developer and a competitive programmer. I have a keen interest in web development and have worked on various projects. I am a quick learner and always ready to learn new technologies.
      </Description>
      <Button>More about me!</Button>
    </Left>
    <Right>
      {/* 3d model */}
      <Img src="./img/moon.png"/>
    </Right>
   </Container>
    </Section>
  )
}

export default Hero
