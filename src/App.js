import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>       
          <Route path="/faculty" element={<Faculty/>}/>   
        </Routes>

    
      </>
  );
}

export default App;
