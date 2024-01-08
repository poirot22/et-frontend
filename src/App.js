import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Carousel from './components/Carousel.jsx';


function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>          
        </Routes>
        <Carousel/>
      </>
      

  );
}

export default App;
