import React from 'react'

import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import Faculty from 'C:/Users/SHIVARAM/ETReact/et-frontend/src/assets/images/Faculty.jpg';
import Fest from 'C:/Users/SHIVARAM/ETReact/et-frontend/src/assets/images/Fest.JPG';

import "bootstrap/dist/js/bootstrap.bundle.min";


export default function Carousel() {
  return (
    <div className="use-bootstrap"> 
    <CCarousel controls indicators dark>
    <CCarouselItem>
        <CImage className="d-block w-100" src={Faculty} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={Fest} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={Fest} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
</CCarousel>
</div>
  )
}
