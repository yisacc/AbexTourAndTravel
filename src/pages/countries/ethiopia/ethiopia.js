import React,{useEffect, useState} from 'react';
import CarouselPage from './carousel';
import ScrollNav from './scrollNav';
import IntroSection from './intro';
import ExampleTrips from './exampleTrips';
import Destinations from './destinations';
import axiosInstance from "../../../utils/axios";

function Ethiopia(){
    const [carouselData,setCarouselData]=useState({
        url:'',
bannerText:''
    });
    const [introSecData,setIntroSecData]=useState({
        luxuryTripTitle:'',
        description:'',
        quote:''
    });
    const [exampleTripsData,setExampleTripsData]=useState({
        exampleTripsTitle:'',
        example_trips:[]
    });
    useEffect(() => {
    axiosInstance.get('countries/603606f38b6fbf5d881c5685')
    .then((todo) => {
        setCarouselData((prevState) => ({
            ...prevState,
            url:todo.data.bannerImage.url ,
            bannerText:todo.data.BannerText
          }));
          setIntroSecData((prevState)=>({
              ...prevState,
luxuryTripTitle:todo.data.luxuryTripTitle,
description:todo.data.description,
quote:todo.data.quote
          }));
          setExampleTripsData((prevState)=>({
              ...prevState,
              exampleTripsTitle:todo.data.exampleTripsTitle,
              example_trips:todo.data.example_trips
          }));
        
    })
    .catch((err) => {
        console.log(err.data.message);
    })
}, []);
    return(
        <>
        <CarouselPage carouselData={carouselData} />
        <ScrollNav />
        <IntroSection introSecData={introSecData} />
        <ExampleTrips exampleTripsData={exampleTripsData} />
        <Destinations />
        
</>
    )
}
export default Ethiopia;