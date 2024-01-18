import React from "react";
import cvr from "../../assets/cvr.png";
import hod from "../../assets/hod.png";
import Slide from "./Home-Children/slides.jsx";
import Info from "./Home-Children/info.jsx";
import Events from "./Home-Children/events.jsx";
import News from "./Home-Children/news.jsx";

export default function Home() {

   
    return (
        <>
           <Slide/>
           <div class="flex flex-wrap lg:flex-nowrap xl:flex-nowrap ">
                <Info/>
                <div>
                    <Events/> <br />
                    <News/>
                </div>
           </div>
            
        </>
    )
}

