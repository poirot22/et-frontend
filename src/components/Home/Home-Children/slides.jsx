import React  , { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import img1 from "../../../assets/Faculty.jpg";
import img4 from "../../../assets/FestFinal.JPG";
import img5 from "../../../assets/img5.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './slides.css';
export default function Slide() {
  var data = [
    { caption: "", image: img1 },
    { caption: "", image: img4 },
    { caption: "", image: img4 },
    { caption: "", image: img5 },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
    data=[
      {
        "src": img1,
        "alt": "Image 1 for carousel"
      },
      {
        "src": img4,
        "alt": "Image 2 for carousel"
      },
      {
        "src": img4,
        "alt": "Image 3 for carousel"
      }
    ]
  
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
