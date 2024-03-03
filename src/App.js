import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home.jsx';
import Faculty from './components/Faculty/faculty.jsx';
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
import LoginForm from './components/LoginForm';
import Forum from './components/forum/Forum.jsx';
import Comment from './components/forum/Comment.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bugreport from './components/Bugreport.jsx';
import Activites from './components/Home/Home-Children/Activites.jsx';
import Outcomes from './components/Home/Home-Children/Outcomes.jsx';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
  const [isLoginFormVisible, setLoginFormVisible] = useState(false); // State to manage login form visibility
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // State to manage logout confirmation dialog

  // Check if the current location is '/admin' or '/adminPortal'
  const isAdminPage = location.pathname === '/admin' || location.pathname === '/adminPortal';

  // Function to toggle login form visibility
  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  // Function to handle user logout confirmation
  const confirmLogout = () => {
    localStorage.removeItem('usertoken');
    setIsLoggedIn(false);
    setShowLogoutConfirmation(false);
    toast.success("Logout successful!");
    window.location.reload();
  };

  // Function to handle user login
  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success("Login successful!");
  };

  // Function to check if user is already logged in
  useEffect(() => {
    const userToken = localStorage.getItem('usertoken');
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div style={{ zoom: '90%' }} > {/* Set default zoom to 90% */}
      <div className="confirmation-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ display: showLogoutConfirmation ? 'flex' : 'none' }}>
        <div className="confirmation-content bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">Are you sure you want to logout?</p>
          <div className="flex justify-end">
            <button onClick={confirmLogout} className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Yes</button>
            <button onClick={() => setShowLogoutConfirmation(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">No</button>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {!isAdminPage && (<Navbar />)}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/aiml" element={<AIML />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/csit" element={<CSIT />} />
        <Route path="/ds" element={<DS />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path="/club" element={<Club />} />
        <Route path="/development-team" element={<DevelopmentTeam />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/Activities" element={<Activites/>}/>
        <Route path="/Outcomes" element={<Outcomes/>}/>
        <Route
          path="/adminPortal"
          element={<Adminportal isAccessedByAdmin={true} />}
        />
        <Route path="/comment/:postId" element={<Comment  />} />
        <Route path="/bugreport" element={<Bugreport />} />
      </Routes>
      {!isAdminPage && (
        <>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="fixed bottom-2 bg-white right-0 ml-4 p-3 rounded-l-xl text-gray-500 hover:text-gray-700 hover:scale-105  flex items-center shadow-md animate-shake-x"
              style={{ zIndex: 50 }}
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Logout
            </button>
          ) : (
            <button
              onClick={() => setLoginFormVisible(true)}
              className="fixed bottom-2 bg-white right-0 ml-4 p-3 rounded-l-xl text-gray-500 hover:text-gray-700 hover:scale-105  flex items-center shadow-md animate-shake-x"
              style={{ zIndex: 50 }}
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Login
            </button>
          )}
        </>
      )}
      {isLoginFormVisible && !isLoggedIn && <LoginForm onClose={() => setLoginFormVisible(false)} toast={toast} />}
      {!isAdminPage && (<Footer />)}
    </div>
  );
}

export default App;
