import React from "react";

export default function Login() {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center mx-auto my-8 w-full sm:w-3/4 md:w-2/4 lg:w-1/3  p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-300 to-green-300">
          <input
            type="text"
            className="mb-4 p-3 border border-gray-600 rounded-3xl focus:outline-none focus:border-blue-500 bg-gray-100 text-gray-800 placeholder-gray-500 bg-gradient-to-br from-green-300 to-blue-300"
            placeholder="Enter your Roll Number"
          />
          <input
            type="password"
            className="mb-4 p-3 border border-gray-600 rounded-3xl focus:outline-none focus:border-blue-500 bg-gray-100 text-gray-800 placeholder-gray-500 bg-gradient-to-br from-green-300 to-blue-300"
            placeholder="Enter your Password"
          />
          <button className="bg-gray-700 text-white p-3 rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
