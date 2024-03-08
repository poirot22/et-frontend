import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddUser() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    password: "",
    department: "",
    role: "student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like saving the form data
    console.log(formData);
    axios
      .post("http://localhost:9000/addStudent", formData)
      .then((res) => {
        toast.success("User added successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add user");
      });
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      password: "",
      department: "",
      roles: "student",
    });
  };

  const handleCancel = () => {
    // Reset form data when Cancel button is clicked
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      password: "",
      department: "",
      roles: "student",
    });
  };

  return (
    <div className="overflow-auto">
      <div className="max-w-screen-lg mx-auto w-full">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Add User</h2>
            <div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" htmlFor="id">
                ID:
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="department"
              >
                Department:
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="roles"
              >
                Role:
              </label>
              <select
                id="roles"
                name="roles"
                value={formData.roles}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
