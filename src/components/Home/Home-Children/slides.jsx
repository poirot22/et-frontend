import React  , { useState , useEffect} from "react";
import so1 from "../../../assets/so1.jpg";
import so2 from "../../../assets/so2.jpg";
import so3 from "../../../assets/so3.JPG";
import so4 from "../../../assets/so4.jpg";
import so5 from "../../../assets/so5.JPG";
import so6 from "../../../assets/so6.JPG";
import "./Slides1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slides1() {
  const items = [
    {
      src: so1,
      title: "SlideOne",
    },
    {
      src: so2,
      title: "Elite Techies the student Technical club",
    },
    {
      src: so3,
      title: "Department Activites",
    },
    {
      src:so4,
    },
    {
      src:so5
    },
    {
      src:so6
    }
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
    <div className="carousel">
      <img src={src} alt={title} className=" slide object-cover" />
    </div>
  );
  return (
    <div className="relative carousel -z-40">
      <div className="overflow-hidden carousel">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="inline-block w-full slide">
              <CarouselItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <FontAwesomeIcon
        icon={faChevronLeft}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-black text-4xl opacity-80 "
        onClick={goToPrevious}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-black text-4xl opacity-80 "
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
