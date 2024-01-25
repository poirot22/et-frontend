import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
//import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/forum/Login.jsx';
import AIML from './components/Branches/aiml.jsx';
import Infrastructure from './components/infrastructure/Infrastructure.jsx';


function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>       
          <Route path="/faculty" element={<Faculty/>}/>  
          <Route path="/login" element={<Login/>}/> 
        </Routes>
      
      </>
      

  );
}

export default App;
