import SongCompilation from './components/SongCompilation';
import Navbar from './Navbar';
import AboutUs from "./navbar/routes/AboutUs";
import { Routes, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={ <SongCompilation /> }/>
        <Route path="/AboutUs" element={ <AboutUs /> }/>
      </Routes>
    </div>
  </>  
    
  );
}

export default App;
