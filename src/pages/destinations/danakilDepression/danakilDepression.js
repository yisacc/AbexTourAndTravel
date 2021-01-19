import React, { useState,useEffect } from 'react';
import Carousel from './carousel';
import Card from './card';
import ExampleTripMap from './exampleTripMap';
import Registration from '../registration';
import TripItinerary from './tripItinerary';
import axiosInstance from '../../../utils/axios';

function DanakilDepression(){
    debugger;
    const [carousel,setCarousel]=useState([]);
    const [introduction,setIntroduction]=useState('');
    const [itineraryHighlights,setItineraryHighlights]=useState('');
    const [whatsIncluded,setWhatsIncluded]=useState('');
    const [ataglance,setAtaglance]=useState('');
    const [exampleTripSection,setExampleTripSection]=useState('');
    useEffect(() => {
    axiosInstance.get('/example-trips')
    .then((todo) => {
        debugger;
            setCarousel(todo.data[0].Carousel);
            setIntroduction(todo.data[0].Introduction);
            setItineraryHighlights(todo.data[0].ItineraryHighlights);
            setWhatsIncluded(todo.data[0].WhatsIncluded);
            setAtaglance(todo.data[0].Ataglance);
            setExampleTripSection(todo.data[0].ExampleTripSection);
        
        
    })
    .catch((err) => {
    })
}, []);
    return(
        <>
        <Carousel carousel={carousel} />
        <Card introduction ={introduction} itineraryHighlights={itineraryHighlights} whatsIncluded={whatsIncluded} />
        <ExampleTripMap ataglance={ataglance} />
        <TripItinerary exampleTripSection={exampleTripSection} />
        <Registration />
        
</>
    )
}
export default DanakilDepression;