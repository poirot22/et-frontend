import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./faculty.css";

const EditFacultyDialog = ({ isOpen, selectedFaculty, onClose, onEditFaculty }) => {
    console.log(selectedFaculty);
  const [formData, setFormData] = useState ({
    id: "",
    firstName: "",
    lastName: "",
    designation: "",
    branch: "",
    education:"",
    publications_number:"",
    publications:"",
    email:"",
    specialization:"",
    projects_guided:"",
    joining_date:"",
    password: "",
    reEnterPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset password error on input change
    if (name === "password" || name === "reEnterPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for matching passwords
    if (formData.password !== formData.reEnterPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Call the onAddFaculty function with the form data
    onEditFaculty(formData);

    // Clear form data after submission
    setFormData({
      id: selectedFaculty.id,
      firstName: "",
      lastName: "",
      designation: "",
      branch: "",
      qualification:"",
      email:"",
      specialization:"",
      projectsGuided:"",
      password: "",
      joining_date:"",
      reEnterPassword: "",
    });

    // Close the dialog box
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg max-w-md w-full h-3/4 overflow-y-scroll relative scrollbar">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Faculty</h2>
              <button
                onClick={onClose}
                className="text-gray-600 absolute top-4 right-4"
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="id" className="block mb-1">
                    ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={selectedFaculty.id}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block mb-1">
                    First Name
                  </label>
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
                  <label htmlFor="lastName" className="block mb-1">
                    Last Name
                  </label>
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
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
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
                  <label htmlFor="designation" className="block mb-1">
                    Designation
                  </label>
                  <select
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  >
                    <option value="">Select Designation</option>
                    <option value="Professor">Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Senior Assistant Professor">Senior Assistant Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    
                  </select>
                </div>
                <div>
                  <label htmlFor="branch" className="block mb-1">
                    Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="CSIT">CSIT</option>
                    <option value="CSE(AI & ML)">CSE(AI & ML)</option>
                    <option value="CSE(Cyber Security)">CSE(Cyber Security)</option>
                    <option value="CSE(Data Science)">CSE(Data Science)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="joining_date" className="block mb-1">
                    Joining Date
                  </label>
                  <input
                    type="date"
                    id="joining_date"
                    name="joining_date"
                    value={formData.joining_date}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="education" className="block mb-1">
                  Qualification
                  </label>
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
                  <label htmlFor="specialization" className="block mb-1">
                  Specialization
                  </label>
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
                  <label htmlFor="projects_guided" className="block mb-1">
                  Projects Guided
                  </label>
                  <input
                    type="number"
                    id="projects_guided"
                    name="projects_guided"
                    value={formData.projectsGuided}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reEnterPassword" className="block mb-1">
                    Re-enter Password
                  </label>
                  <input
                    type="password"
                    id="reEnterPassword"
                    name="reEnterPassword"
                    value={formData.reEnterPassword}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
                  />
                  {passwordError && (
                    <p className="text-red-500">{passwordError}</p>
                  )}
                </div>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
              >
                Add Faculty
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditFacultyDialog;
