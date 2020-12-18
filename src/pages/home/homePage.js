import React from 'react';
import {MDBContainer} from 'mdbreact';
import CarouselPage from './carousel';
import CardExample from './whyAbexCard';
import MultiCarouselPage from './travelAround';
import TravelPackages from './travelPackages';

function HomePage(){
    return(
        <>
        <CarouselPage />
        <CardExample />
        <MultiCarouselPage />
        <TravelPackages />
</>
    )
}
export default HomePage;