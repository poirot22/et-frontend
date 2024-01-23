import React from "react";
import aimlcover from "../../assets/aiml-cover.jpg";
import './aiml.css';
export default function AIML() {
    return (
        <>
       <div class=" ml-12 mr-12 relative">
            <img src={aimlcover} alt=""  class=" mt-10 h-48 md:h-96" id="aimlcover" />
            <div class="absolute sm:top-0 md:top-36 left-1/3 text-white font-bold text-4xl"><h1>Department of AI/ML</h1></div>
            <h1 class="pl-4 text-3xl font-semibold heading-top mt-10">
                About the Department
            </h1>
            <div>
            <div class="mt-5 text-justify">
                The AI/ML Department at CVR College of Engineering is a dynamic hub within the institution's academic landscape, 
                specializing in Artificial Intelligence and Machine Learning. Committed to shaping future technologists and innovators, 
                the department focuses on providing students with a solid foundation in AI and ML concepts, coupled with practical, 
                hands-on experiences. The department prides itself on a well-structured curriculum that covers both fundamental 
                theories and real-world applications of AI and ML. Supported by experienced faculty members, cutting-edge 
                infrastructure, and state-of-the-art labs, students are equipped with the necessary tools to explore, experiment, 
                and contribute to advancements in these transformative technologies. With a student-centric approach, the AI/ML 
                Department at CVR College of Engineering emphasizes holistic development. Through research opportunities, industry 
                partnerships, and career development programs, the department ensures that students not only gain theoretical 
                knowledge but also practical skills and industry exposure, preparing them for successful careers in the dynamic 
                fields of Artificial Intelligence and Machine Learning.
            </div> <br />

            </div>
       </div>
        
        
        </>
    )
}
