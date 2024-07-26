import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact'; 
import styled, { createGlobalStyle }from 'styled-components';
import Navbar from './components/Navbar';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: Arial, sans-serif; /* Adjust as necessary */
  }

  #root {
    height: 100%;
  }
`;
const Container = styled.div`
 height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior: smooth;
 overflow-y: auto;
 color: white;

 scrollbar-width: none;
  background: url("/img/bg.jpeg") no-repeat center center/cover;
 &::-webkit-scrollbar {display: none;}
`;
function App() {
  return (
    <Container>
     
      <Hero />
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}
export default App;