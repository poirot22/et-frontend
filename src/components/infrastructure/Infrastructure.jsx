import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Home/Home-Children/Slides1.css";
import {
  faChevronLeft,

  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import lab1 from '../../assets/Lab1_ET.webp';
import lab2 from '../../assets/Lab 2_ET.webp';
import lab3 from '../../assets/LAB 3_ET.webp';
import lab4 from '../../assets/lab 4_ET.webp';
import lab5 from '../../assets/Lab5_ET.webp';
import lab6 from '../../assets/LAB 6_ET.webp';
import lab7 from '../../assets/LAB7_ET.jpg';
import lab8 from '../../assets/lab8_ET.jpg';
import lab9 from '../../assets/Lab9_ET.webp';
import lab10 from '../../assets/lab10.jpg';
import lab11 from '../../assets/lab2.jpg';

import "./infrastructure.css";



const Infrastructure = () => {


  function Carousel({ items}) {
    const [activeIndex, setActiveIndex] = useState(0);


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

  const CarouselItem = ({ src }) => (
    <div className="carousel1">
      <img src={src} alt="" className="  w-full h-96 object-cover rounded-md" />
    </div>
  );

    return (
      <div className="relative carousel1">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="inline-block w-full h-96">
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
    const labImages1 = [
      {
      src:lab1
      },
      {
      src:lab2
      }
  ];

  const labImages2 = [
    {
    src:lab3
    },
    {
    src:lab4
    }
];

const labImages3 = [
  {
  src:lab5
  },
  {
  src:lab6
  }
];

const labImages4 = [
  {
  src:lab7
  },
  {
  src:lab8
  }
];

const labImages5 = [
  {
  src:lab9
  },
  {
  src:lab10
  }
];

const labImages6 = [
  {
  src:lab11
  }
];
  return (
    <div className=" ml-7 p-2 mr-7">

                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-center mb-6">Lab Infrastructure Details</h1>
                    <h1 className="lab-heading  mt-5 text-center mb-5 ">Lab- I & II</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                        <div className="w-full lg:w-1/2">
                            <Carousel items={labImages1} />
                        </div>
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          ACER Veriton Intel Pentium Dual Core G5400 Processor,4GB DDR4 2400MHz RAM, 1 TB SATA HDD, ACER PS/2 keyboard and Mouse with ACER 18.5’ LED Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    
                    <h1 className="lab-heading  mt-0 text-center mb-5 ">Lab- III & IV</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                        
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          ACER Veriton Intel Core i3-8100 Processor, 8GB DDR4 2400MHz RAM, 1 TB SATA HDD,ACER PS/2 keyboard and Mouse with ACER18.5’ LED Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Carousel items={labImages2} />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4">
                    
                    <h1 className="lab-heading  mt-0 text-center mb-5 ">Lab- V & VI</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                    <div className="w-full lg:w-1/2">
                            <Carousel items={labImages3} />
                        </div>
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          Acer Veriton M200 Intel Pentium Dual core Processor,8GB DDR4  4.10 GHz RAM, 256GB SSD, Acer PS/2 USB Keyboard and USB Optical Mouse with ACER 18.5’ LED Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>


                <div className="container mx-auto p-4">
                    
                    <h1 className="lab-heading  mt-0 text-center mb-5 ">Lab- VII & VIII</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                        
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          Acer Veriton M200 Intel Pentium Dual core Processor, 8GB DDR4  4.10 GHz RAM, 256GB SSD, Acer PS/2 USB Keyboard and USB Optical Mouse with ACER 18.5’ LED Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Carousel items={labImages4} />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4">
                    
                    <h1 className="lab-heading  mt-0 text-center mb-5 ">Lab- IX & X</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                    <div className="w-full lg:w-1/2">
                            <Carousel items={labImages5} />
                        </div>
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          Lenovo Neo 50T 12th Gen Intel® Core(TM) i5-12400 2.50 GHz Processor, 8GB DDR4 RAM, 512GB SSD, USB Keyboard and Mouse with Lenovo 21.5’ Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    
                    <h1 className="lab-heading  mt-0 text-center mb-5 ">Lab- XI & XII</h1>
                    <h2 className=" text-2xl font-bold mb-2 ">Lab Incharge: </h2>
                    <h2 className="text-2xl font-bold mb-5">Lab Programmer: </h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
                   
                        <div className="overflow-x-auto w-full lg:w-1/2 rounded-sm">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Specification
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Number of Workstations
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            30
                                        </td>
                                    </tr>
                                   <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                            Hardware
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <p className="text-sm">
                                          Intel Pentium Gold G6405 Processor, 8GB DDR4 4.10GHz RAM, 500GB SSD, USB Keyboard and Mouse with Samsung 22’ LED Monitor.
                                          </p>
                                        </td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Carousel items={labImages6} />
                        </div>
                       
                    </div>
                </div>
          
          
         

    </div>
  )
};

export default Infrastructure;
