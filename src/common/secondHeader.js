import React, { Component, useState } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBContainer,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownItem,MDBDropdownMenu
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from './headerDropDown';

function SecondNavbarPage() {
    const [state,setState]=useState(false);
    
    const toggleCollapse = () => {
  setState(!state);
}
const setHide=(e)=>{
  if(e.currentTarget.className==="nav-item wide menu-item-has-children main-menu-item active"){
    e.currentTarget.classList.remove("active");
  }
    e.target.parentElement.classList.remove("active");
}
const setShow=(e)=>{
  e.target.parentElement.classList.add("active");
}
const removeFocus=(e)=>{
  if(e.currentTarget.className==="menu-item-has-children"){
    e.currentTarget.classList.remove("focus");
  }
    e.target.parentElement.classList.remove("focus");
}
const addFocus=(e)=>{
  e.target.parentElement.classList.add("focus");
}
  return (
    <Router>
        
      <MDBNavbar className="abex-tour-navigation" dark expand="md">
      <MDBContainer className="abex-tour-container" fluid>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
          <MDBNavbarNav className="abex-tour-nav" left>
            
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
              <MDBNavLink to="#!">Destinations</MDBNavLink>
                <ul class="sub-menu dropdown">
   <li class="menu-item-has-children" onMouseOver={(e)=>addFocus(e)}
            onMouseLeave={(e)=>removeFocus(e)}>
      <a href="/destinations/ethiopia">Ethiopia</a>
      <ul class="sub-menu"></ul>
      <ul class="sub-list" style={{left: "calc(100% + 0px)"}}>
   <li><a href="/destinations/lalibela">Lalibela</a></li>
   <li><a href="/#">Danakil Depression</a></li>
   <li><a href="/#">OMO Valley</a></li>
   <li><a href="/#">Simen Mountains</a></li>
   <li><a href="/#">Bale Mountains</a></li>
   <li><a href="/#">Tigray Region</a></li>
   <li><a href="/#">Addis Ababa</a></li>
   <li><a href="/#">Costa Rica</a></li>
   <li><a href="/#">Ecuador</a></li>
   <li><a href="/#">Galapagos</a></li>
   <li><a href="/#">Guatemala</a></li>
</ul>
<ul class="sub-list" style={{left: "calc(100% + 220px)"}}>
   <li><a href="https://www.jacadatravel.com/latin-america/mexico/">Mexico</a></li>
   <li><a href="https://www.jacadatravel.com/latin-america/panama/">Panama</a></li>
   <li><a href="https://www.jacadatravel.com/luxury-patagonia-tours/">Patagonia</a></li>
   <li><a href="https://www.jacadatravel.com/latin-america/peru/">Peru</a></li>
   <li><a href="https://www.jacadatravel.com/latin-america/uruguay/">Uruguay</a></li>
</ul>
      </li>
   <li class="menu-item-has-children">
      <a href="/#">Kenya</a>
       </li>
   <li class="menu-item-has-children">
      <a href="/#">Uganda</a>
     </li>
   <li class="menu-item-has-children">
      <a href="/#">Djibouti</a>
      </li>
   <li class="menu-item-has-children">
      <a href="/#">Eritrea</a>
      </li>
   <li class="menu-item-has-children">
      <a href="/#">Somalia</a>
       </li>
   <li class="menu-item-has-children">
      <a href="/#">South Sudan</a>
      </li>
   <li class="menu-item-has-children"> 
      <a href="/#">Sudan</a>
     </li>
</ul>
            </MDBNavItem>
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
              <MDBNavLink to="#!">Honeymoons</MDBNavLink>
              <ul class="sub-menu dropdown">
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/latin-america/">Latin America</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/africa/">Africa</a>
       </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/europe/">Europe</a>
     </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/asia/">Asia</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/indian-subcontinent/">Indian Subcontinent</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/australasia/">Australasia</a>
       </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/polar/">Polar</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/south-pacific/">South Pacific</a>
     </li>
</ul>
            </MDBNavItem>
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
            <MDBNavLink to="#!">Family Trips</MDBNavLink>
            <ul class="sub-menu dropdown">
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/latin-america/">Latin America</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/africa/">Africa</a>
       </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/europe/">Europe</a>
     </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/asia/">Asia</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/indian-subcontinent/">Indian Subcontinent</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/australasia/">Australasia</a>
       </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/polar/">Polar</a>
      </li>
   <li class="menu-item-has-children">
      <a href="https://www.jacadatravel.com/south-pacific/">South Pacific</a>
     </li>
</ul>
            </MDBNavItem>
            
            <MDBNavItem onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
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