import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import facultyCoordinator from "../../assets/facultycoordinators.png";
import core from "../../assets/core.jpeg";
import { Carousel } from "react-carousel-minimal";
import CSH1 from "../../assets/CSHCover.jpg";
import CSH2 from "../../assets/CSH2.jpg";
import CSH3 from "../../assets/CSH3.jpg";
import CSH4 from "../../assets/CSH4.jpg";
import BDA1 from "../../assets/bDCover.jpg";
import BDA2 from "../../assets/bigData1.jpg";
import BDA3 from "../../assets/bigData2.jpg";
import AI2 from "../../assets/Ai2.jpg";
import AI3 from "../../assets/Ai4.jpg";
import AI4 from "../../assets/Ai5.jpg";
import AI5 from "../../assets/AI1.jpeg";
import CF1 from "../../assets/CF1.webp";
import CF2 from "../../assets/codeFrenzy.jpg";
import CF3 from "../../assets/codeFrenzy2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Slide from "../Home/Home-Children/slides";
import Slides1 from "../Home/Home-Children/Slides1";

import '../Home/Home-Children/slides.css';

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
          logo: CSH1,
          images: [
            { caption: "", image: CSH1 },
            { caption: "", image: CSH2 },
          ],
        },
        {
          date: "28 March 2023",
          title: "Code Frenzy with C",
          description: "Description 2",
          logo: CF1,
          images: [
            { caption: "", image: CF1 },
            { caption: "", image: CF2 },
            { caption: "", image: CF3 },
          ],
        },
        {
          date: "9th and 10th December 2022",
          title: "Neural Networks and Deep Learning Models Workshop",
          description: "Description 3",
          logo: AI5,
          images: [
            { caption: "", image: AI5 },
            { caption: "", image: AI2 },
            { caption: "", image: AI3 },
            { caption: "", image: AI4},
          ],
        },
        {
          date: "2nd and 3rd December 2022",
          title: "Big Data Analytics Workshop",
          description: "Description 2",
          logo: BDA1,
          images: [
            { caption: "", image: BDA1 },
            { caption: "", image: BDA2},
            { caption: "", image: BDA3},
          ],
        },
        {
          date: "25th November 2022",
          title: "Cyber Security and Ethical Hacking Workshop",
          description: "Description 1",
          logo: CSH1,
          images: [
            { caption: "", image: CSH1 },
            { caption: "", image: CSH2 },
            { caption: "", image: CSH4 },
            { caption: "", image: CSH3}
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
    <div className="pl-8 mt-10">
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
        <VerticalTimeline className="-z-40">
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
                  color: "white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(33, 150, 243)",
                }}
                date={
                  <span style={{ color: "black", fontSize: "1.2em" }}>
                    {event.date}
                  </span>
                }
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  backgroundImage: `url(${event.logo})`,
                  backgroundSize: "cover",
                }}
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
          <div className="bg-white p-4 rounded-lg sm:w-3/4 md:w-1/3 h-500px">
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faTimes}
                className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1 cursor-pointer"
                onClick={handleCarouselClose}
              />
            </div>
            <Carousel
              className="mt-0 w-4/5 h-4/5"
              data={selectedEvent}
              time={5000}
              
              captionStyle={captionStyle}
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideImageFit="cover"
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "400px",
                maxHeight: "600px",
                margin: "10px auto",
              }}
            />
          </div>
        </div>
      )}
      <div className="Outreach">
      <h1 className="mt-10 pl-4 text-3xl font-semibold heading-top mb-0">
            Social Outreach Program
      </h1>
      <Slide/>
      <h1 className="mt-10 pl-4 text-3xl font-semibold heading-top mb-0">
            Faculty Outreach Program
      </h1>
      <Slides1/>
      
      </div>
    </div>
  );
};

export default Club;
// import React, { useState, useEffect } from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import facultyCoordinator from "../../assets/facultycoordinators.png";
// import core from "../../assets/core.jpeg";
// import { Carousel } from "react-carousel-minimal";
// import event1 from "../../assets/event1.webp";
// import event2 from "../../assets/event2.jpeg";
// import event3 from "../../assets/event3.jpeg";
// import event4 from "../../assets/event4.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";


// const Club = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const handleViewMore = (eventData) => {
//     setSelectedEvent(eventData);
//   };

//   const handleCarouselClose = () => {
//     setSelectedEvent(null);
//   };

//   useEffect(() => {
//     const closeOnEscapeKeyDown = (e) => {
//       if ((e.charCode || e.keyCode) === 27) {
//         setSelectedEvent(null);
//       }
//     };
//     window.addEventListener("keydown", closeOnEscapeKeyDown);
//     return () => {
//       window.removeEventListener("keydown", closeOnEscapeKeyDown);
//     };
//   }, []);

//   const eventsData = [
//     {
//       date: "10th and 11th March 2023",
//       title: "Department Fest",
//       description: "Description 1",
//       logo: event1,
//       images: [
//         { caption: "", image: event1 },
//         { caption: "", image: event2 },
//       ],
//     },
//     {
//       date: "28 March 2023",
//       title: "Code Frenzy with C",
//       description: "Description 2",
//       logo: event2,
//       images: [
//         { caption: "", image: event2 },
//         { caption: "", image: event2 },
//       ],
//     },
//     {
//       date: "9th and 10th December 2022",
//       title: "Neural Networks and Deep Learning Models Workshop",
//       description: "Description 3",
//       logo: event3,
//       images: [
//         { caption: "", image: event3 },
//         { caption: "", image: event3 },
//       ],
//     },
//     {
//       date: "2nd and 3rd December 2022",
//       title: "Big Data Analytics Workshop",
//       description: "Description 2",
//       logo: event4,
//       images: [
//         { caption: "", image: event4 },
//         { caption: "", image: event4 },
//       ],
//     },
//     {
//       date: "25th November 2022",
//       title: "Cyber Security and Ethical Hacking Workshop",
//       description: "Description 1",
//       logo: event1,
//       images: [
//         { caption: "", image: event1 },
//         { caption: "", image: event1 },
//       ],
//     },
//     // Add more events as needed
//   ];

//   const captionStyle = {
//     fontSize: "2em",
//     fontWeight: "bold",
//   };
//   const slideNumberStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
//   };

//   return (
//     <div className="pl-8 mt-10 flex">
//       {/* Left side: Core Committee and Events Timeline */}
//       <div className="flex-1">
//         {/* ... (Your existing code) */}
//         <div className="mt-5">
//           <VerticalTimeline>
//             {eventsData.map((event, index) => (
//               <VerticalTimelineElement
//                 key={index}
//                 className="vertical-timeline-element--work hover:scale-105 transition duration-300 ease-in-out mb-5"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
//                   borderRadius: "8px",
//                   padding: "20px",
//                   justifyContent: "space-between",
//                   height: "20%",
//                   color: "white",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid rgb(33, 150, 243)",
//                 }}
//                 date={
//                   <span style={{ color: "black", fontSize: "1.2em" }}>
//                     {event.date}
//                   </span>
//                 }
//                 iconStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                   backgroundImage: `url(${event.logo})`,
//                   backgroundSize: "cover",
//                 }}
//               >
//                 <div>
//                   <h3 className="vertical-timeline-element-title">
//                     {event.title}
//                   </h3>
//                   <p>{event.description}</p>
//                 </div>
//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => handleViewMore(event.images)}
//                     style={{
//                       background: "white",
//                       color: "rgb(33, 150, 243)",
//                       padding: "8px 16px",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     View More
//                   </button>
//                 </div>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>

//       {/* Right side: Selected Event Carousel */}
//       {selectedEvent && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-lg sm:w-3/4 md:w-1/3">
//             <div className="flex justify-end">
//               <FontAwesomeIcon
//                 icon={faTimes}
//                 className="transform transform-origin-center transition duration-300 ease-in-out hover:rotate-90 w-5 mt-1 mr-1 cursor-pointer"
//                 onClick={handleCarouselClose}
//               />
//             </div>
//             <Carousel
//               className="mt-0"
//               data={selectedEvent}
//               time={5000}
//               width="300px"
//               height="300px"
//               captionStyle={captionStyle}
//               slideNumber={false}
//               slideNumberStyle={slideNumberStyle}
//               captionPosition="bottom"
//               automatic={true}
//               dots={true}
//               pauseIconColor="white"
//               pauseIconSize="40px"
//               slideBackgroundColor="darkgrey"
//               slideImageFit="cover"
//               thumbnailWidth="100px"
//               style={{
//                 textAlign: "center",
//                 maxWidth: "300px",
//                 maxHeight: "500px",
//                 margin: "10px auto",
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Club;
