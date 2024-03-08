import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import ProfileContent from "./ProfileContent";
import ForumContent from "./ForumContent";
import AttendanceContent from "./AttendanceContent";

export default function Forum() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
  const [studentId, setStudentId] = useState(null); // State to store the student ID
  const [selectedContent, setSelectedContent] = useState('forum'); // State to track the selected content
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("usertoken");
    if (userToken) {
      setIsLoggedIn(true);
      axios.get("http://localhost:9000/verify", {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      .then(response => {
        setStudentId(response.data.UserID);
        axios.get("http://localhost:9000/getStudentByRollNo/"+response.data.UserID).then((res)=>{
          
          setUserData(res.data.Student_Data);
        })
      })
      .catch(error => {
        console.error("Error verifying user:", error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col">
      <header className="py-2 border-b border-gray-200">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-2xl font-semibold">Action Center</h1>
          {userData && (
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-2">
              <p className="text-sm text-blue-700 font-semibold">Welcome, {userData.firstName} {userData.lastName}</p>
            </div>
          )}
        </div>
      </header>
      <div className="flex-grow p-4">
        {isLoggedIn ? (
          <div>
            <Tabs setSelectedContent={setSelectedContent} selectedContent={selectedContent} />
            <div className="mt-2">
              {selectedContent === 'forum' && <ForumContent userData={userData} />}
              {selectedContent === 'profile' && <ProfileContent userData={userData} />}
              {selectedContent === 'attendance' && <AttendanceContent userData={userData} />}
            </div>
          </div>
        ) : (
          <h1 className="text-center text-lg font-semibold">Please login to view the forum</h1>
        )}
      </div>
    </div>
  );
}

function Tabs({ setSelectedContent, selectedContent }) {
  const tabs = [
    { id: 'forum', label: 'Forum', icon: faComment },
    { id: 'profile', label: 'Profile', icon: faUser },
    { id: 'attendance', label: 'Attendance', icon: faCalendarCheck }
  ];

  const handleTabClick = (itemId) => {
    setSelectedContent(itemId);
  };

  return (
    <div className="flex justify-center mb-2">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          onClick={() => handleTabClick(tab.id)} 
          className={`mx-1 px-3 py-1 rounded-lg focus:outline-none ${tab.id === selectedContent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          <FontAwesomeIcon icon={tab.icon} className="mr-1" />
          {tab.label}
        </button>
      ))}
    </div>
  );
}








