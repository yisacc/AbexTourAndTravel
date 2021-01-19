import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBNavLink,MDBContainer,MDBIcon
} from "mdbreact";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function NavbarPage(){
    const [state,setState]=useState(false);
    const toggleCollapse=()=>{
  setState(!state);
 }

  return (
    <Router>
        
      <MDBNavbar className="abex-tour-primary-color abex-tour-header" dark expand="md">
      <MDBContainer className="abex-tour-container" fluid>
        <MDBNavbarBrand>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
          <MDBNavbarNav left>
             </MDBNavbarNav>
             
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="tripadvisor" />
            </MDBNavLink>
            </MDBNavItem>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>

            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="telegram" />
              </MDBNavLink>
            </MDBNavItem>
           
          <MDBNavItem className="contact-menu"><span>Call Us On</span>
          <span class="number"> <Link class="rTapNumber420174" to="tel:+251923052359" style={{visibility: "visible"}}>+251-92-305-2359</Link> </span></MDBNavItem>
          
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      
    </Router>
    );
  }

export default NavbarPage;