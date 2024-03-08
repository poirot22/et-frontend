import React, { useState, useEffect } from "react";
import AddFacultyDialog from "../admin/AddFacultyDialog.jsx";
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
  const [workshops, setWorkshops] = useState(false);
  const [projects, setProjects] = useState(false);
  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center overflow-auto">
      <div className="details rounded-lg shadow-lg w-4/5 md:w-4/5 max-h-[90vh] md:m-10 mb-2 overflow-auto scrollbar">
        <div className="flex justify-end mt-4 mr-4 relative">
          <FontAwesomeIcon
            icon={faTimes}
            className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-6 h-6 cursor-pointer text-gray-700"
            onClick={onClose}
          />
        </div>
        <div className="p-5 details">
          <div className="flex flex-col md:flex-row items-center h-1/2">
            <img
              className="faculty-image w-1/3 md:w-1/4 mb-2 rounded-md"
              alt=""
              src={selectedFaculty.picture}
            />
            <ul className="w-full ml-10 mr-5 font-medium text-gray-800 bg-white border rounded-md">
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
          <ul className="w-full pt-5 text-xl  text-blue-600 rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 bg-white cursor-pointer rounded-md"
              onClick={() => setSpecs(!specs)}
            >
              <span>Specialization</span>
              <FontAwesomeIcon
                icon={specs ? faChevronUp : faChevronDown}
                className="cursor-pointer text-blue-700"
              />
            </li>
            {specs && (
              <li className="w-full px-4 py-3 border-b border-gray-300 bg-white  text-black text-base rounded-md">
                {selectedFaculty.specialization}
              </li>
            )}
          </ul>
          <ul className="w-full text-xl  text-blue-600 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300  cursor-pointer rounded-md"
              onClick={() => setPublications(!publications)}
            >
              <span>Publications</span>
              <FontAwesomeIcon
                icon={publications ? faChevronUp : faChevronDown}
                className="cursor-pointer"
              />
            </li>
            {publications && (
              <li className="w-full px-4 py-3 border-b border-gray-300 text-black text-base rounded-md">
                {selectedFaculty.publications.map((item, index) => (
                  <p className="pl-2 pt-3 text-base" key={index}>
                    [{index}] {item}
                  </p>
                ))}
              </li>
            )}
          </ul>
          <ul className="w-full text-xl  text-blue-600 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300  cursor-pointer rounded-md"
              onClick={() => setWorkshops(!workshops)}
            >
              <span>Workshops</span>
              <FontAwesomeIcon
                icon={workshops ? faChevronUp : faChevronDown}
                className="cursor-pointer"
              />
            </li>
            {workshops && (
              <li className="w-full px-4 py-3 border-b border-gray-300 text-black text-base rounded-md">
                {selectedFaculty.workshops.map((item, index) => (
                  <p className="pl-2 pt-3 text-base" key={index}>
                    [{index}] {item}
                  </p>
                ))}
              </li>
            )}
          </ul>
          <ul className="w-full text-xl  text-blue-600 bg-white border rounded-md">
            <li
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300  cursor-pointer rounded-md"
              onClick={() => setProjects(!projects)}
            >
              <span>Projects Guided</span>
              <FontAwesomeIcon
                icon={projects ? faChevronUp : faChevronDown}
                className="cursor-pointer text-blue-600"
              />
            </li>
            {projects && (
              <li className="w-full px-4 py-3 border-b text-black border-gray-300 rounded-md text-base">
                <b>Total Projects Guided: </b>
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  

  const [formData, setFormData] = useState({
    faculty_id: "",
    faculyName:"",
    title: "",
    issn: "",
    journal: "",
    year_of_publication: "",
    citation:"",
    
  });

  const [formData1, setFormData1] = useState({
    faculty_id: "",
    facultyName:"",
    title: "",
    startDate:"",
    endDate:"",
    organizedBy: "",
    scope:"",
    type:"",
    
  });




  const handlePublicationsChange = (e) => {
    // Update the corresponding field in the formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Use the 'name' attribute of the input field as the key
    });
  };

  const handleWorkshopsChange = (e) => {
    // Update the corresponding field in the formData state
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value // Use the 'name' attribute of the input field as the key
    });
  };





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
          formData.faculty_id=response.data.UserID;

         

          formData1.faculty_id=response.data.UserID;
          axios
            .get(
              "http://localhost:9000/getFacultyByRollNo/" + response.data.UserID
            )
            .then((res) => {
              console.log(res.data);
              formData.facultyName=res.data.FacultyData[0].firstName+" "+res.data.FacultyData[0].lastName;
              formData1.facultyName=res.data.FacultyData[0].firstName+" "+res.data.FacultyData[0].lastName;
              console.log(formData1.facultyName);
              setUserData(res.data.FacultyData[0]);
            });
        })
        .catch((error) => {
          console.error("Error verifying user:", error);
          // Handle unauthorized or other errors
        });
    }
  }, []);


  const addPublications=(formData)=>{
    console.log(formData.journal);
    console.log(userData.publications);
    userData.publications.push(formData.title);
    axios.post("http://localhost:9000/addPublication", formData).then((res)=>{
      toast.success("Publication Added successfully");
      console.log(res);
    });
};



const handleSubmit = (e) => {
  e.preventDefault();

  

  // Call the onAddFaculty function with the form data
  addPublications(formData);

  // Clear form data after submission
  setFormData({
    faculty_id: "",
    facultyName:"",
    title: "",
    issn: "",
    journal: "",
    year_of_publication: "",
    citation:"",
  });
};

const addWorkshops=(formData)=>{
  
  userData.workshops.push(formData.title);
  console.log(formData.title);
  axios.post("http://localhost:9000/addWorkshop", formData).then((res)=>{
    toast.success("Workshop Added successfully");
    console.log(res);
  });
};


const handleSubmit1= (e) => {
  e.preventDefault();

  

  // Call the onAddFaculty function with the form data
  addWorkshops(formData1);

  // Clear form data after submission
  setFormData1({
    faculty_id: "",
    facultyName:"",
    title: "",
    startDate:"",
    endDate:"",
    organizedBy: "",
    scope:"",
    type:"",
    
  });

};
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
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-fit mr-2 md:mr-4"
          value={filterDesignation}
          onChange={handleFilterDesignation}
        >
          <option value="">Filter by Designation</option>
          <option value="Professor">Professor</option>
          <option value="Associate Professor">Associate Professor</option>
          <option value="Senior Assistant Professor">Senior Assistant Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
          
        </select>
        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-48"
          value={filterBranch}
          onChange={handleFilterBranch}
        >
          <option value="">Filter by Branch</option>
          <option value="CSIT">CSIT</option>
          <option value="CSE(AI & ML)">CSE(AI & ML)</option>
          <option value="CSE(Cyber Security)">CSE(Cyber Security)</option>
          <option value="CSE(Data Science)">CSE(Data Science)</option>
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
              onClick={() => {
                formData.faculty_id=userData.id
                setOpenEditModal(true)}}
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
                  <option value="Senior Assistant Professor">
                    Senior Assistant Professor
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
                  <option value="CSIT">CSIT</option>
                  <option value="CSE(AI & ML)">
                    CSE(AI & ML)
                  </option>
                  <option value="CSE(Cyber Security)">
                  CSE(Cyber Security)
                  </option>
                  <option value="CSE(Data Science)">CSE(Data Science)</option>
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
                    setIsDialogOpen(true);
                    newPublications.push("");
                    setEditedData({
                      ...editedData,
                      publications: newPublications,
                    });
                  }}
                >
                  Add Publication
                </button>
                
                  <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handlePublicationsChange}
                        required
                    />
                    <label htmlFor="issn">ISSN Number</label>
                    <input
                        type="text"
                        name="issn"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="ISSN "
                        value={formData.issn}
                        onChange={handlePublicationsChange}
                        required
                    />
                    <label htmlFor="journal">Journal</label>
                    <select
                        type="text"
                        name="journal"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        
                        value={formData.journal}
                        onChange={handlePublicationsChange}
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="SCI">SCI</option>
                        <option value="SCIE">SCIE</option>
                        <option value="Scopus">Scopus</option>
                        <option value="IEEE Explore">IEEE Explore</option>
                    </select>
                    
                    <label htmlFor="indexing">Indexing</label>
                    <input
                        type="text"
                        name="indexing"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Indexing"
                        value={formData.indexing}
                        onChange={handlePublicationsChange}
                        required
                      />
                    <label htmlFor="year_of_publication">Year of Publication</label>
                    <input
                        type="date"
                        name="year_of_publication"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Year of Publication"
                        value={formData.year_of_publication}
                        onChange={handlePublicationsChange}
                        required
                      />
                    <label htmlFor="year">Citation</label>
                    <input
                        type="text"
                        name="citation"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Citation"
                        value={formData.citation}
                        onChange={handlePublicationsChange}
                        required
                      />
                      <div class="flex flex-row items-center">
                        <button
                        className="px-4 py-2 bg-green-500 text-white rounded-md ml-2 focus:outline-none" type="submit">
                        Add
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded-md ml-2 focus:outline-none"
                        >
                          Delete
                        </button>
                      
                    
                    </div>
                    
                  </div>
                </form>

                <form onSubmit={handleSubmit1}>
                  <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Title"
                        value={formData1.title}
                        onChange={handleWorkshopsChange}
                        required
                    />
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Start Date"
                        value={formData1.startDate}
                        onChange={handleWorkshopsChange}
                        required
                    />
                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="End Date"
                        value={formData1.endDate}
                        onChange={handleWorkshopsChange}
                        required
                    />
                    <label htmlFor="organizedBy">Organized By</label>
                      <input
                        type="text"
                        name="organizedBy"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        placeholder="Organized by"
                        value={formData1.organizedBy}
                        onChange={handleWorkshopsChange}
                      />
                    
                    <label htmlFor="scope">Scope</label>
                    <select
                        
                        name="scope"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        value={formData1.scope}
                        onChange={handleWorkshopsChange}
                        required
                      >
                        <option value="">Select Scope</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>

                    <label htmlFor="type">Type</label>
                    <select
                        type="text"
                        name="type"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
                        
                        value={formData1.type}
                        onChange={handleWorkshopsChange}
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="FDP">FDP</option>
                        <option value="Conference">Conference</option>
                        <option value="SDP">SDP</option>
                        <option value="Webinar">Webinar</option>
                    </select>
                    
                      <div class="flex flex-row items-center">
                        <button
                        className="px-4 py-2 bg-green-500 text-white rounded-md ml-2 focus:outline-none" type="submit">
                        Add
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded-md ml-2 focus:outline-none"
                        >
                          Delete
                        </button>
                      
                    
                    </div>
                    
                  </div>
                </form>

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
      <div>
      <div>

      {/*Filter By Search*/}
      {searchInput && (
        <div>
          <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Search Results</h1></div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
            {filteredFaculty.map((item) => (
              <div
                key={item.id}
                className="p-4"
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleFacultyClick(item)}
                >
                  <div className="">
                    <img
                      className="rounded-t-lg m-auto"
                      src={item.picture}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pl-4 pr-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.firstName} {item.lastName}
                    </h1>
                    <h2 className="text-base text-gray-600">
                      {item.designation}
                    </h2>
                    <p className="text-xl font-thin education">{item.education}</p>
                  </div>
                </div>
              </div>

              
            ))}
          </div>
          </div>
      )}
      {/*filter by designation*/}
      {filterDesignation==='Professor' && (
        <div>
          <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
            {filteredFaculty.map((item) => (
              item.designation==='Professor' && (<div
                key={item.id}
                className="p-4"
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleFacultyClick(item)}
                >
                  <div className="">
                    <img
                      className="rounded-t-lg m-auto"
                      src={item.picture}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pl-4 pr-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.firstName} {item.lastName}
                    </h1>
                    <h2 className="text-base text-gray-600">
                      {item.designation}
                    </h2>
                    <p className="text-xl font-thin education">{item.education}</p>
                  </div>
                </div>
              </div>)

              
            ))}
          </div>
          </div>
      )}
      {filterDesignation==='Associate Professor' && (
        <div>
          <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
            {filteredFaculty.map((item) => (
              item.designation==='Associate Professor' && (<div
                key={item.id}
                className="p-4"
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleFacultyClick(item)}
                >
                  <div className="">
                    <img
                      className="rounded-t-lg m-auto"
                      src={item.picture}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pl-4 pr-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.firstName} {item.lastName}
                    </h1>
                    <h2 className="text-base text-gray-600">
                      {item.designation}
                    </h2>
                    <p className="text-xl font-thin education">{item.education}</p>
                  </div>
                </div>
              </div>)

              
            ))}
          </div>
          </div>
      )}
      
      {filterDesignation==='Senior Assistant Professor' && (
        <div>
          <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
            {filteredFaculty.map((item) => (
              item.designation==='Senior Assistant Professor' && (<div
                key={item.id}
                className="p-4"
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleFacultyClick(item)}
                >
                  <div className="">
                    <img
                      className="rounded-t-lg m-auto"
                      src={item.picture}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pl-4 pr-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.firstName} {item.lastName}
                    </h1>
                    <h2 className="text-base text-gray-600">
                      {item.designation}
                    </h2>
                    <p className="text-xl font-thin education">{item.education}</p>
                  </div>
                </div>
              </div>)

              
            ))}
          </div>
          </div>
      )}
      {filterDesignation==='Assistant Professor' && (
        <div>
          <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
            {filteredFaculty.map((item) => (
              item.designation==='Assistant Professor' && (<div
                key={item.id}
                className="p-4"
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleFacultyClick(item)}
                >
                  <div className="">
                    <img
                      className="rounded-t-lg m-auto"
                      src={item.picture}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 pl-4 pr-4 text-center">
                    <h1 className="text-xl font-semibold mb-2">
                      {item.firstName} {item.lastName}
                    </h1>
                    <h2 className="text-base text-gray-600">
                      {item.designation}
                    </h2>
                    <p className="text-xl font-thin education">{item.education}</p>
                  </div>
                </div>
              </div>)

              
            ))}
          </div>
          </div>
      )}

      {/*filter by Branch*/}
      {filterBranch==='CSIT' && !filterDesignation && !searchInput && (
      <div> {/*Faculty Show*/} 

          {/*Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
          {filteredFaculty.map((item) => (
            item.branch==='CSIT' && item.designation==='Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)

            
          ))}
        </div>

        {/*Associate Professors*/ }

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSIT' && item.designation==='Associate Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        {/*Senior Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSIT' &&  item.designation==='Senior Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSIT' && item.designation==='Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
          
        </div>
      </div>)}
      
      {filterBranch==='CSE(AI & ML)' && !filterDesignation && !searchInput && (
      <div> {/*Faculty Show*/} 

          {/*Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
          {filteredFaculty.map((item) => (
            item.branch==='CSE(AI & ML)' && item.designation==='Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)

            
          ))}
        </div>

        {/*Associate Professors*/ }

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(AI & ML)' && item.designation==='Associate Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        {/*Senior Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(AI & ML)' &&  item.designation==='Senior Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(AI & ML)' && item.designation==='Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
          
        </div>
      </div>)}

      {filterBranch==='CSE(Cyber Security)' && !filterDesignation && !searchInput && (
      <div> {/*Faculty Show*/} 

          {/*Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Cyber Security)' && item.designation==='Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)

            
          ))}
        </div>

        {/*Associate Professors*/ }

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Cyber Security)' && item.designation==='Associate Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        {/*Senior Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Cyber Security)' &&  item.designation==='Senior Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Cyber Security)' && item.designation==='Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
          
        </div>
      </div>)}


      {filterBranch==='CSE(Data Science)' && !filterDesignation && !searchInput && (
      <div> {/*Faculty Show*/} 

          {/*Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Data Science)' && item.designation==='Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)

            
          ))}
        </div>

        {/*Associate Professors*/ }

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Data Science)' && item.designation==='Associate Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        {/*Senior Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Data Science)' &&  item.designation==='Senior Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.branch==='CSE(Data Science)' && item.designation==='Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
          
        </div>
      </div>)}




      
      

      

      {!filterDesignation && !filterBranch && !searchInput &&(
      <div> {/*Faculty Show*/} 

          {/*Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
          {filteredFaculty.map((item) => (
            item.designation==='Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)

            
          ))}
        </div>

        {/*Associate Professors*/ }

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Associate Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.designation==='Associate Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        {/*Senior Professors*/ }
        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Senior Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.designation==='Senior Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
        </div>

        <div className="mt-10 ml-10 mb-5"><h1 className="pl-4 text-3xl font-semibold heading-top">Assistant Professors</h1></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 pl-10 pr-10">
              
          {filteredFaculty.map((item) => (
            item.designation==='Assistant Professor' && (<div
              key={item.id}
              className="p-4"
            >
              <div
                className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => handleFacultyClick(item)}
              >
                <div className="">
                  <img
                    className="rounded-t-lg m-auto"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="pt-4 pl-4 pr-4 text-center">
                  <h1 className="text-xl font-semibold mb-2">
                    {item.firstName} {item.lastName}
                  </h1>
                  <h2 className="text-base text-gray-600">
                    {item.designation}
                  </h2>
                  <p className="text-xl font-thin education">{item.education}</p>
                </div>
              </div>
            </div>)
          ))}
          
        </div>
      </div>)}
      </div>
    </div>
      {openModal && selectedFaculty && (
        <Modal selectedFaculty={selectedFaculty} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Faculty;
