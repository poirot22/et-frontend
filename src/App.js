import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';

function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>          
        </Routes>

    
      </>
  );
}

export default App;
