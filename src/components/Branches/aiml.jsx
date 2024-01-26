import React from "react";
import aimlcover from "../../assets/aiml-cover.jpg";
import "./aiml.css";
import collegeoverview from "../../assets/college-overview.jpg";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function AIML() {
  const [count, setCount] = useState(0);
  const targetNumber = 11;
  const [isVisibleNumbers, setIsVisibleNumbers] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisibleNumbers && count < targetNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, isVisibleNumbers, targetNumber]);

  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleNumbers(true);
          } else {
            setIsVisibleNumbers(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, [divRef]);
  const [firstYear, setFirstYear] = useState(false);

  const handleFirstYearClick = () => {
    setFirstYear((prevFirstYear) => !prevFirstYear);
    if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - window.innerHeight / 2 + rect.height;
    
        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }
  };

  return (
    <>
      <div class=" ml-12 mr-12 relative mt-4">
        <div className="relative h-64 header">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${aimlcover})`,
              filter: "blur(5px)",
            }}
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
            id="aiml-heading"
          >
            <h1 className="text-5xl text-white font-bold">
              Department of AI/ML
            </h1>
          </div>
        </div>

        <h1 class="pl-4 text-3xl font-semibold heading-top mt-10">
          About the Department
        </h1>
        <div>
          <div class="mt-5 text-justify">
            The AI/ML Department at CVR College of Engineering is a dynamic hub
            within the institution's academic landscape, specializing in
            Artificial Intelligence and Machine Learning. Committed to shaping
            future technologists and innovators, the department focuses on
            providing students with a solid foundation in AI and ML concepts,
            coupled with practical, hands-on experiences. The department prides
            itself on a well-structured curriculum that covers both fundamental
            theories and real-world applications of AI and ML. Supported by
            experienced faculty members, cutting-edge infrastructure, and
            state-of-the-art labs, students are equipped with the necessary
            tools to explore, experiment, and contribute to advancements in
            these transformative technologies. With a student-centric approach,
            the AI/ML Department at CVR College of Engineering emphasizes
            holistic development. Through research opportunities, industry
            partnerships, and career development programs, the department
            ensures that students not only gain theoretical knowledge but also
            practical skills and industry exposure, preparing them for
            successful careers in the dynamic fields of Artificial Intelligence
            and Machine Learning.
          </div>{" "}
          <br />
        </div>

        <div className="ml-12 mr-12 mt-4">
          <h1 className="text-3xl font-semibold mb-4">AIML Course Structure</h1>

          <div
            className="flex flex-col"
            
          >
            <div className="flex items-center cursor-pointer" onClick={handleFirstYearClick}>
              <FontAwesomeIcon
                icon={firstYear ? faCaretDown : faCaretUp}
                className="text-gray-600 mr-2"
              />
              <h1 className="text-xl font-semibold">First Year</h1>
            </div>

            {firstYear && (
              <div className="mt-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-8">
                  {[1, 2].map((semester) => (
                    <div key={semester}>
                      <h1 className="text-xl font-semibold mb-2">
                        Semester-{semester}
                      </h1>
                      <table className="w-full" border={1}>
                        <thead>
                          <tr>
                            <th className="py-2 px-4 bg-gray-200">
                              Subject Code
                            </th>
                            <th className="py-2 px-4 bg-gray-200">Subject</th>
                            <th className="py-2 px-4 bg-gray-200">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 7 }).map((_, index) => (
                            <tr key={index}>
                              <td className="py-2 px-4">18MAT11</td>
                              <td className="py-2 px-4">
                                Engineering Mathematics-I
                              </td>
                              <td className="py-2 px-4">4</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative h-64 header mt-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${collegeoverview})`,
              filter: "blur(10px)",
            }}
          />
          <div
            className="absolute inset-0 flex justify-center items-center "
            ref={divRef}
          >
            <div className="w-full flex justify-evenly">
              <div className="flex flex-col justify-center">
                <span className="text-white text-4xl font-bold">{count}</span>

                <p className="text-white text-xl  font-semibold">
                  Staasdfasdfaff
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-4xl font-bold">{count}</span>
                <p className="text-white text-xl  font-semibold">
                  Staasdfasdfaff
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-4xl font-bold">{count}</span>
                <p className="text-white text-xl  font-semibold">
                  Staasdfasdfaff
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-4xl font-bold">{count}</span>
                <p className="text-white text-xl  font-semibold">
                  Staasdfasdfaff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
