import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header/>
        </div>
    </BrowserRouter>

  );
}

export default App;
