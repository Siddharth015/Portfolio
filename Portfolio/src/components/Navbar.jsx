import React from 'react'

import styled from 'styled-components'
const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Links = styled.div`

`
const Logo = styled.div`

`
const List = styled.div`

`
const Item = styled.div`

`
const Icons = styled.div`

`
const Button = styled.div`

`
const Navbar = () => {
  return (
    <Section>
     <Container>
        <Links>
        <List>
        <Item>Home</Item>
        <Item>Works</Item>
        <Item>Contact</Item>


        </List>
        </Links>

        <Icons>
            <button>Hire Now</button>
        </Icons>

     </Container>

    </Section>
  )
}

export default Navbar
