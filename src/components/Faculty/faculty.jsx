import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ selectedFaculty, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg">
        <div class="flex justify-end mt-2 mr-3">
          <FontAwesomeIcon
            icon={faTimes}
            class="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1"
            onClick={onClose}
          />
        </div>

        <div class="pl-4 pr-4 pb-4">
          <h1 className="text-lg font-bold mb-2">{selectedFaculty.id}</h1>
          <h1 className="text-sm mb-2">
            {selectedFaculty.lastName + " " + selectedFaculty.firstName}
          </h1>
          <h2 className="text-xs text-gray-600 mb-2">
            {selectedFaculty.designation}
          </h2>
          <h3 className="text-xs text-gray-500 mb-2">
            {selectedFaculty.email}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedFaculty(null);
    setOpenModal(false);
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
            className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-md relative p-3 bg-gray-200 cursor-pointer lg:hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleFacultyClick(item)}
            >
              <div className="aspect-w-3 aspect-h-5 flex justify-center">
                <img
                  className="object-cover w-3/4 rounded-t-2xl m-3"
                  src={item.picture}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h1 className="text-sm mb-2 font-bold">
                  {item.firstName + " " + item.lastName}
                </h1>
                <h1 className="text-lg font-bold mb-2">{item.id}</h1>

                <h2 className="text-xs text-gray-600 mb-2">
                  {item.designation}
                </h2>
                <h3 className="text-xs text-gray-500 mb-2">{item.email}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openModal && selectedFaculty && (
        <Modal selectedFaculty={selectedFaculty} onClose={handleCloseModal} />
      )}
    </>
  );
}
