import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/login',formData)
    .then((res)=>{
      console.log(res.data)
    })
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center mx-auto my-8 w-full sm:w-3/4 md:w-2/4 lg:w-1/3  p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-black to-white">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="p-3 border border-gray-600 rounded-3xl focus:outline-none focus:border-white bg-gray-100 text-gray-800 placeholder-gray-700 bg-gradient-to-br from-white to-black w-full"
                placeholder="Enter your Roll Number"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 border border-gray-600 rounded-3xl focus:outline-none focus:border-white bg-gray-100 text-gray-800 placeholder-gray-700 bg-gradient-to-br from-white to-black w-full"
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-gray-700 text-white p-3 rounded-3xl hover:bg-gray-800 focus:outline-none focus:bg-gray-800 w-1/2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
