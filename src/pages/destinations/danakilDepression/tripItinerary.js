import { MDBContainer } from 'mdbreact';
import react, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TripItinerary=(props)=>{
   const {exampleTripSection}=props;
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

    return(
        <>
<MDBContainer className="abex-tour-container mt-5 example-trip-itinerary padded-section" fluid>
<div class="row row-flex-md">
<div class="col-md-7">
<h2 class="underlined"> Example trip itinerary</h2>
<div dangerouslySetInnerHTML={{__html: exampleTripSection}} />
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
   <div class="location addis-ababa-0">
   <Link to="#addis-ababa-0"> <strong>Days 1-2:</strong> Addis Ababa </Link>
   </div>
   <div class="location simien-mountains-1"> <Link to="#simien-mountains-1"> <strong>Days 2-4:</strong> Simien Mountains </Link></div>
   <div class="location lalibela-2"> <Link to="#lalibela-2"> <strong>Days 4-6:</strong> Lalibela </Link></div>
   <div class="location tigray-region-3"> <Link to="#tigray-region-3"> <strong>Days 6-8:</strong> Tigray Region </Link></div>
   <div class="location omo-valley-4"> <Link to="#omo-valley-4"> <strong>Days 8-11:</strong> Omo Valley </Link></div>
   <div class="location addis-ababa-5"> <Link to="#addis-ababa-5"> <strong>Day 11:</strong> Addis Ababa </Link></div>
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
   <div class="shift"> <Link class="btn btn-black" to="/contact"> Plan your adventure </Link></div>
</div>
</div>
</div>
</div>
</MDBContainer>
</>
    )
}

export default TripItinerary;