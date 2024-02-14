import React, { useState, useEffect } from "react";
import cvr from "../../assets/cvr.png";
import {
  FaUser,
  FaCalendarAlt,
  FaTrash,
  FaEdit,
  FaBars,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";
import axios from "axios";
import AddFacultyDialog from "./AddFacultyDialog"; // Import the AddFacultyDialog component

const Adminportal = ({ isAccessedByAdmin }) => {
  const [faculties, setFaculties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [faculty, setFaculty] = useState(true); // Default to showing faculties
  const [events, setEvents] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false); // State to track visibility of options
  const [designationFilter, setDesignationFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9000/getFaculty").then((res) => {
      setFaculties(res.data.details);
      setFilteredFaculties(res.data.details); // Initialize filtered faculties with all faculties
    });
  }, []);

  const handleDeleteFaculty = (facultyId) => {
    // Logic to delete faculty with the given ID
    // You can make a DELETE request to your backend API
    console.log("Deleting faculty with ID:", facultyId);
  };

  useEffect(() => {
    // Filter faculties based on searchQuery, designationFilter, and branchFilter
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
    // Logic to add a new faculty
    console.log("Adding a new faculty...", formData);
    // Make API call to add the new faculty using formData
    // After successful addition, update faculties state with the new faculty
    setFaculties((prevFaculties) => [...prevFaculties, formData]);
  };

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <div>
      {isAccessedByAdmin ? (
        <>
          <div className="flex flex-col lg:flex-row lg:justify-between h-screen">
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
              </div>
              <div
                className={`lg:flex lg:flex-col lg:space-y-5 lg:items-center p-4 ${
                  isOptionsVisible ? "" : "hidden lg:block"
                }`}
              >
                <div className="flex justify-center my items-center sm:hidden md:hidden lg:block">
                  <img src={cvr} alt="cvr logo" className="w-14 h-14" />
                  <div className="text-xl font-semibold">ET-Department</div>
                </div>

                <div
                  className={`flex items-center cursor-pointer ${
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
            <div className="w-full lg:w-4/5 flex flex-col">
              <div className="flex justify-center text-3xl m-3 font-semibold">
                Admin Portal
              </div>
              <hr className="m-2" />

              <div className="flex items-center justify-between">
                {faculty && (
                  <>
                    <div class="flex items-center w-full m-2">
                      <input
                        type="search"
                        placeholder="Search faculty..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        class="flex-1 p-2 border border-gray-300 rounded-md mr-3 w-1/2"
                      />
                      <div class="flex items-center ">
                        <select
                          value={designationFilter}
                          onChange={(e) => setDesignationFilter(e.target.value)}
                          class="border border-gray-300 rounded-md p-2 mr-3 h-full"
                        >
                          <option value="">Select Designation</option>
                          <option value="Professor">Professor</option>
                          <option value="Assistant Professor">
                            Assistant Professor
                          </option>
                          <option value="Associate Professor">
                            Associate Professor
                          </option>
                        </select>
                        <select
                          value={branchFilter}
                          onChange={(e) => setBranchFilter(e.target.value)}
                          class="border border-gray-300 rounded-md p-2 mr-3 h-full"
                        >
                          <option value="">Select Branch</option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                          <option value="Electronics">Electronics</option>
                          <option value="Mechanical">Mechanical</option>
                        </select>
                        <button
                          onClick={() => setDialogOpen(true)}
                          class="flex items-center bg-blue-500 text-white font-semibold  px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                        >
                          <svg
                            class="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
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
              <div className="flex flex-col">
                {faculty && (
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Designation
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Branch
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button
                              onClick={() => handleDeleteFaculty(item._id)}
                              className="text-red-500 hover:text-red-700 mr-2"
                            >
                              <FaTrash />
                            </button>
                            <button className="text-blue-500 hover:text-blue-700">
                              <FaEdit />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {events && (
                  <div>
                    {/* Render your events content here */}
                    Events Content
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Render the AddFacultyDialog component */}
          <AddFacultyDialog
            isOpen={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            onAddFaculty={handleAddFaculty}
          />
        </>
      ) : (
        <p>You do not have permission to access this page.</p>
      )}
    </div>
  );
};

export default Adminportal;
