import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import cvr from "../assets/cvr.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navbarContainer = document.querySelector(".navbar-container");
      if (scrollTop > navbarContainer.offsetTop) {
        navbarContainer.classList.add("sticky");
      } else {
        navbarContainer.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
    setAbout(false);
    setAcademics(false);
    setHapenings(false);
  };

  const [Academics, setAcademics] = useState(false);

  const openAcadamics = () => {
    setAcademics(!Academics);
    setHapenings(false);
    setAbout(false);
  };

  const [Hapenings, setHapenings] = useState(false);

  const openHapenings = () => {
    setHapenings(!Hapenings);
    setAcademics(false);
    setAbout(false);
  };

  const [About, setAbout] = useState(false);

  const openAbout = () => {
    setAbout(!About);
    setAcademics(false);
    setHapenings(false);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div
          className="flex justify-center items-center my mr-4 lg:hidden"
          onClick={openMenu}
        >
          {/* menu icon  */}
          {!menuOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              className="h-6 w-6 bg-gray-300 p-2 m-1 rounded-md"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="h-6 w-6 bg-gray-300 p-2 m-1 rounded-md"
            />
          )}
        </div>
        <img src={cvr} alt="Logo" className="h-16 w-16 hidden md:block" />
        <div className="flex justify-center">
          <p className="lg:text-4xl m-auto font-bold heading text-center text-2xl">
            Department of Emerging Technologies
          </p>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div className=" navitems hidden lg:flex justify-evenly nav navbar-container transition-all duration-300">
        <ul className="flex justify-center">
          <li
            className="mr-8 m-2 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <a>Home</a>
          </li>
          <li
            className="mr-8 m-2 cursor-pointer"
            onClick={() => navigate("/faculty")}
          >
            <a>Faculty and Staff</a>
          </li>
          <li
            className="mr-8 m-2 relative flex "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col">
              <div className="flex">
                <a className="cursor-pointer">Academics</a>
                <div className="ml-2">
                  <RiArrowDropUpLine
                    className={`text-3xl cursor-pointer ${
                      !isHovered ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`mt-6 m-3 z-80 absolute  ${
                  isHovered ? "block animate-fade-in" : "hidden"
                }`}
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  borderRadius: "5px",
                  background: "#fff",
                  width: "200px",
                  zIndex: "100",
                }}
              >
                {isHovered && (
                  <ul>
                    <li className="animate-color p-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/aiml");
                        }}
                      >
                        AI/ML
                      </div>
                    </li>
                    <hr />
                    <li className="animate-color p-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/cs");
                        }}
                      >
                        Cyber Security
                      </div>
                    </li>
                    <hr />
                    <li className="animate-color p-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/csit");
                        }}
                      >
                        CSIT
                      </div>
                    </li>
                    <hr />
                    <li className="animate-color p-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/ds");
                        }}
                      >
                        Data Science
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
          <li
            className="mr-8 m-2 cursor-pointer"
            onClick={() => navigate("/infrastructure")}
          >
            <a>Infrastructure</a>
          </li>
          <li className="mr-8 m-2">
            <a href="/">Research</a>
          </li>
          <li
            className="mr-8 m-2 relative flex"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <div className="flex flex-col">
              <div className="flex">
                <a className="cursor-pointer">Happenings</a>
                <div className="ml-2">
                  <RiArrowDropUpLine
                    className={`text-3xl cursor-pointer ${
                      !isHovered1 ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`mt-6 z-80 absolute  ${
                  isHovered1 ? "block animate-fade-in" : "hidden"
                }`}
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  borderRadius: "5px",
                  background: "#fff",
                  width: "200px",
                  zIndex: "100",
                }}
              >
                {isHovered1 && (
                  <ul className="">
                    <li className="animate-color p-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          navigate("/club");
                        }}
                      >
                        Club
                      </div>
                    </li>
                    <li
                      className="animate-color p-2"
                      onClick={() => {
                        navigate("/Activities");
                      }}
                    >
                      <div className="cursor-pointer">Activities</div>
                    </li>
                    <hr />
                  </ul>
                )}
              </div>
            </div>
          </li>
          <li
            className="mr-8 m-2 cursor-pointer"
            onClick={() => {
              navigate("/forum");
            }}
          >
            <a>Action Center</a>
          </li>
          <li
            className="mr-8 m-2 relative flex"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="flex flex-col">
              <div className="flex">
                <a className="cursor-pointer">About Us</a>
                <div className="ml-2">
                  <RiArrowDropUpLine
                    className={`text-3xl cursor-pointer  ${
                      !isHovered2 ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`mt-6 z-80 absolute  ${
                  isHovered2 ? "block animate-fade-in" : "hidden"
                }`}
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  borderRadius: "5px",
                  background: "#fff",
                  width: "200px",
                  zIndex: "100",
                }}
              >
                {isHovered2 && (
                  <ul className="">
                    <li
                      className="animate-color p-2"
                      onClick={() => {
                        navigate("/contactus");
                      }}
                    >
                      <div className="cursor-pointer">Contact Us</div>
                    </li>
                    <hr />
                    <li
                      className="animate-color p-2"
                      onClick={() => {
                        navigate("/development-team");
                      }}
                    >
                      <div className="cursor-pointer">Development Team</div>
                    </li>
                    <hr />
                    <li
                      className="animate-color p-2"
                      onClick={() => {
                        navigate("/bugreport");
                      }}
                    >
                      <div className="cursor-pointer">Report a bug</div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="lg:hidden min-h-fit bg-gray-200 animate-left-right overflow-y-scroll absolute top-0 left-0 z-50 mt-16 rounded-r-lg shadow-2xl">
          <ul className="flex flex-col items-start animate-fade-in">
            <li
              className="mr-8 m-2 relative"
              onClick={() => {
                navigate("/home");
                setMenuOpen(false);
              }}
            >
              Home
            </li>
            <hr />
            <li
              className="mr-8 m-2 relative"
              onClick={() => {
                console.log("clicked");
                navigate("/faculty");
                setMenuOpen(false);
              }}
            >
              Faculty
            </li>
            <hr />
            <li className="mr-8 m-2 relative">
              <div>
                <a href="" style={{ color: Academics ? "red" : "black" }}>
                  Acadamics
                </a>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-6 w-6 ml-2"
                  onClick={openAcadamics}
                />
              </div>
              <div>
                {Academics && (
                  <ul className="animate-fade-in">
                    <li
                      className="m-2"
                      onClick={() => {
                        navigate("/aiml");
                        setMenuOpen(false);
                      }}
                    >
                      <div className="cursor-pointer">AI/ML</div>
                    </li>
                    <hr />
                    <li
                      className="m-2"
                      onClick={() => {
                        navigate("/cs");
                        setMenuOpen(false);
                      }}
                    >
                      <div className="cursor-pointer">Cyber Security</div>
                    </li>
                    <hr />
                    <li
                      className="m-2"
                      onClick={() => {
                        navigate("/csit");
                        setMenuOpen(false);
                      }}
                    >
                      <div className="cursor-pointer">CSIT</div>
                    </li>
                    <hr />
                    <li
                      className="m-2"
                      onClick={() => {
                        navigate("/ds");
                        setMenuOpen(false);
                      }}
                    >
                      <div className="cursor-pointer">Data Science</div>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <hr />
            <li
              className="mr-8 m-2 relative"
              onClick={() => {
                navigate("/infrastructure");
                setMenuOpen(false);
              }}
            >
              <a>Infrastructure</a>
            </li>
            <hr />
            <li className="mr-8 m-2 relative">
              <a href="/">Research</a>
            </li>
            <hr />
            <li className="mr-8 m-2 relative">
              <div>
                <a href="/" style={{ color: Hapenings ? "red" : "black" }}>
                  Happenings
                </a>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-6 w-6 ml-2"
                  onClick={openHapenings}
                />
              </div>
              {Hapenings && (
                <ul className="animate-fade-in">
                  <li
                    className="m-2"
                    onClick={() => {
                      navigate("/club");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="cursor-pointer">Club</div>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      navigate("/Activities");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="cursor-pointer">Activities</div>
                  </li>
                  <hr />
                </ul>
              )}
            </li>
            <hr />
            <li
              className="mr-8 m-2 relative"
              onClick={() => {
                navigate("/forum");
                setMenuOpen(false);
              }}
            >
              Action Center
            </li>
            <hr />
            <li className="mr-8 m-2 relative">
              <div>
                <a href="/" style={{ color: About ? "red" : "black" }}>
                  About Us
                </a>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-6 w-6 ml-2"
                  onClick={openAbout}
                />
              </div>
              {About && (
                <ul className="animate-fade-in">
                  <li
                    className="m-2"
                    onClick={() => {
                      navigate("/contactus");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="cursor-pointer">Contact Us</div>
                  </li>
                  <hr />
                  <li
                    className="m-2"
                    onClick={() => {
                      navigate("/development-team");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="cursor-pointer">Development Team</div>
                  </li>
                  <hr />
                  <li
                    className="m-2"
                    onClick={() => {
                      navigate("/bugreport");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="cursor-pointer">Report a Bug</div>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
