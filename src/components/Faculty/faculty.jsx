import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./faculty.css";
import {
  faChevronDown,
  faChevronUp,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ selectedFaculty, onClose }) => {
  const [specs, setSpecs] = useState(false);
  const [publications, setPublications] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 max-h-[80vh] md:m-10 mb-2 overflow-auto scrollbar">
        <div className="flex justify-end mt-4 mr-4 relative">
          <FontAwesomeIcon
            icon={faTimes}
            className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-6 h-6 cursor-pointer text-gray-700"
            onClick={onClose}
          />
        </div>
        <div className="p-5">
          <div className="flex flex-col md:flex-row items-center h-1/2">
            <img
              className="faculty-image w-1/2 md:w-1/4 mb-2 rounded-md"
              alt=""
              src={selectedFaculty.picture}
            />
            <ul className="w-full text-sm font-medium text-gray-800 bg-white border rounded-md">
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Name: </b>
                {selectedFaculty.lastName} {selectedFaculty.firstName}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Designation: </b>
                {selectedFaculty.designation}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Qualification: </b>
                {selectedFaculty.education}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Date of Joining: </b>
                {selectedFaculty.joining_date.substring(0, 10)}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Branch: </b>
                {selectedFaculty.branch}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Total Papers Published: </b>
                {selectedFaculty.publications_number}
              </li>
              <li className="w-full px-4 py-3 border-b border-gray-300">
                <b>Email: </b>
                {selectedFaculty.email}
              </li>
            </ul>
          </div>
          <ul className="w-full text-sm font-medium text-gray-800 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 bg-gray-200 cursor-pointer"
              onClick={() => setSpecs(!specs)}
            >
              <span>Specialization</span>
              <FontAwesomeIcon
                icon={specs ? faChevronUp : faChevronDown}
                className="cursor-pointer text-gray-700"
              />
            </li>
            {specs && (
              <li className="w-full px-4 py-3 border-b border-gray-300 text-gray-700">
                {selectedFaculty.specialization}
              </li>
            )}
          </ul>
          <ul className="w-full text-sm font-medium text-gray-800 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 bg-gray-200 cursor-pointer"
              onClick={() => setPublications(!publications)}
            >
              <span>Publications</span>
              <FontAwesomeIcon
                icon={publications ? faChevronUp : faChevronDown}
                className="cursor-pointer text-gray-700"
              />
            </li>
            {publications && (
              <li className="w-full px-4 py-3 border-b border-gray-300 text-gray-700">
                {selectedFaculty.publications.map((item, index) => (
                  <p className="pl-2 pt-3" key={index}>
                    [{index}] {item}
                  </p>
                ))}
              </li>
            )}
          </ul>
          <ul className="w-full text-sm font-medium text-gray-800 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 bg-gray-200 cursor-pointer"
              onClick={() => setProjects(!projects)}
            >
              <span>Projects Guided</span>
              <FontAwesomeIcon
                icon={projects ? faChevronUp : faChevronDown}
                className="cursor-pointer text-gray-700"
              />
            </li>
            {projects && (
              <li className="w-full px-4 py-3 border-b border-gray-300 text-gray-700">
                <b>Projects Guided: </b>
                {selectedFaculty.projects_guided}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("");
  const [filterBranch, setFilterBranch] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [isFaculty, setIsFaculty] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("usertoken");
    if (userToken) {
      setIsLoggedIn(true);
      // Call the API to verify the user and get the student ID
      axios
        .get("http://localhost:9000/verify", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          // Set the student ID from the response
          console.log(response.data.UserID + " user id");
          setStudentId(response.data.UserID);
          axios
            .get(
              "http://localhost:9000/getFacultyByRollNo/" + response.data.UserID
            )
            .then((res) => {
              console.log(res.data);
              setUserData(res.data.FacultyData[0]);
            });
        })
        .catch((error) => {
          console.error("Error verifying user:", error);
          // Handle unauthorized or other errors
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:9000/getFaculty")
      .then((res) => {
        console.log(res.data.details);
        setFaculty(res.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFacultyClick = (item) => {
    setSelectedFaculty(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedFaculty(null);
    setOpenModal(false);
  };

  // on esc close modal
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      window.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilterDesignation = (e) => {
    setFilterDesignation(e.target.value);
  };

  const handleFilterBranch = (e) => {
    setFilterBranch(e.target.value);
  };

  const filteredFaculty = faculty
    .filter(
      (item) =>
        item.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.id.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter(
      (item) =>
        filterDesignation === "" || item.designation === filterDesignation
    )
    .filter((item) => filterBranch === "" || item.branch === filterBranch);

  const handleSave = () => {
    // Merge edited data with existing user data
    const mergedData = { ...userData, ...editedData };

    // Filter out null or empty publications
    const publications = mergedData.publications.filter(
      (publication) => publication.trim() !== ""
    );

    // Update merged data with filtered publications
    const updatedData = { ...mergedData, publications };

    console.log(updatedData);
    axios
      .post(
        "http://localhost:9000/updateFaculty/" + updatedData._id,
        updatedData
      )
      .then((res) => {
        console.log(res.data);
        setUserData(updatedData);
        toast.success("Faculty details updated successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    setOpenEditModal(false);
  };

  const onClose = () => {
    setOpenEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the edited data with the new value
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-2 ">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-96 mb-2 md:mb-0 mr-0 md:mr-4"
          placeholder="Search by Last Name, First Name, or ID"
          value={searchInput}
          onChange={handleSearch}
        />
        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-fit mr-0 md:mr-4"
          value={filterDesignation}
          onChange={handleFilterDesignation}
        >
          <option value="">Filter by Designation</option>
          <option value="Professor">Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
          <option value="Associate Professor">Associate Professor</option>
        </select>
        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-48"
          value={filterBranch}
          onChange={handleFilterBranch}
        >
          <option value="">Filter by Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>
        {isLoggedIn && userData && (
          <div className="flex space-x-3 items-center">
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-2 ml-4">
              <p className="text-sm text-blue-700 font-semibold">
                Welcome, {userData.firstName} {userData.lastName}
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none h-14"
              onClick={() => setOpenEditModal(true)}
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit
            </button>
          </div>
        )}
        {openEditModal && userData && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 max-h-[80vh] md:m-10 mb-2 overflow-auto scrollbar">
              <div className="flex justify-end mt-4 mr-4 relative">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-6 h-6 cursor-pointer text-gray-700"
                  onClick={onClose}
                />
              </div>
              <div className="p-5">
                <input
                  type="text"
                  name="firstName"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="First Name"
                  value={editedData.firstName || userData.firstName || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Last Name"
                  value={editedData.lastName || userData.lastName}
                  onChange={handleInputChange}
                />
                <select
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  value={editedData.designation || userData.designation}
                  onChange={handleInputChange}
                  name="designation"
                >
                  <option value="Professor">Professor</option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="Associate Professor">
                    Associate Professor
                  </option>
                </select>

                <input
                  type="text"
                  name="education"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Education"
                  value={editedData.education || userData.education}
                  onChange={handleInputChange}
                />

                <select
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  value={editedData.branch || userData.branch}
                  onChange={handleInputChange}
                  name="branch"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>

                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Email"
                  value={editedData.email || userData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="date"
                  name="joining_date"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Joining Date"
                  value={
                    editedData.joining_date ||
                    userData.joining_date.substring(0, 10)
                  }
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="specialization"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Specialization"
                  value={editedData.specialization || userData.specialization}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="publications_number"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Publications Number"
                  value={
                    editedData.publications_number ||
                    userData.publications_number
                  }
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="projects_guided"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                  placeholder="Projects Guided"
                  value={editedData.projects_guided || userData.projects_guided}
                  onChange={handleInputChange}
                />
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none"
                  onClick={() => {
                    const newPublications = userData.publications;
                    newPublications.push("");
                    setEditedData({
                      ...editedData,
                      publications: newPublications,
                    });
                  }}
                >
                  Add Publication
                </button>
                {userData.publications.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      name="publications"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                      placeholder="Publications"
                      value={item}
                      onChange={(e) => {
                        const newPublications = userData.publications;
                        newPublications[index] = e.target.value;
                        setEditedData({
                          ...editedData,
                          publications: newPublications,
                        });
                      }}
                      required
                    />
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md ml-2 focus:outline-none"
                      onClick={() => {
                        const newPublications = userData.publications;
                        newPublications.splice(index, 1);
                        setEditedData({
                          ...editedData,
                          publications: newPublications,
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}

                <div className="flex justify-center mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 focus:outline-none"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 pl-10 pr-10">
        {filteredFaculty.map((item) => (
          <div key={item.id} className="p-2">
            <div
              className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleFacultyClick(item)}
            >
              <div>
                <img
                  className="w-full aspect-w-2 aspect-h-2 rounded-t-lg m-auto"
                  src={item.picture}
                  alt=""
                />
              </div>
              <div className="p-2 text-center">
                <h1 className="text-lg font-semibold mb-1">
                  {item.firstName} {item.lastName}
                </h1>
                <h2 className="text-sm text-gray-600">{item.designation}</h2>
                <p className="text-xs font-thin education">{item.education}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openModal && selectedFaculty && (
        <Modal selectedFaculty={selectedFaculty} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Faculty;
