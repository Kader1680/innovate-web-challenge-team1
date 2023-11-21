import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Organizer from './components/Organizer';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header/>
          <About />
          <Events />
          <Organizer />
          <hr></hr>
          <Footer />
        </div>
    </BrowserRouter>

  );
}

export default App;
