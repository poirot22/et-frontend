import React from "react";

import Slide from "./Home-Children/slides.jsx";
import Info from "./Home-Children/info.jsx";
import Events from "./Home-Children/events.jsx";
import Mission from "./Home-Children/mission.jsx";
import Numbers from './Home-Children/Numbers.jsx';
import Carousel from './Home-Children/carousel/carousel.jsx';

export default function Home() {
  return (
    <>
      <Carousel/>
      <Info />
      <Events />
      <Mission />
      
    </>
  );
}
