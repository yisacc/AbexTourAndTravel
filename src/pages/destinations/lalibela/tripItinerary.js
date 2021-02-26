import { MDBContainer } from 'mdbreact';
import React, { useEffect,useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from "../../../utils/axios";


const TripItinerary=(props)=>{
   debugger;
   const {tripItineraryId}=props;
   const [exampleTripSections,setExampleTripSections]=useState({
      example_trip_itineraries:[]
   });
   useEffect(()=>{if(exampleTripSections.example_trip_itineraries.length==0){
      axiosInstance.get(`example-trips`,{params: { id: tripItineraryId }})
      .then((response)=>{
         debugger;
         setExampleTripSections((prevState)=>({
            ...prevState,
            example_trip_itineraries:response.data[0].example_trip_itineraries
         }))
      })
      .catch((err) => {
         debugger;
     })
      }
   },[]);
   
   const myRefFirst = useRef(null);
   const myRefSecond = useRef(null);
   const myRefThird = useRef(null);
   const myRefFourth = useRef(null);
   const myRefFifth = useRef(null);
   const myRefSix = useRef(null);
   const myRefSeventh = useRef(null);
const handleMouseEnter=(e)=>{
   var id = e.currentTarget.id;
   var element= document.getElementsByClassName(id);
element[0].classList.add('active');

}
const handleMouseLeave=(e)=>{
   var id = e.currentTarget.id;
   var element= document.getElementsByClassName(id);
element[0].classList.remove('active');
}
const executeScrollFirst = () => myRefFirst.current.scrollIntoView();
const executeScrollSecond = () => myRefSecond.current.scrollIntoView();
const executeScrollThird = () => myRefThird.current.scrollIntoView();
const executeScrollFourth = () => myRefFourth.current.scrollIntoView();
const executeScrollFifth = () => myRefFifth.current.scrollIntoView();
const executeScrollSixth = () => myRefSix.current.scrollIntoView();
    return(
        <>
<MDBContainer className="abex-tour-container mt-5 example-trip-itinerary padded-section" fluid>
<div class="row row-flex-md">
<div class="col-md-7">
<h2 class="underlined"> Example trip itinerary</h2>
{exampleTripSections.example_trip_itineraries.map(element=>(
   <section ref={myRefFirst} data-scroll-section="Days 1-2" class="example-trip-section" id={element.Section_id} onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="8.980603" data-lng="38.757761"> <strong>{element.Days}</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title">{element.Title}</h3>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      {Object.keys(element.flightsTransfers).map(data=>(
         <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>{element.flightsTransfers[data]}</p>
      </div>
      ))}
      
   </div>
    <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/304819/Addis-Ababa.-678x9999.jpg"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Addis Ababa city tour" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>{element.activitiesTitle}</span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>{element.activitiesDescription}</p>
            </div>
         </div>
      </div>
   </div>
   {
      element.isThereFlightsAndTransfers&&element.flightsAndTransfersBefore?
      <>
      <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
      <div class="flights-transfers__container">
         {Object.keys(element.flightsAndTransfersBefore).map(data=>(
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>{element.flightsAndTransfersBefore[data]}</p>
      </div>
      ))}
      </div>
      </>
      
   
:null
   }
  </section>
))}

</div>
<div class="col-md-4 col-md-offset-1">
<div class="tip-box">
   <div class="tip-box__cross"></div>
   <div class="tip-box__lightbulb"></div>
   <div class="tip-box__instruction"> Use the navigation to jump down to a particular part of this example trip</div>
   <div class="tip-box__arrow">
      <div class="arrows"></div>
   </div>
</div>
<div class="floating-navigation">
{exampleTripSections.example_trip_itineraries.map(element=>(<div class={`location ${element.Section_id}`}>
   <Link onClick={executeScrollFirst}> <strong>{element.Days}:</strong> {element.Title} </Link>
   </div>))}
   
  
   <div class="call">
   <div class="floating_navigation__price">
      <div class="price-from floating-nav__price-from"> Prices start from</div>
      <span class="price floating-nav__price" data-price="11924">$11,924</span> <span class="price-pp floating-nav__price-pp"> PP </span>
   </div>
   <div>
      <span class="ui-font v-align">Call us</span>
      <div class="number v-align"> <Link class="tel rTapNumber420176" to="tel:+251923052359" style={{visibility: "visible"}}>+251-92-305-2359</Link></div>
      <span class="ui-font v-align">or</span>
   </div>
   <div class="shift"> <Link class="btn btn-black" to="#cta-container"> Plan your adventure </Link></div>
</div>
</div>
</div>
</div>
</MDBContainer>
</>
    )
}

export default TripItinerary;