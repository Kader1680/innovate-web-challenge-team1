import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Organizer from './components/Organizer';
import Footer from './components/Footer';
import { createContext, useState } from 'react';
export const ThemeContext  = createContext("")

function App() {
  const [dark, setdark] = useState("");
  const  dartAction = () =>{
    setdark(!dark)
  }
  return (
    <BrowserRouter>
        <ThemeContext.Provider value={dark}>
        <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : ""  }} >
        <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : ""  }} className="App">
          <Navbar />
          <button className='border-0 bg-transparent' onClick={dartAction} >
          <i style={{ fontSize:"30px", zIndex:"4", left:34 }} class="fa-solid fa-circle-half-stroke position-fixed top-50 "></i>
          </button>
          <Header/>
          <About />
          <Events />
          <Organizer />
          <hr ></hr>
          <Footer />
        </div>
        </div>
        </ThemeContext.Provider>
    </BrowserRouter>

  );
}

export default App;
