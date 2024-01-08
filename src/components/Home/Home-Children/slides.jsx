import React from "react";
import { Carousel } from 'react-carousel-minimal';
import img1 from "../../../assets/img1.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import faculty4 from "../../../assets/faculty4.png";

export default function Slide(){

    var data=[
        {caption:"",image:faculty4},
        {caption:"",image:img1},
        {caption:"",image:img4},
        {caption:"",image:img5},
    ]
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
    <>
            <Carousel 
                class="mt-0"
                data={data}
                time={5000}
                width="1450px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnailWidth="100px"
                style={{
                textAlign: "center",
                maxWidth: "1450px",
                maxHeight: "500px",
                margin: "40px auto",
                }}
            />

    </>
    )
}