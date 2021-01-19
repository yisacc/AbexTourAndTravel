import React from 'react';
import {MDBContainer} from 'mdbreact';
import {Link} from 'react-router-dom';

function ScrollNav(){
    return(
        <>
<section class="component-scroll-to-navigation component-index-2 bg-white">
   <div id="scroll-to-nav">
      <div class="navigation-d">
      <MDBContainer className="abex-tour-container" fluid>
            <ul class="tab-bar">
               <li><Link to="#intro" class="active">Intro</Link></li>
               <li><Link to="#example_trips" class="">Example trips</Link></li>
               <li><Link to="#destinations">Destinations</Link></li>
               <li><Link to="#inspiration">Inspiration</Link></li>
            </ul>
            <div class="number-d"> <span class="ui-font">Call</span> <span class="number"> <Link class="rTapNumber420177" to="tel:+251923052359" style={{visibility: "visible"}}>+251-92-305-2359</Link> </span> <Link class="btn btn-primary hidden-lg-down" to="https://www.jacadatravel.com/contact/"> Get in touch </Link></div>
         </MDBContainer>
      </div>
   </div>
   <div class="scroll-to-nav__spacer"></div>
</section>

        </>
    )
}
export default ScrollNav;