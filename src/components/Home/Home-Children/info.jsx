import React from "react";
import hod from "../../../assets/hod.png";

export default function Info() {

    return (
        <>
            <div  class="ml-8 w-3/5 border  p-2">
                <div class=""> 
                    <img src={hod} alt="" class="p-2"/>
                    <p class="text-center mb-4 font-bold">Dr. Lakshmi H.N, Professor and Head</p>
                </div>
                <div class="text-justify p-2">
                    <p>
                        True to its vision of “In pursuit of Excellence”, CVR College of
                        Engineering was the first college in the State to introduce M.Tech
                        programs in Artificial Intelligence and Data Sciences, well before AICTE
                        could recognize them as emerging areas. Continuing the trend, CVR College
                        pioneered a new B.Tech course in Computer Science and Information
                        Technology (CSIT) in the year 2019, the brainchild of our Chairman. CVR
                        was the only college in Telangana to do so at that time. The new course
                        brought the best of both CSE and IT together providing CSIT graduates more
                        opportunities than the graduates of CSE and IT courses. The emerging areas
                        included in the new program have been identified by the national level
                        committee as part of National Perspective Plan for Engineering Education
                        and accepted by AICTE. Also, the courses provide employment and research
                        opportunities in these areas. The department was renamed as Department of
                        Emerging Technologies (ET) in 2022 and now also includes the UG programmes
                        in AIML, Data Science and Cyber Security.
                    </p>
                    <br/>
                    <p>
                        The program is designed with an intent to educate the engineering students
                        on the emerging areas of Artificial Intelligence (AI), Machine Learning
                        (ML), Internet of Things (IoT) and Data Sciences (DS) by introducing them
                        as core courses. The program also educates the students with the related
                        courses like statistics, R Programming, Big Data Analytics & Platforms,
                        etc. Further, each student can choose from various streams in their
                        professional electives that includes cutting edge technologies like Cyber
                        Security (CS), Blockchain technologies, NoSQL Databases, Social Media
                        Analytics, Neural Networks & Fuzzy Systems, Deep Learning and many more.
                    </p>
                    <br/>
                    <p>
                        The Department has 8 laboratory units consisting of 258 systems, catering
                        to the B. Tech curriculum. The systems use standard licensed software as a
                        college policy including open source.
                    </p>
                </div>
            </div>
        </>
    )

}