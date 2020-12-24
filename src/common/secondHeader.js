import React, { Component, useState } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBContainer,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownItem,MDBDropdownMenu
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from './headerDropDown';

function SecondNavbarPage() {
    const [state,setState]=useState(false);
    const [showAndHide,setShowAndHide]=useState({

      destinations:'',
      honeyMoons:'',
      familyTrips:'',
      about:'',

    })
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
            
            <MDBNavItem onMouseOver={()=>setShowAndHide((prevState) => ({
                ...prevState,
                destinations: 'show',
            }))}
            onMouseLeave={()=>setShowAndHide((prevState) => ({
              ...prevState,
              destinations: '',
          }))}>
              <MDBDropdown>
                <MDBDropdownToggle nav caret 
            >
                  <div className="abex-tour-drop-down-item d-md-inline">Destinations</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default abex-tour-dropdown ${showAndHide.destinations}`}>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem onMouseOver={()=>setShowAndHide((prevState) => ({
                ...prevState,
                honeyMoons: 'show',
            }))}
            onMouseLeave={()=>setShowAndHide((prevState) => ({
              ...prevState,
              honeyMoons: '',
          }))}>
              <MDBDropdown >
              <MDBDropdownToggle nav caret >
                  <div className="abex-tour-drop-down-item d-md-inline">Honeymoons</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default abex-tour-dropdown ${showAndHide.honeyMoons}`}>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem onMouseOver={()=>setShowAndHide((prevState) => ({
                ...prevState,
                familyTrips: 'show',
            }))}
            onMouseLeave={()=>setShowAndHide((prevState) => ({
              ...prevState,
              familyTrips: '',
          }))}>
              <MDBDropdown>
              <MDBDropdownToggle nav caret 
            >
                  <div className="abex-tour-drop-down-item d-md-inline">Family Trips</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default abex-tour-dropdown ${showAndHide.familyTrips}`}>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            
            <MDBNavItem onMouseOver={()=>setShowAndHide((prevState) => ({
                ...prevState,
                about: 'show',
            }))}
            onMouseLeave={()=>setShowAndHide((prevState) => ({
              ...prevState,
              about: '',
          }))}>
              <MDBDropdown>
              <MDBDropdownToggle nav caret>
                  <div className="abex-tour-drop-down-item d-md-inline">About</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default abex-tour-dropdown ${showAndHide.about}`}>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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