import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./faculty.css";

const AddFacultyDialog = ({ isOpen, onClose, onAddFaculty }) => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    designation: "",
    password: "",
    reEnterPassword: "",
    branch: "",
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
    onAddFaculty(formData);

    // Clear form data after submission
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      designation: "",
      password: "",
      reEnterPassword: "",
      branch: "",
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
              <h2 className="text-xl font-semibold">Add Faculty</h2>
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
                    value={formData.id}
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
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
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
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                  </select>
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

export default AddFacultyDialog;
