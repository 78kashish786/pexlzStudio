
import './App.css';
import Clients from './components/Clients.js';
import ContactSection from './components/ContactSection.js';
import HeroSection from './components/HeroSection.js';
import MainFooter from './components/MainFooter.js';
import MainHeader from './components/MainHeader.js';
import Projects from './components/Projects.js';
import Services from './components/Services.js';import { RiInstagramFill } from "react-icons/ri";

function App() {
  return (
    <>
    
    <div className="App">
      <MainHeader/>
      <HeroSection/>
      <Clients/>
      <Services/>
      <Projects/>
      <ContactSection/>
      <MainFooter/>
    </div>
    {/* <div className='fixed right-0 top-[50%] bottom-[50%] bg-cyan-400 '>
      <ul className='p-3 bg-cyan-400 rounded-sm space-y-3'>
        <li><RiInstagramFill size={30} color=''/></li>
        <li><RiInstagramFill size={30} color=''/></li>
        <li><RiInstagramFill size={30} color=''/></li>
      </ul>
    </div> */}
    </>
  );
}

export default App;
