import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddFacultyDialog = ({ isOpen, onClose, onAddFaculty }) => {
  const [formData, setFormData] = useState({
    // Initial form data state
    profilePic: "",
    id: "",
    firstName: "",
    lastName: "",
    designation: "",
    education: "",
    email: "",
    specialization: "",
    branch: "",
    publications: [],
    projectsGuided: "",
    publicationsNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddFaculty function with the form data
    onAddFaculty(formData);
    // Clear form data after submission
    setFormData({
      profilePic: null,
      id: "",
      firstName: "",
      lastName: "",
      designation: "",
      education: "",
      email: "",
      specialization: "",
      branch: "",
      publications: [],
      projectsGuided: "",
      publicationsNumber: ""
    });
    // Close the dialog box
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Faculty</h2>
              <button onClick={onClose} className="text-gray-600">
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="profilePic" className="block mb-1">Profile Picture URL</label>
                  <input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    value={formData.profilePic}
                    accept="image/*"
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="id" className="block mb-1">ID</label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="designation" className="block mb-1">Designation</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="education" className="block mb-1">Education</label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="specialization" className="block mb-1">Specialization</label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block mb-1">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="projectsGuided" className="block mb-1">Projects Guided</label>
                  <input
                    type="text"
                    id="projectsGuided"
                    name="projectsGuided"
                    value={formData.projectsGuided}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="publicationsNumber" className="block mb-1">Publications Number</label>
                  <input
                    type="number"
                    id="publicationsNumber"
                    name="publicationsNumber"
                    value={formData.publicationsNumber}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
              </div>
              {/* Submit button */}
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
                Add Faculty
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFacultyDialog;
