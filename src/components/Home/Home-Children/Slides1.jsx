import React  , { useState } from "react";

import so1 from "../../../assets/fO1.jpg";
import so2 from "../../../assets/fo2.jpg";
import so3 from "../../../assets/fo3.JPG";
import so4 from "../../../assets/fo4.jpg";
import so5 from "../../../assets/fo5.JPG";
import so6 from "../../../assets/fo6.JPG";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './slides.css';
export default function Slides1() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [slide1, setSlide1] = useState(0);

  const nextSlide1 = () => {
    setSlide1(slide1 === data.length - 1 ? 0 : slide1 + 1);
  };

  const prevSlide1 = () => {
    setSlide1(slide1 === 0 ? data.length - 1 : slide1 - 1);
  };
    var data=[
      {
        "src": so1,
        "alt": "Image 1 for carousel"
      },
      {
        "src": so2,
        "alt": "Image 3 for carousel"
      },
      {
        "src": so3,
        "alt": "Image 3 for carousel"
      },
      {
        "src": so4,
        "alt": "Image 3 for carousel"
      },
      {
        "src": so5,
        "alt": "Image 3 for carousel"
      },
      {
        "src": so6,
        "alt": "Image 3 for carousel"
      },

    ];
  
  return (
    <div className="carousel -z-50">
      <BsArrowLeftCircleFill onClick={prevSlide1} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img 
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide1 === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide1}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide1 === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide1(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}