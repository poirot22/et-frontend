import React, { useState, useEffect } from "react";
import bugreportImage from "../assets/bugreport.png";
import axios from "axios";

export default function Bugreport() {
  const [bugDescription, setBugDescription] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState(null); // State to store the student ID
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("usertoken");
    if (userToken) {
      setIsLoggedIn(true);
      axios
        .get("http://localhost:9000/verify", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          setStudentId(response.data.UserID);
          axios
            .get(
              "http://localhost:9000/getStudentByRollNo/" + response.data.UserID
            )
            .then((res) => {
              setUserData(res.data.Student_Data);
            });
        })
        .catch((error) => {
          console.error("Error verifying user:", error);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bugReportData = {
      bugDescription: bugDescription,
      userId: studentId,
    };

    console.log("Bug report data:", bugReportData);

    setBugDescription("");
  };

  return (
    <div className=" p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <img
        src={bugreportImage}
        alt="Bug Report"
        className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8 rounded-lg"
      />
      <div className="w-full md:w-1/2">
        {isLoggedIn ? (
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Report a Bug</h2>
              <p className="text-red-600 italic mb-4">
                Caution: Your ID will be visible to us.
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label
                    htmlFor="bugDescription"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Bug Description:
                  </label>
                  <textarea
                    id="bugDescription"
                    name="bugDescription"
                    value={bugDescription}
                    onChange={(e) => setBugDescription(e.target.value)}
                    rows="4"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter the description of the bug..."
                    required
                  ></textarea>
                </div>
                {/* Hidden input field to store user ID */}
                <input type="hidden" name="userId" value={studentId} />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <p>Please log in to report a bug.</p>
        )}
      </div>
    </div>
  );
}
