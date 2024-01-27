import React , {useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import facultyCoordinator from '../../assets/facultycoordinators.png'
import core from '../../assets/core.jpeg'
import { Carousel } from "react-carousel-minimal";
import event1 from '../../assets/event1.webp';
import event2 from '../../assets/event2.jpeg';
import event3 from '../../assets/event3.jpeg';
import event4 from '../../assets/event4.jpeg';


const Infrastructure = () => {



  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);



  var data = [
    { caption: "", image: event1 },
    { caption: "", image: event2 },
  ];
  var data1 = [
    { caption: "", image: event2 },
    { caption: "", image: event2 },
  ];
  var data2 = [
    { caption: "", image: event3 },
    { caption: "", image: event3 },
  ];
  var data3 = [
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

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleLeave1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleLeave2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleLeave3 = () => {
    setIsHovered3(false);
  };

  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleLeave4 = () => {
    setIsHovered4(false);
  };

  return (
    <div class="pl-8 mt-10">
      <div class="">
          <h1 class="pl-4 text-3xl font-semibold heading-top">
            Core Committee
          </h1>
      </div>
      <div class="flex justify-center p-8 mt-3">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={facultyCoordinator} class="h-96 w-96" alt="Faculty" />
          </div>
          <div class="bg-white shadow-lg rounded-lg overflow-hidden ml-4">
              <img src={core} class="h-96 w-96" alt="Core Committee" />
          </div>
      </div>
      <div class="mt-10">
          <h1 class="pl-4 text-3xl font-semibold heading-top">
            Events
          </h1>
      </div>
      <div class="mt-5">
        <VerticalTimeline>
          <div className="timeline-row">
            <VerticalTimelineElement 
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date=""
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              onMouseOver={()=>{setIsHovered(true)}}
              onMouseLeave={()=>{setIsHovered(false)}}
            >
              <h3 className="vertical-timeline-element-title" style={{color:"#fff"}} >Department Fest</h3>
              <p style={{color:"#fff"}}>Description 1</p>
              <button onClick={()=>{setIsHovered(!isHovered)}}>View More</button>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work mb-5"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
              date="28 March 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{color:"#fff"}}>Code Frenzy with C</h3>
              <p style={{color:"#fff"}}>Description 2</p>
            </VerticalTimelineElement>
          </div>

          <div className="timeline-row">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="9th and 10th December 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Neural Networks and Deep Learning Models Workshop</h3>
              <p style={{ color: "#fff" }}>Description 3</p>
            </VerticalTimelineElement>

            {/* Add more VerticalTimelineElement components as needed */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work mb-5"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black " }}
              contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
              date="2nd and 3rd December 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{color:"#fff"}}>Big Data Analytics Workshop</h3>
              <p style={{color:"#fff"}}>Description 2</p>
            </VerticalTimelineElement>
          </div>
          <div className="timeline-row">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="25th November 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{color:"#fff"}}>Cyber Security and Ethical Hacking Workshop</h3>
              <p style={{color:"#fff"}}>Description 1</p>
            </VerticalTimelineElement>
            </div>
        </VerticalTimeline>
      </div>
      <div className="z-50 top-6">
      {isHovered && (
                <Carousel
                  class="mt-0"
                  data={data}
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
                    maxWidth: "1450px",
                    maxHeight: "500px",
                    margin: "10px auto",
                  }}
                />
              )
              }
      </div>
    </div>
  );
};

export default Infrastructure;
