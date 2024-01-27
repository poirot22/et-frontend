import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
//import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/forum/Login.jsx';
import AIML from './components/Branches/aiml.jsx';
import Infrastructure from './components/infrastructure/Infrastructure.jsx';
import Contactus from './components/contact-us/Contactus.jsx';


function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>       
          <Route path="/faculty" element={<Faculty/>}/>  
          <Route path="/login" element={<Login/>}/> 
          <Route path="/aiml" element={<AIML/>}/>
          <Route path='/infrastructure' element={<Infrastructure/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
      
      </>
      

  );
}

export default App;
