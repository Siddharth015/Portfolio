import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact'; 
import styled from 'styled-components';
import Navbar from './components/Navbar';

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