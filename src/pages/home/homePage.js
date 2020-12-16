import React from 'react';
import {MDBContainer} from 'mdbreact';
import CarouselPage from './carousel';
import CardExample from './whyAbexCard';
import MultiCarouselPage from './travelAround';

function HomePage(){
    return(
        <>
        <CarouselPage />
        <CardExample />
        <MultiCarouselPage />
</>
    )
}
export default HomePage;