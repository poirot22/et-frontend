import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import cvr from "../assets/cvr.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Navbar.css";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="flex justify-center ">
        <img src={cvr} alt="Logo" className="h-24 w-24" />
        <div className="flex justify-center">
          <p className="text-4xl m-auto font-bold">
            Department of Emerging Technologies
          </p>
        </div>
      </div>
      <hr className="ml-6 mr-6" style={{ borderColor: "#33110e" }} />
      <div className="relative">
        <ul
          className="flex justify-center"
          style={{ fontFamily: "sans-serif" }}
        >
          <li
            className="mr-6 m-2 relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col">
              <div className="flex">
                <a className="" href="/">
                  Academics
                </a>
                <div className="ml-2">
                  {!isHovered ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </div>
              </div>
              <div
                className={`mt-6 z-80 absolute  ${
                  isHovered ? "block animate-fade-in" : "hidden"
                }`}
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  borderRadius: "5px",
                  background: "#fff",
                  width: "200px",
                }}
              >
                {isHovered && (
                  <ul className="p-3">
                    <li className="m-2">
                      <div className="cursor-pointer">Aiml</div>
                    </li>
                    <hr />
                    <li className="m-2">
                      <div className="cursor-pointer">Cyber Security</div>
                    </li>
                    <hr />
                    <li className="m-2">
                      <div className="cursor-pointer">Csit</div>
                    </li>
                    <hr />
                    <li className="m-2">
                      <div className="cursor-pointer">Data Science</div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
          <li className="mr-6 m-2">
            <a href="/">Admissions</a>
          </li>
          <li className="mr-6 m-2">
            <a href="/">Research</a>
          </li>
        </ul>
      </div>
    </>
  );
}
