import React from "react";
import aimlcover from "../../assets/aiml-cover.jpg";
import "./aiml.css";
import collegeoverview from "../../assets/college-overview.jpg";
import { useState, useEffect } from "react";
export default function AIML() {
  const [count, setCount] = useState(0);
  const targetNumber = 11;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, targetNumber]);
  return (
    <>
      <div class=" ml-12 mr-12 relative mt-4">
        {/* <img src={aimlcover} alt=""  class=" mt-10 h-48 md:h-96 w-full" id="aimlcover" /> 
            <div class="absolute text-white font-bold text-4xl"><h1 class="m-auto">Department of AI/ML</h1></div>  */}

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

        <div>
            
        </div>

        <div className="relative h-64 header">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${collegeoverview})`,
              filter: "blur(10px)",
            }}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-wrap space-x-60">
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
