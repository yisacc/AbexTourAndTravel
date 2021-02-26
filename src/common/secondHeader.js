import React, { Component, useState } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBContainer,MDBBtn
} from "mdbreact";
import { BrowserRouter as Router,Link } from 'react-router-dom';

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
// const removeFocus=(e)=>{
//   if(e.currentTarget.className==="menu-item-has-children"){
//     e.currentTarget.classList.remove("focus");
//   }
//     e.target.parentElement.classList.remove("focus");
// }
// const addFocus=(e)=>{
//   e.target.parentElement.classList.add("focus");
// }
  return (
    <>
        
      <MDBNavbar className="abex-tour-navigation" dark expand="md">
      <MDBContainer className="abex-tour-container" fluid>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
          <MDBNavbarNav className="abex-tour-nav" left>
            
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
              <MDBNavLink to="#!">Destinations</MDBNavLink>
                <ul class="sub-menu dropdown">
   <li class="menu-item-has-children" >
      <Link to="/destinations/ethiopia">Ethiopia</Link>

      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Kenya</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">Uganda</Link>
     </li>
   <li class="menu-item-has-children">
      <Link to="/#">Djibouti</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Eritrea</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Somalia</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">South Sudan</Link>
      </li>
   <li class="menu-item-has-children"> 
      <Link to="/#">Sudan</Link>
     </li>
</ul>
            </MDBNavItem>
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
              <MDBNavLink to="#!">Honeymoons</MDBNavLink>
              <ul class="sub-menu dropdown">
              <li class="menu-item-has-children">
      <Link to="/#">Kenya</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">Uganda</Link>
     </li>
   <li class="menu-item-has-children">
      <Link to="/#">Djibouti</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Eritrea</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Somalia</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">South Sudan</Link>
      </li>
   <li class="menu-item-has-children"> 
      <Link to="/#">Sudan</Link>
     </li>
</ul>
            </MDBNavItem>
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
            <MDBNavLink to="#!">Family Trips</MDBNavLink>
            <ul class="sub-menu dropdown">
              <li class="menu-item-has-children">
      <Link to="/#">Kenya</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">Uganda</Link>
     </li>
   <li class="menu-item-has-children">
      <Link to="/#">Djibouti</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Eritrea</Link>
      </li>
   <li class="menu-item-has-children">
      <Link to="/#">Somalia</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">South Sudan</Link>
      </li>
   <li class="menu-item-has-children"> 
      <Link to="/#">Sudan</Link>
     </li>
</ul>  </MDBNavItem>
            
            <MDBNavItem className="wide menu-item-has-children main-menu-item" onMouseOver={(e)=>setShow(e)}
            onMouseLeave={(e)=>setHide(e)}>
            <MDBNavLink to="#!">About</MDBNavLink>
            <ul class="sub-menu dropdown">
              <li class="menu-item-has-children">
      <Link to="/our-story">Our Story</Link>
       </li>
   <li class="menu-item-has-children">
      <Link to="/#">What We Do</Link>
     </li>
   </ul>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <Link to="/contact">
            <MDBBtn className="abex-tour-primary-btn"> Contact Us</MDBBtn></Link>
            
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
     
    </>
    );
  }

export default SecondNavbarPage;