// DevelopmentTeam.js
import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import cvr from "../../assets/cvr.png";
import shivaram from "../../assets/shivaram.jpg";
import sainikhil from "../../assets/sainikhil.jpg";
import bharghav from "../../assets/bharghav.jpg";
import saitejas from "../../assets/saitejas.jpg";

const DevelopmentTeam = () => {
  const teamMembers = [
    {
      id: "20B81A3395",
      name: "Gubbala Sai Nikhil",
      role: "Developer",
      image: sainikhil,
      linkedin: "https://www.linkedin.com/in/gubbala-sai-nikhil-633aa420b/",
      github: "https://github.com/Nikhil5022",
      instagram: "https://www.instagram.com/sainikhilgubbala/",
    },
    {
      id: "20B81A3396",
      name: "Hulsoor Sai Tejas",
      role: "Developer",
      image: saitejas,
      linkedin: "https://www.linkedin.com/in/saitejas-hulsoor/",
      github: "https://github.com/poirot22/",
      instagram: "https://www.instagram.com/tejas_mmii/?hl=en",
    },
    {
      id: "20B81A33A2",
      name: "Mittakola Shivaram",
      role: "Developer",
      image: shivaram,
      linkedin: "https://www.linkedin.com/in/shivaram-mittakola/",
      github: "https://github.com/ShivaRam009",
      instagram: "https://www.instagram.com/shivarammittakola/",
    },
    {
      id: 3,
      name: "Mr. S. Bharghav",
      role: "Assistant Professor & Guide (CSIT)",
      image: bharghav,
      linkedin: "https://www.linkedin.com/in/guidename",
      github: "https://github.com/guidename",
      instagram: "https://www.instagram.com/guidename/",
    },
    
  ];

  const guides = teamMembers.filter((member) => member.role === "Assistant Professor & Guide (CSIT)");
  const students = teamMembers.filter((member) => member.role !== "Assistant Professor & Guide (CSIT)");

  // Animation for guides
  const fadeInGuides = useSpring({
    from: { opacity: 0.2 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  // UseInView hook to trigger students' animation when in view
  const [studentsRef, studentsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // Adjust root margin as needed
  });

  // Animation for students
  const fadeInStudents = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: studentsInView ? 1 : 0 },
    config: { duration: 300 },
  });

  return (
    <div className="relative text-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">
        Development Team
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Faculty Guide</h2>
        <animated.div style={fadeInGuides} className="flex justify-center items-center flex-wrap">
          {guides.map((member) => (
            <animated.div
              key={member.id}
              style={fadeInGuides}
              className="m-4 text-center border-2 border-blue-700 rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* College Logo for Guides */}
              <div className="absolute top-0 right-0 m-2">
                <img
                  src={cvr} // Replace with the actual path to your college logo
                  alt="College Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4 border-2 border-blue-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-700 transition duration-300 ease-in-out">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-2">{member.role}</p>
              {/* <p className="text-gray-600 mb-2">{member.id}</p> */}
              <div className="flex justify-center space-x-4 m-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-500"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-500"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 hover:text-pink-500"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </animated.div>
          ))}
        </animated.div>
      </div>

      <div ref={studentsRef}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Students</h2>
        <animated.div style={fadeInStudents} className="flex justify-center items-center flex-wrap">
          {students.map((member) => (
            <animated.div
              key={member.id}
              style={fadeInStudents}
              className="m-4 text-center border-2 border-blue-700 rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* College Logo for Students */}
              <div className="absolute top-0 right-0 m-2">
                <img
                  src={cvr} // Replace with the actual path to your college logo
                  alt="College Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4 border-2 border-blue-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-700 transition duration-300 ease-in-out">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-2">{member.id}</p>
              <div className="flex justify-center space-x-4 m-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-500"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-500"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 hover:text-pink-500"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default DevelopmentTeam;
