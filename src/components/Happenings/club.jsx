import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import facultyCoordinator from "../../assets/facultycoordinators.png";
import core from "../../assets/core.jpeg";
import { Carousel } from "react-carousel-minimal";
import event1 from "../../assets/event1.webp";
import event2 from "../../assets/event2.jpeg";
import event3 from "../../assets/event3.jpeg";
import event4 from "../../assets/event4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// ... (Your existing imports)

const Club = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewMore = (eventData) => {
    setSelectedEvent(eventData);
  };

  const handleCarouselClose = () => {
    setSelectedEvent(null);
  };

  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      window.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const eventsData = [
    {
      date: "10th and 11th March 2023",
      title: "Department Fest",
      description: "Description 1",
      images: [
        { caption: "", image: event1 },
        { caption: "", image: event2 },
      ],
    },
    {
      date: "28 March 2023",
      title: "Code Frenzy with C",
      description: "Description 2",
      images: [
        { caption: "", image: event2 },
        { caption: "", image: event2 },
      ],
    },
    {
      date: "9th and 10th December 2022",
      title: "Neural Networks and Deep Learning Models Workshop",
      description: "Description 3",
      images: [
        { caption: "", image: event3 },
        { caption: "", image: event3 },
      ],
    },
    {
      date: "2nd and 3rd December 2022",
      title: "Big Data Analytics Workshop",
      description: "Description 2",
      images: [
        { caption: "", image: event4 },
        { caption: "", image: event4 },
      ],
    },
    {
      date: "25th November 2022",
      title: "Cyber Security and Ethical Hacking Workshop",
      description: "Description 1",
      images: [
        { caption: "", image: event1 },
        { caption: "", image: event1 },
      ],
    },
    {
      date: "25th November 2022",
      title: "Cyber Security and Ethical Hacking Workshop",
      description: "Description 1",
      images: [
        { caption: "", image: event1 },
        { caption: "", image: event1 },
      ],
    },
    {
      date: "25th November 2022",
      title: "Cyber Security and Ethical Hacking Workshop",
      description: "Description 1",
      images: [
        { caption: "", image: event1 },
        { caption: "", image: event1 },
      ],
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="pl-8 mt-10 flex">
      {/* Left side: Core Committee and Events Timeline */}
      <div className="flex-1">
        <div className="">
          <h1 className="pl-4 text-3xl font-semibold heading-top">
            Core Committee
          </h1>
        </div>
        <div className="flex flex-wrap justify-center p-8 mt-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={facultyCoordinator}
              className="h-96 w-96"
              alt="Faculty"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ml-4">
            <img src={core} className="h-96 w-96" alt="Core Committee" />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="pl-4 text-3xl font-semibold heading-top">Events</h1>
        </div>
        <div className="mt-5">
          <VerticalTimeline>
            {eventsData.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work hover:scale-105 transition duration-300 ease-in-out mb-5"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                  padding: "20px",
                  justifyContent: "space-between",
                  height: "20%",
                  color:"white"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(33, 150, 243)",
                }}
                date={event.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <div>
                  <h3 className="vertical-timeline-element-title">
                    {event.title}
                  </h3>
                  <p>{event.description}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleViewMore(event.images)}
                    style={{
                      background: "white",
                      color: "rgb(33, 150, 243)",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    View More
                  </button>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Right side: Selected Event Carousel */}
      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg sm:w-3/4 md:w-1/3">
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faTimes}
                className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1 cursor-pointer"
                onClick={handleCarouselClose}
              />
            </div>
            <Carousel
              className="mt-0"
              data={selectedEvent}
              time={5000}
              width="300px"
              height="300px"
              captionStyle={captionStyle}
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "300px",
                maxHeight: "500px",
                margin: "10px auto",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Club;
