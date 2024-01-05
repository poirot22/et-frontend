import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/forum/Login.jsx';

function App() {
  return (
    <> 
     <Navbar />
   
     
        <Routes>
          <Route path="/home" element={<Home/>}/>    
          <Route path='/login' element={<Login/>}/>      
        </Routes>

    
      </>
  );
}

export default App;
