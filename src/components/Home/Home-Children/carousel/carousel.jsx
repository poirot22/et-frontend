import React, { useState } from "react";
import { useEffect } from "react";
import img1 from "../../../../assets/Faculty.jpg";
import img4 from "../../../../assets/FestFinal.JPG";
import cover2 from "../../../../assets/Cover4.JPG";
import cover from "../../../../assets/cover2.JPG";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const items = [
    {
      src: img1,
      title: "SlideOne",
    },
    {
      src:img4,
      title:"DEPARTMENT OBJECTIVES"
    },
    {
      src: cover2,
      title: "ELITE TECHIES THE STUDENT TECHNICAL CLUB",
    },
    {
      src: cover,
      title: "DEPARTMENT ACTIVITIES",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigate=useNavigate();
  const handleClick=()=>{
    if(activeIndex===1) navigate("/Outcomes");
      if(activeIndex===2) navigate('/club');
      if(activeIndex===3) navigate('/Activities');
    
  };
  const CarouselItem = ({ src, title, description }) => (
    <div className="relative w-full grid1">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      {title !== "SlideOne" && (
        <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col justify-end items-center text-white p-10 pb-28">
            <h1 className="Title mb-10">{title}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
              Learn More
            </button>
        </div>
      )}
      {
        title==="SlideOne" && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end items-center text-white p-10 pb-28">
         
        </div>
        )
      }
    </div>
  );
  return (
    <div className="relative -z-40">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="inline-block w-full">
              <CarouselItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <FontAwesomeIcon
        icon={faChevronLeft}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-white text-4xl opacity-80 "
        onClick={goToPrevious}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white text-4xl opacity-80 "
        onClick={goToNext}
      />
      <span className=" absolute right-1/2 indicators">
        {items.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                activeIndex === idx
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
              onClick={() => setActiveIndex(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}