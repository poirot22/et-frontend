import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ selectedFaculty, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faTimes}
            className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="pl-4 pr-4 pb-4">
          <h1 className="text-lg font-bold mb-2">{selectedFaculty.id}</h1>
          <h1 className="text-sm mb-2">
            {selectedFaculty.lastName + " " + selectedFaculty.firstName}
          </h1>
          <h2 className="text-xs text-gray-600 mb-2">
            {selectedFaculty.designation}
          </h2>
          <h3 className="text-xs text-gray-500 mb-2">{selectedFaculty.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9000/getFaculty")
      .then((res) => {
        console.log(res.data.details);
        setFaculty(res.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFacultyClick = (item) => {
    setSelectedFaculty(item);
  };

  const handleCloseModal = () => {
    setSelectedFaculty(null);
  };

  // on esc close modal
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      window.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {faculty.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
          >
            <div
              className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleFacultyClick(item)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full rounded-t-lg"
                  src={item.picture}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">
                  {item.firstName} {item.lastName}
                </h1>
                <h2 className="text-sm text-gray-600 mb-2">
                  {item.designation}
                </h2>
                <p className="text-xs text-gray-500">{item.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFaculty && (
        <Modal selectedFaculty={selectedFaculty} onClose={handleCloseModal} />
      )}
    </>
  );
}
