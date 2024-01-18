import React from "react";

import Slide from "./Home-Children/slides.jsx";
import Info from "./Home-Children/info.jsx";
import Events from "./Home-Children/events.jsx";
import Numbers from "./Home-Children/numbers.jsx";

export default function Home() {

   
    return (
        <>
           <Slide/>
                <Info/>
                <Events/>
                <Numbers/>
            
        </>
    )
}

