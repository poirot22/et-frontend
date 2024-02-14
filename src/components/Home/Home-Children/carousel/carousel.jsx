import React, { useState } from "react";
import { useEffect } from "react";
import img1 from "../../../../assets/Faculty.jpg";
import img4 from "../../../../assets/FestFinal.JPG";
import cover from "../../../../assets/cover2.jpg";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
  const items = [
    {
      src: img1,
      title: "SlideOne",
    },
    {
      src: img4,
      title: "Elite Techies the student Technical club",
    },
    {
      src: cover,
      title: "Department Activites",
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
  const CarouselItem = ({ src, title, description }) => (
    <div className="relative w-full grid1">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      {title !== "SlideOne" && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex flex-col justify-end items-center text-white p-10 pb-28">
          <p className="Heading">{title}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className="relative ">
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
