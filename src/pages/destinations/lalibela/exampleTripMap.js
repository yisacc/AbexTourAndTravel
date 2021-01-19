import react from 'react';
import {MDBContainer} from 'mdbreact';
import lalibelamap from '../../../images/maps/mapLalibela.PNG';

const ExampleTripMap=()=>{
   const mapStyles = {        
      height: "100vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    }

    return(
        <>
        <MDBContainer fluid>
        <div class="example-trip-map bg-grey row">
        <div class="map-wrapper col-xs-12 col-lg-6">
   <div class="map">
   <img src={lalibelamap}></img>
   </div>
      </div>
      <div class="col-xs-12 col-lg-6 col-lg-offset-6">
         <div class="example-trip-map__padding">
            <h2>At a glance</h2>
            <div class="tab-content current">
               <p>Start married life in style with an unforgettable honeymoon that combines the luxury of a private island in the Seychelles and the thrills of tracking game in Kenya’s world-famous national parks.</p>
               <p>You’ll spend four nights in the Mara Conservancies, a protected area that has been set up in conjunction with the local Masaai communities. The Conservancies share an unfenced border with the Masai Mara National Park so you’ll enjoy the same game viewing opportunities but it tends to be less busy and feels more exclusive. Your days will be filled with morning and afternoon game drives and there are options for guided bush walks as well, to expose you to even the tiniest inhabitants of the park&nbsp;. You’ll be staying in a luxury lodge so when you’re not out exploring, relax in style and simply enjoy your magical surroundings.</p>
               <p>It’s then time for some rest and relaxation in the Seychelles –&nbsp;its white, palm-fringed beaches and turquoise waters make it one of the world’s most beautiful island destinations. Explore the beaches, swim and snorkel in the Indian Ocean, hike the mountain trails or simply unwind at your luxury villa.</p>
            </div>
         </div>
      </div>
   </div>
</MDBContainer>
        </>
    )
}

export default ExampleTripMap;