import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ selectedFaculty, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 flex items-center justify-center overflow-auto ">
      <div
        className="bg-white rounded-lg shadow-lg w-3/4 h-auto mt-24 mb-2"
        id="modal1"
      >
        <div className="flex justify-end mt-4 mr-4">
          <FontAwesomeIcon
            icon={faTimes}
            className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-6 h-6 cursor-pointer text-gray-600"
            onClick={onClose}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <img
              src={selectedFaculty.picture}
              alt=""
              className="h-32 w-32 rounded-md object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-blue-600">
            {selectedFaculty.id}
          </h1>
          <h2 className="text-sm text-gray-600 mb-4">
            {`${selectedFaculty.lastName} ${selectedFaculty.firstName}`}
          </h2>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <h3 className="text-xs text-gray-500 mb-1">Designation:</h3>
              <p className="text-sm">{selectedFaculty.designation}</p>
            </div>
            <div>
              <h3 className="text-xs text-gray-500 mb-1">Email:</h3>
              <p className="text-sm">{selectedFaculty.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <h3 className="text-xs text-gray-500 mb-1">Specialization:</h3>
              <p className="text-sm">{selectedFaculty.specialization}</p>
            </div>
            {selectedFaculty.joining_date && (
              <div>
                <h3 className="text-xs text-gray-500 mb-1">Joining Date:</h3>
                <p className="text-sm">
                  {selectedFaculty.joining_date.substring(0, 10)}
                </p>
              </div>
            )}
          </div>

          <h3 className="text-xs text-gray-500 mb-1">Education:</h3>
          <p className="text-sm mb-4">{selectedFaculty.education}</p>

          <h3 className="text-xs text-gray-500 mb-1">Publications:</h3>
          <ul className="list-disc pl-4 text-sm mb-4">
            {selectedFaculty.publications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <h3 className="text-xs text-gray-500 mb-1">Branch:</h3>
              <p className="text-sm">{selectedFaculty.branch}</p>
            </div>
            <div>
              <h3 className="text-xs text-gray-500 mb-1">
                Publications Number:
              </h3>
              <p className="text-sm">{selectedFaculty.publications_number}</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xs text-gray-500 mb-1">Projects Guided:</h3>
            <p className="text-sm">{selectedFaculty.projects_guided}</p>
          </div>
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

      {openModal && selectedFaculty && (
        <Modal selectedFaculty={selectedFaculty} onClose={handleCloseModal} />
      )}
    </>
  );
}
