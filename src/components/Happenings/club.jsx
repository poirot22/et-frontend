import React, { useState } from "react";
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

const Club = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewMore = (event) => {
    setSelectedEvent(event);
  };

  const handleCarouselClose = () => {
    setSelectedEvent(null);
  };

  const data = [
    { caption: "", image: event1 },
    { caption: "", image: event2 },
  ];
  const data1 = [
    { caption: "", image: event2 },
    { caption: "", image: event2 },
  ];
  const data2 = [
    { caption: "", image: event3 },
    { caption: "", image: event3 },
  ];
  const data3 = [
    { caption: "", image: event4 },
    { caption: "", image: event4 },
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
            <img src={facultyCoordinator} className="h-96 w-96" alt="Faculty" />
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
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "white",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                padding: "20px",
                display: "flex", // Use flex container
                flexDirection: "column", // Stack children vertically
                alignItems: "flex-start", // Align items to the start (left)
                justifyContent: "space-between", // Space between children
                height: "200px", // Adjust the height as needed
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              date=""
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              onMouseOver={() => {
                setSelectedEvent(data);
              }}
              onMouseLeave={() => {
                setSelectedEvent(null);
              }}
            >
              <div>
                <h3 className="vertical-timeline-element-title">
                  Department Fest
                </h3>
                <p>Description 1</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleViewMore(data)}
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

            <VerticalTimelineElement
              className="vertical-timeline-element--work mb-5"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
              date="28 March 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#fff" }}
              >
                Code Frenzy with C
              </h3>
              <p style={{ color: "#fff" }}>Description 2</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleViewMore(data)}
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

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="9th and 10th December 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#fff" }}
              >
                Neural Networks and Deep Learning Models Workshop
              </h3>
              <p style={{ color: "#fff" }}>Description 3</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleViewMore(data1)}
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

            <VerticalTimelineElement
              className="vertical-timeline-element--work mb-5"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "black ",
              }}
              contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
              date="2nd and 3rd December 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#fff" }}
              >
                Big Data Analytics Workshop
              </h3>
              <p style={{ color: "#fff" }}>Description 2</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleViewMore(data2)}
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

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="25th November 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#fff" }}
              >
                Cyber Security and Ethical Hacking Workshop
              </h3>
              <p style={{ color: "#fff" }}>Description 1</p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleViewMore(data3)}
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
                class="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1"
                onClick={handleCarouselClose}
              />
            </div>
            <Carousel
              class="mt-0"
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