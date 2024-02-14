import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
//import { ChakraProvider } from '@chakra-ui/react'
// import Login from './components/forum/Login.jsx';
import AIML from './components/Branches/aiml.jsx';
import CS from './components/Branches/cs.jsx';
import CSIT from './components/Branches/csit.jsx';
import DS from './components/Branches/ds.jsx';
import Infrastructure from './components/infrastructure/Infrastructure.jsx';
import Contactus from './components/contact-us/Contactus.jsx';
import Club from './components/Happenings/club.jsx';
import DevelopmentTeam from './components/development-team/DevelopmentTeam.jsx';
import Footer from './components/footer.jsx';
import Login from './components/admin/Login.jsx';
import Adminportal from './components/admin/Adminportal.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the current location is '/admin'
  const isAdminPage = location.pathname === '/adminPortal' || location.pathname === '/admin';

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        {/* <Route path="/login" element={<Login/>}/>  */}
        <Route path="/aiml" element={<AIML />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/csit" element={<CSIT />} />
        <Route path="/ds" element={<DS />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path="/club" element={<Club />} />
        <Route path="/development-team" element={<DevelopmentTeam />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/adminPortal"
          element={<Adminportal isAccessedByAdmin={true} />}
        />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
