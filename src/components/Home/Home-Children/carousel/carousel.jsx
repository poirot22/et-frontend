/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel in React</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></script>
    <script type="module">
        import React from 'https://cdn.skypack.dev/react';
        import ReactDOM from 'https://cdn.skypack.dev/react-dom';

        function CarouselItem({ src, title, description }) {
            return (
                <div className="relative">
                    <img src={src} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
                        <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
                        <p className="text-white text-xl mb-6">{description}</p>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold">Learn More</button>
                    </div>
                </div>
            );
        }

        function Carousel({ items }) {
            const [activeIndex, setActiveIndex] = React.useState(0);

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

            return (
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {items.map((item, index) => (
                                <div key={index} className="inline-block w-full h-96">
                                    <CarouselItem {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                        <i className="bi bi-chevron-left text-black text-2xl"></i>
                    </button>
                    <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                        <i className="bi bi-chevron-right text-black text-2xl"></i>
                    </button>
                </div>
            );
        }

        const carouselItems = [
            {
                src: 'https://images.unsplash.com/photo-1',
                title: 'Slide One',
                description: 'This is the first slide'
            },
            {
                src: 'https://images.unsplash.com/photo-2',
                title: 'Slide Two',
                description: 'This is the second slide'
            },
            {
                src: 'https://images.unsplash.com/photo-3',
                title: 'Slide Three',
                description: 'This is the third slide'
            }
        ];

        const App = () => (
            <div className="container mx-auto p-8">
                <Carousel items={carouselItems} />
            </div>
        );

        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
    <style>
        /* Additional styles if needed 
    </style>
</head>
<body>
    <div id="app"></div>
</body>
</html>
*/

import React, {useState} from 'react';
import { useEffect } from 'react';
import img1 from "../../../../assets/Faculty.jpg";
import img4 from "../../../../assets/FestFinal.JPG";
import img5 from "../../../../assets/img5.jpg";
import cover from '../../../../assets/cover2.JPG'
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";



export default function Carousel() {

    const items = [
        {
            src: img1,
            title: 'SlideOne'
        },
        {
            src: img4,
            title: 'Elite Techies the student Technical club'
        },
        {
            src: cover,
            title: 'Department Activites'
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
                <div className="relative w-full grid1">
                    <img src={src} alt={title} className="w-full h-full object-cover" />
                    { title!=="SlideOne" &&(
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex flex-col justify-end items-center text-white p-10 pb-28">
                        <p className="Heading">{title}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        
                    </div>)}
                </div>
            );
  return (
    <div className="relative ">
                    <div className="overflow-hidden">
                        <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {items.map((item, index) => (
                                <div key={index} className="inline-block w-full">
                                    <CarouselItem {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <FontAwesomeIcon icon={faChevronLeft} className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-white text-4xl opacity-80 " onClick={goToPrevious}/>
                    <FontAwesomeIcon icon={faChevronRight} className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white text-4xl opacity-80 " onClick={goToNext}/>
                    <span className=" absolute right-1/2 indicators">
                        {items.map((_, idx) => {
                        return (
                            <button
                            key={idx}
                            className={
                                activeIndex === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setActiveIndex(idx)}
                            ></button>
                        );
                        })}
                    </span>
    </div>
  )
}

