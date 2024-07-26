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
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`

`
const Title = styled.div`

`
const WhatWeDo = styled.div`

`
const Line = styled.div`

`
const Subtitle = styled.div`

`
const Description = styled.div`

`
const Button = styled.div`

`
const Right = styled.div`

`
const Img = styled.div`

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
