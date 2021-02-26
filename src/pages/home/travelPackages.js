import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBContainer } from "mdbreact";
import axiosInstance from "../../utils/axios";
import { Link } from 'react-router-dom';

const TravelPackages = () => {
  const [exampleTrips,setExampleTrips]=useState({trips:{}});
  useEffect(() => {
  axiosInstance.get('/example-trips')
  .then((todo) => {
     setExampleTrips((prevState)=>({
       ...prevState,
       trips:todo.data
     }))
      
  })
  .catch((err) => {
      console.log(err.data.message);
  })
}, []);
const handleClick=(id)=>{};
  return (
    <MDBContainer className="abex-tour-container padded-section" fluid>
        <h1 className="underlined text-center">Inspiring luxury trip ideas</h1>
        <MDBCardGroup className="mb-5">
        {Object.keys(exampleTrips.trips).map(element => (
          exampleTrips.trips[element].ShowInHomePage?
          <div class="col-4">
          <MDBCard className="mb-4">
          <MDBCardImage src={exampleTrips.trips[element].cardImage.url} alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody className="packages-card-body">
            <MDBCardTitle className="travel-packages-title" tag="h5"> {exampleTrips.trips[element].TripName}</MDBCardTitle>
            <div className="card-label t-tag">
            <div className="price-from">Prices start from</div>
            <div className="price-from">{exampleTrips.trips[element].priceStartFrom}</div>
            </div>
            <MDBCardText className="travel-packages-description">
            {exampleTrips.trips[element].travelPackagesDescription}
            </MDBCardText>
            <div class="card-button t-tag t-tag--black"><Link onClick={()=>handleClick(exampleTrips.trips[element]._id)} class="t-tag">EXPLORE THIS TRIP</Link></div>
          </MDBCardBody>
        </MDBCard>
        </div>
        :null
  
        ))
      }
      </MDBCardGroup>
    </MDBContainer>
  );
}

export default TravelPackages;