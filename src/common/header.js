import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
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
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      
    </Router>
    );
  }

export default NavbarPage;