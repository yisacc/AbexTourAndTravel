import React from 'react';
import {MDBContainer} from 'mdbreact';

function ScrollNav(){
    return(
        <>
<section class="component-scroll-to-navigation component-index-2 bg-white">
   <div id="scroll-to-nav">
      <div class="navigation-d">
      <MDBContainer className="abex-tour-container" fluid>
            <ul class="tab-bar">
               <li><a href="#intro" class="active">Intro</a></li>
               <li><a href="#example_trips" class="">Example trips</a></li>
               <li><a href="#destinations">Destinations</a></li>
               <li><a href="#inspiration">Inspiration</a></li>
            </ul>
            <div class="number-d"> <span class="ui-font">Call</span> <span class="number"> <a class="rTapNumber420177" href="tel:+251923052359" style={{visibility: "visible"}}>+251-92-305-2359</a> </span> <a class="btn btn-primary hidden-lg-down" href="https://www.jacadatravel.com/contact/"> Get in touch </a></div>
         </MDBContainer>
      </div>
   </div>
   <div class="scroll-to-nav__spacer"></div>
</section>

        </>
    )
}
export default ScrollNav;