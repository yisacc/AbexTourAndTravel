import React, { Component, useState } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBContainer,MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function SecondNavbarPage() {
    const [state,setState]=useState(false);
    const toggleCollapse = () => {
  setState(!state);
}
  return (
    <Router>
        
      <MDBNavbar className="abex-tour-navigation" dark expand="md">
      <MDBContainer className="abex-tour-container" fluid>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
          <MDBNavbarNav className="abex-tour-nav" left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Destinations</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Honeymoons</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Family Trips</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Discover</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">About</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBBtn className="abex-tour-primary-btn">Contact Us</MDBBtn>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
     
    </Router>
    );
  }

export default SecondNavbarPage;