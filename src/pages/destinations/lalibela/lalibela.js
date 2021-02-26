import React, { useEffect, useState } from 'react';
import Carousel from './carousel';
import Card from './card';
import ExampleTripMap from './exampleTripMap';
import Registration from '../registration';
import TripItinerary from './tripItinerary';
import { useSelector } from 'react-redux';

function Lalibela(){
    const [carouselData,setCarouselData]=useState({
        image:[],
        bannerText:'',
    });
    const [cardData,setCardData]=useState({
        itineraryHighlights:'',
        whatsIncluded:'',
        introduction:''
    });
    const [exampleTripMapData,setExampleTripMapData]=useState({
        map:'',
        ataglance:''
    });
    const [tripItineraryId,setTripItenaryId]=useState();
    const data = useSelector((exampleTrip) => exampleTrip);
   let exampleTrip= data.exampleTrip[data.exampleTrip.length-1];
   useEffect(()=>{
    setCarouselData((prevState)=>({
        ...prevState,
        image:exampleTrip.Carousel,
        bannerText:exampleTrip.TripName
    }));
    setCardData((prevState)=>({
        ...prevState,
        itineraryHighlights:exampleTrip.ItineraryHighlights,
        whatsIncluded:exampleTrip.WhatsIncluded,
        introduction:exampleTrip.Introduction
    }));
    setExampleTripMapData((prevState)=>({
        ...prevState,
        map:exampleTrip.Map.url,
        ataglance:exampleTrip.Ataglance
    }));
    setTripItenaryId(exampleTrip._id);

   },[]);
    return(
        <>
        <Carousel carouselData={carouselData}/>
        <Card cardData={cardData} />
        <ExampleTripMap exampleTripMapData={exampleTripMapData} />
        <TripItinerary tripItineraryId={tripItineraryId} />
        <Registration />
        
</>
    )
}
export default Lalibela;