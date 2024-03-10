import React, { useState, useEffect } from "react";
import "./faculty.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/getAllEvents").then((res) => {
      setAllEvents(res.data.events);
    });
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    resourcePersons: [""],
    startDate: "",
    endDate: "",
    venue: "",
    registrationLink: "",
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedResourcePersons = [...formData.resourcePersons];
    updatedResourcePersons[index] = value;
    setFormData({
      ...formData,
      resourcePersons: updatedResourcePersons,
    });
  };

  const addResourcePerson = () => {
    const lastPerson =
      formData.resourcePersons[formData.resourcePersons.length - 1];
    if (lastPerson === undefined || lastPerson.trim() !== "") {
      setFormData({
        ...formData,
        resourcePersons: [...formData.resourcePersons, ""],
      });
    }
  };

  const deleteResourcePerson = (index) => {
    const updatedResourcePersons = formData.resourcePersons.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      resourcePersons: updatedResourcePersons,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:9000/addEvent", formData).then((res) => {
      if (res.data.status === 201) {
        // Fetch updated list of events from the server
        axios
          .get("http://localhost:9000/getAllEvents")
          .then((res) => {
            setAllEvents(res.data.events);
            toast.success("Event added successfully!");
          })
          .catch((error) => {
            console.error("Error fetching events:", error);
            toast.error("Error fetching events. Please try again later.");
          });
      } else {
        toast.error("Error adding event. Please try again later.");
      }
    });

    setIsModalOpen(false);
    setFormData({
      title: "",
      description: "",
      resourcePersons: [""],
      startDate: "",
      endDate: "",
      venue: "",
      registrationLink: "",
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const deleteEvent = (eventId) => {
    axios
      .delete(`http://localhost:9000/deleteEvent/${eventId}`)
      .then((res) => {
        console.log(res.data);
        setAllEvents(allEvents.filter((event) => event._id !== eventId));
        toast.success("Event deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        toast.error("Error deleting event. Please try again later.");
      });
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4 ml-8">Events</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-8"
          onClick={() => setIsModalOpen(true)}
        >
          Add Event
        </button>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded p-8 w-full  md:w-3/4 h-5/6 overflow-auto scrollbar">
              <span
                className="absolute top-0 right-0 cursor-pointer text-xl"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </span>
              <h2 className="text-xl font-semibold mb-4">Add Event</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="title"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Resource Persons:
                  </label>
                  {formData.resourcePersons.map((person, index) => (
                    <div key={index} className="flex mb-2">
                      <input
                        type="text"
                        value={person}
                        onChange={(e) => handleInputChange(e, index)}
                        className="border border-gray-300 px-3 py-2 rounded w-full mr-2"
                      />
                      <button
                        type="button"
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                        onClick={() => deleteResourcePerson(index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={addResourcePerson}
                  >
                    Add Resource Person
                  </button>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="startDate"
                  >
                    Start Date:
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="endDate"
                  >
                    End Date:
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="venue"
                  >
                    Venue:
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={(e) =>
                      setFormData({ ...formData, venue: e.target.value })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="registrationLink"
                  >
                    Registration Link:
                  </label>
                  <input
                    type="text"
                    id="registrationLink"
                    name="registrationLink"
                    value={formData.registrationLink}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        registrationLink: e.target.value,
                      })
                    }
                    className="border border-gray-300 px-3 py-2 rounded w-full"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {allEvents.length > 0 ? (
        <div>
          {allEvents.map((event) => (
            <div key={event._id} className="rounded p-4 mb-4 bg-gray-100">
              <div>
                <p className="text-lg font-semibold mb-2">
                  Title: {event.title}
                </p>
                <p className="text-sm text-gray-600">
                  Date: {new Date(event.startDate).toLocaleDateString()} -{" "}
                  {new Date(event.endDate).toLocaleDateString()}
                </p>

                <p className="text-sm text-gray-600 mb-2">
                  Venue: {event.venue}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Resource Persons: {event.resourcePersons.join(", ")}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Description: {event.description}
                </p>
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Registration Link
                </a>
                {/* delete button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No events to display.</p>
      )}
    </>
  );
}
