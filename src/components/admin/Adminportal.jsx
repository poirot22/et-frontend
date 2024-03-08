import React, { useState, useEffect } from "react";
import cvr from "../../assets/cvr.png";
import {
  FaUser,
  FaCalendarAlt,
  FaTrash,
  FaBars,
  FaTimes,
  FaEye,
} from "react-icons/fa";
import axios from "axios";
import AddFacultyDialog from "./AddFacultyDialog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adminportal = ({ isAccessedByAdmin }) => {
  const [isSecure, setIsSecure] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [faculty, setFaculty] = useState(true);
  const [events, setEvents] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [designationFilter, setDesignationFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isSaveEnabled, setSaveEnabled] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9000/getFaculty").then((res) => {
      setFaculties(res.data.details);
      setFilteredFaculties(res.data.details);

      const token = localStorage.getItem("admin");
      if (token) {
        setIsSecure(true);
      } else {
        // Redirect to login page
        setTimeout(() => {
          window.location.href = "/admin";
        }, 3000);
      }
    });
  }, []);

  const handleDeleteFaculty = (facultyId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      axios
        .delete(`http://localhost:9000/deleteFaculty/${facultyId}`)
        .then((res) => {
          setFaculties((prevFaculties) =>
            prevFaculties.filter((faculty) => faculty._id !== facultyId)
          );
        });
    }
  };

  useEffect(() => {
    let filtered = faculties.filter((faculty) =>
      `${faculty.firstName} ${faculty.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    if (designationFilter) {
      filtered = filtered.filter(
        (faculty) => faculty.designation === designationFilter
      );
    }

    if (branchFilter) {
      filtered = filtered.filter((faculty) => faculty.branch === branchFilter);
    }

    setFilteredFaculties(filtered);
  }, [searchQuery, designationFilter, branchFilter, faculties]);

  const handleAddFaculty = (formData) => {
    axios.post("http://localhost:9000/addFaculty", formData).then((res) => {
      toast.success('Faculty added successfully');
      console.log(res);
      setFaculties((prevFaculties) => [...prevFaculties, formData]);
    });
  };

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedFaculty((prevFaculty) => ({
      ...prevFaculty,
      [name]: value,
    }));
    setSaveEnabled(true); // Enable save button when changes are made
  };

  const handleSaveChanges = () => {
    const confirm = window.confirm("Are you sure you want to save changes?");
    if (!confirm) {
      return;
    }
    // Logic to save changes for faculty
    axios
      .put(
        `http://localhost:9000/updateFaculty/${selectedFaculty._id}`,
        selectedFaculty
      )
      .then((res) => {
        console.log(res);
      });


    console.log("Saving changes for faculty:", selectedFaculty);

    setSaveEnabled(false);
  };

  const handleUpdateFaculty = (facultyId) => {
    // Logic to update faculty details using facultyId
  };

  const handleLogout = () => {
    // Remove token from local storage and redirect to login page
    toast.success('Logged out successfully');
    localStorage.removeItem("admin");
    window.location.href = "/admin";
  };

  return (
    <div>
      {isSecure ? (
        <>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-1/5 bg-gray-100">
              <div className="flex justify-between items-center p-4 lg:hidden">
                <div>
                  {isOptionsVisible ? (
                    <FaTimes
                      className="text-3xl cursor-pointer"
                      onClick={toggleOptions}
                    />
                  ) : (
                    <FaBars
                      className="text-3xl cursor-pointer"
                      onClick={toggleOptions}
                    />
                  )}
                </div>
                <div className="flex justify-center my items-center lg:hidden">
                  <img src={cvr} alt="cvr logo" className="w-14 h-14" />
                  <div className="text-xl font-semibold">ET-Department</div>
                </div>
                <button
                  onClick={handleLogout}
                  className=" bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 z-50"
                >
                  Logout
                </button>
              </div>
              <div
                className={`lg:flex lg:flex-col lg:space-y-5 items-center p-4 ${
                  isOptionsVisible ? "" : "hidden lg:block"
                }`}
              >
              <div className="h-screen">
                <div className=" justify-center items-center hidden  lg:block">
                  <img src={cvr} alt="cvr logo" className="w-14 h-14" />
                  <div className="text-xl font-semibold">ET-Department</div>
                </div>

                <div
                  className={`flex mt-10 pb-5 items-center cursor-pointer ${
                    faculty ? "text-blue-500 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSearchQuery("");
                    setFaculty(true);
                    setEvents(false);
                    setFilteredFaculties(faculties);
                  }}
                >
                  <FaUser className="mr-2" />
                  <span>Faculty</span>
                </div>
                <div
                  className={`flex items-center cursor-pointer ${
                    events ? "text-blue-500 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setEvents(true);
                    setFaculty(false);
                  }}
                >
                  <FaCalendarAlt className="mr-2" />
                  <span>Events</span>
                </div>
              </div>
            </div>
            </div>
            <div className="w-full lg:w-4/5 flex flex-col">
              <div className="flex justify-center items-center">
                <div className="text-center flex flex-col items-center">
                  <h1 className="text-3xl font-bold mb-4 mt-5">Admin Portal</h1>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 hidden lg:block"
                  >
                    Logout
                  </button>
                </div>
              </div>

              <hr className="m-2" />

              <div className="flex flex-col lg:flex-row items-center justify-between">
                {faculty && (
                  <>
                    <div className="flex flex-wrap lg:flex-row w-full m-2 overflow-auto">
                      <input
                        type="search"
                        placeholder="Search faculty..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className=" flex-1 p-2 border border-gray-300 rounded-md mb-2 lg:mr-3 lg:mb-0"
                      />
                      <div className="flex items-center">
                        <select
                          value={designationFilter}
                          onChange={(e) => setDesignationFilter(e.target.value)}
                          className="border border-gray-300 rounded-md p-2 mr-3 h-full lg:mr-3"
                        >
                          <option value="">Select Designation</option>
                          <option value="Professor">Professor</option>
                          <option value="Associate Professor">
                            Associate Professor
                          </option>
                          <option value="Senior Assistant Professor">
                            Senior Assistant Professor
                          </option>
                          <option value="Assistant Professor">
                            Assistant Professor
                          </option>
                          
                        </select>
                        <select
                          value={branchFilter}
                          onChange={(e) => setBranchFilter(e.target.value)}
                          className="border border-gray-300 rounded-md p-2 mr-3 h-full lg:mr-3"
                        >
                          <option value="">Select Branch</option>
                          <option value="CSIT">
                            CSIT
                          </option>
                          <option value="CSE(AI & ML)">CSE(AI & ML)</option>
                          <option value="CSE(Cyber Security)">CSE(Cyber Security)</option>
                          <option value="CSE(Data Science)">CSE(Data Science)</option>
                        </select>
                        <button
                          onClick={() => setDialogOpen(true)}
                          className="flex items-center bg-blue-500 text-white font-semibold  px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                          <p>Add Faculty</p>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col m-2">
                {faculty && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                            Designation
                          </th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                            Branch
                          </th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFaculties.map((item) => (
                          <tr key={item._id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {item.firstName} {item.lastName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900">
                                {item.designation}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900">
                                {item.branch}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex justify-evenly">
                              <button
                                onClick={() => {
                                  setSelectedFaculty(item);
                                  setDialogOpen(true);
                                }}
                                className="text-blue-500 hover:text-blue-700 mr-2"
                              >
                                <FaEye />
                              </button>
                              <button
                                onClick={() => handleDeleteFaculty(item._id)}
                                className="text-red-500 hover:text-red-700 mr-2"
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {events && (
                  <div>
                    {/* Events content */}
                    Events Content
                  </div>
                )}
              </div>
            </div>
          </div>
          {selectedFaculty && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Faculty Details
                        </h3>
                        <div className="mt-2">
                          <div className="flex flex-col">
                            <label className="text-gray-600">First Name:</label>
                            <input
                              type="text"
                              name="firstName"
                              value={selectedFaculty.firstName}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-gray-600">Last Name:</label>
                            <input
                              type="text"
                              name="lastName"
                              value={selectedFaculty.lastName}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-600">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={selectedFaculty.email}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="designation" className="text-gray-600">
                              Designation
                            </label>
                            <select
                              className="border rounded-md p-1 mt-1"
                              value={selectedFaculty.designation}
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
                          </div>
                          <div className="flex flex-col">
                            <label className="text-gray-600">Branch:</label>
                            <select
                              className="border rounded-md p-1 mt-1"
                              value={selectedFaculty.branch}
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
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="education" className="text-gray-600">
                              
                            </label>
                            <input
                              type="text"
                              id="education"
                              name="education"
                              value={selectedFaculty.education}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="specialization" className="text-gray-600">
                              Specialization
                            </label>
                            <input
                              type="text"
                              id="specialization"
                              name="specialization"
                              value={selectedFaculty.specialization}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="joining_date" className="text-gray-600">
                              Joining Date
                            </label>
                            <input
                              type="date"
                              id="joining_date"
                              name="joining_date"
                              value={selectedFaculty.joining_date.slice(0,10)}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="projects_guided" className="text-gray-600">
                            Projects guided
                            </label>
                            <input
                              type="number"
                              id="projects_guided"
                              name="projects_guided"
                              value={selectedFaculty.projects_guided}
                              onChange={handleInputChange}
                              className="border rounded-md p-1 mt-1"
                            />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleSaveChanges}
                      disabled={!isSaveEnabled}
                      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ${
                        isSaveEnabled ? "" : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setDialogOpen(false);
                        setSelectedFaculty(null);
                        setSaveEnabled(false); // Reset save button state
                      }}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <AddFacultyDialog
            isOpen={isDialogOpen}
            onClose={() => {
              setDialogOpen(false);
              setSelectedFaculty(null); // Reset selected faculty on dialog close
            }}
            onAddFaculty={handleAddFaculty}
          />
        </>
      ) : (
        <p>You do not have permission to access this page.</p>
        // redirect to login page
      )}
    </div>
  );
};

export default Adminportal;