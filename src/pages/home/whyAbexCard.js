import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBContainer, MDBRow } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBContainer className="abex-tour-container padded-section" fluid>
        <h1 className="underlined text-center">Why book with Abex Tour?</h1>
        <MDBRow>
      <MDBCard className="why-abex-card col-md-3">
        
        <h3 className="text-center abex-tour-card-header">Personalised design</h3>
          <MDBCardText className="text-center sans-serif">
          We’ll plan your trip around your specific interests, tastes and preferences, providing helpful tips and honest advice based on first-hand knowledge of the destination.
          </MDBCardText>
      </MDBCard>
      <MDBCard className="why-abex-card col-md-3">
        <h3 className="text-center abex-tour-card-header">Authentic experiences</h3>
          <MDBCardText className="text-center sans-serif">
          Our expert guides and brilliant travel concierges are hand-picked to provide a genuine experience, bringing your destination to life with care and passion.
          </MDBCardText>
      </MDBCard>
      <MDBCard  className=" why-abex-card col-md-3">
        <h3 className="text-center abex-tour-card-header">Responsible travel</h3>
          <MDBCardText className="text-center sans-serif">
          Our luxury trips are designed with responsible travel principles that prioritise travel experiences that are both good for you and good for the planet.
          </MDBCardText>
      </MDBCard>
    </MDBRow>
    </MDBContainer>
  )
}

export default CardExample;