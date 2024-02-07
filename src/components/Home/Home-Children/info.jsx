import React from "react";
import hod from "../../../assets/hod.png";
import hodnew from "../../../assets/HODNEW.webp";
import "./info.css";
import { useState } from "react";

export default function Info() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div class=" mt-12 ml-7 p-2 mr-7 ">
        <div class="">
          <h1 class="pl-4 text-3xl font-semibold heading-top">
            Message from the HOD
          </h1>
        </div>
        <img class="hod-image mt-5 w-full md:w-2/3 p-2 mr-5" src={hodnew} alt="" />
        <div class="text-justify p-2  Message">
          <div>
            <p className="mb-0">
              True to its vision of “In pursuit of Excellence”, CVR College of
              Engineering was the first college in the State to introduce M.Tech
              programs in Artificial Intelligence and Data Sciences, well before
              AICTE could recognize them as emerging areas. Continuing the
              trend, CVR College pioneered a new B.Tech course in Computer
              Science and Information Technology (CSIT) in the year 2019, the
              brainchild of our Chairman. CVR was the only college in Telangana
              to do so at that time. The new course brought the best of both CSE
              and IT together providing CSIT graduates more opportunities than
              the graduates of CSE and IT courses. The emerging areas included
              in the new program have been identified by the national level
              committee as part of National Perspective Plan for Engineering
              Education and accepted by AICTE. Also, the courses provide
              employment and research opportunities in these areas. The
              department was renamed as Department of Emerging Technologies (ET)
              in 2022 and now also includes the UG programmes in AIML, Data
              Science and Cyber Security.
            </p>
           
          </div>
          <br />
          {show && (
            <p className="mt-0 mb-0">
              The program is designed with an intent to educate the engineering
              students on the emerging areas of Artificial Intelligence (AI),
              Machine Learning (ML), Internet of Things (IoT) and Data Sciences
              (DS) by introducing them as core courses. The program also
              educates the students with the related courses like statistics, R
              Programming, Big Data Analytics & Platforms, etc. Further, each
              student can choose from various streams in their professional
              electives that includes cutting edge technologies like Cyber
              Security (CS), Blockchain technologies, NoSQL Databases, Social
              Media Analytics, Neural Networks & Fuzzy Systems, Deep Learning
              and many more.
            </p>
          )}
         {show &&(
             <p className="mt-0 mb-0">
             The Department has 8 laboratory units consisting of 258 systems,
             catering to the B. Tech curriculum. The systems use standard
             licensed software as a college policy including open source.
           </p>
         )}
         {show &&(
            <button class="md:hidden text-gray-500" onClick={() => setShow(false)}>Read Less</button>
         )}
         <p className="hidden md:flex mt-0 mb-0">
              The program is designed with an intent to educate the engineering
              students on the emerging areas of Artificial Intelligence (AI),
              Machine Learning (ML), Internet of Things (IoT) and Data Sciences
              (DS) by introducing them as core courses. The program also
              educates the students with the related courses like statistics, R
              Programming, Big Data Analytics & Platforms, etc. Further, each
              student can choose from various streams in their professional
              electives that includes cutting edge technologies like Cyber
              Security (CS), Blockchain technologies, NoSQL Databases, Social
              Media Analytics, Neural Networks & Fuzzy Systems, Deep Learning
              and many more.
            </p>
            <br />
            <p className="hidden md:flex mt-0">
             The Department has 8 laboratory units consisting of 258 systems,
             catering to the B. Tech curriculum. The systems use standard
             licensed software as a college policy including open source.
           </p>
          <p className="name font-semibold">Dr. H. N. Lakshmi</p>
            
        </div>
      </div>
    </>
  );
}

