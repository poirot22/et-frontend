import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({ onClose }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleLogin = () => {
    console.log("ID:", id);
    console.log("Password:", password);
    const loginData = {
      id,
      password,
    };
    axios.post("https://et-server-cyan.vercel.app/login", loginData)
      .then((res) => {
        console.log("Response:", res.data);
  
        if (res.data.status === 404) {
          toast.error("User not found");
          console.log("User not found");
        } else if (res.data.status === 200) {
          console.log("User found");
          localStorage.setItem("usertoken", res.data.token);
          toast.success("Login successful!");
          window.location.reload();
          
        } else if (res.data.status === 401) {
          toast.error("Wrong password or ID");
          console.log("Wrong password or ID");
        }
      })
      .catch(error => {
        console.error("Error logging in:", error);
        toast.error("An error occurred while logging in");
      });
  
    onClose();
  };
  

  const handleClickOutside = (e) => {
    if (!e.target.closest(".login-form")) {
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 h-full">
        <div className="w-72 p-6 bg-white rounded-lg shadow-md login-form">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700 flex justify-between items-center"
            >
              Password
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
