import react from 'react';
import {MDBContainer} from 'mdbreact';
import {Link} from 'react-router-dom';

function IntroSection(){
return(
    <>
    <section class="component-content component-index-3 bg-white padded-section active" id="intro" data-label="Intro">
    <MDBContainer className="abex-tour-container" fluid>
      <h2 class="text-center"> Abex Travel for your luxury trip to Ethiopia</h2>
      <div class="row">
         <div class="content-col-1 col-xs-12 col-lg-7">
            <div class="component-content-text">
               <p>Abex Travel creates bespoke luxury trips to Ethiopia. Our travel experts design your perfect itinerary, with the best accommodation, exclusive tours and a local guide who shares your interests, and we sort out all the detail.</p>
               <p>Enjoy a warm welcome, relax and experience the true adventure of Latin America. Whatever you want your trip to include, at Abex Travel we’ll create a bespoke trip just for you. Choose experiences and activities in <Link to="/latin-america/peru/">Peru</Link>, <Link to="/latin-america/galapagos/">The Galapagos</Link>,&nbsp;<Link to="/latin-america/argentina/">Argentina</Link>, <Link to="/latin-america/chile/">Chile</Link>, <Link to="/latin-america/costa-rica/">Costa Rica</Link>, <Link to="/latin-america/belize/">Belize</Link>, <Link to="/latin-america/bolivia/">Bolivia</Link>, <Link to="/latin-america/brazil/">Brazil</Link>, <Link to="/latin-america/ecuador/">Ecuador</Link>, &nbsp;<Link to="/latin-america/mexico/">Mexico</Link>&nbsp;and <Link to="/latin-america/uruguay/">Uruguay</Link>.</p>
               <p>If you have more time, why not try our <Link to="https://staging.jacadatravel.com/latin-america/grand-tours/">Grand Tours of Latin America</Link>, taking in more of the region in one incredible trip.</p>
            </div>
         </div>
         <div class="content-col-2 col-lg-offset-1 col-xs-12 col-md-12 col-lg-4">
            <div class="component-content-quote">
               <div class="team-quote">
                  <div class="row">
                     <div class="col-md-2">
                        <div class="quote-mark">
                           <svg width="73" height="60" viewBox="0 0 73 60" preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg">
                              <path d="M41.296 38.138C41.296 51.741 45.426 60 58.543 60c5.83 0 11.66-6.072 11.66-12.389 0-6.558-4.13-12.874-14.09-12.874h-7.286c.972-13.846 11.902-24.048 23.805-31.094L70.446 0C51.5 9.474 41.296 25.75 41.296 38.138M0 38.138C0 51.741 4.13 60 17.248 60c5.83 0 11.66-6.072 11.66-12.389 0-6.558-4.13-12.874-14.09-12.874H7.532C8.503 20.891 19.434 10.69 31.336 3.643L29.15 0C10.202 9.474 0 25.75 0 38.138" fill="#C1AA7F" fill-rule="evenodd"></path>
                           </svg>
                           <svg class="quote-alt" width="73px" height="60px" viewBox="0 0 73 60" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                 <g id="quote-alt" transform="translate(36.500000, 30.000000) scale(-1, 1) translate(-36.500000, -30.000000) " fill="#C1AA7F">
                                    <path d="M41.296,38.138 C41.296,51.741 45.426,60 58.543,60 C64.373,60 70.203,53.928 70.203,47.611 C70.203,41.053 66.073,34.737 56.113,34.737 L48.827,34.737 C49.799,20.891 60.729,10.689 72.632,3.643 L70.446,0 C51.5,9.474 41.296,25.75 41.296,38.138 M0,38.138 C0,51.741 4.13,60 17.248,60 C23.078,60 28.908,53.928 28.908,47.611 C28.908,41.053 24.778,34.737 14.818,34.737 L7.532,34.737 C8.503,20.891 19.434,10.69 31.336,3.643 L29.15,0 C10.202,9.474 0,25.75 0,38.138" id="Shape" transform="translate(36.316000, 30.000000) scale(1, -1) translate(-36.316000, -30.000000) "></path>
                                 </g>
                              </g>
                              
                           </svg>
                        </div>
                     </div>
                     <div class="col-md-10">
                        <p> Latin America is rich in diversity and contrast and possesses a special geography that sets it apart from other destinations on the planet. Itll charm you with an array of natural and cultural wonders - from snow-capped mountains, picture-perfect beaches and tropical rainforests to ancient civilisations. Once you visit you will want to explore this continent over and&nbsp;over.</p>
                     </div>
                  </div>
                  <div class="team-quote-author team-quote-author--indent">
                     <div class="team-quote-author__details">
                        <div class="team-name"></div>
                        <div class="t-tag"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </MDBContainer>
</section>
    </>
    // xmlns:xlink="http://www.w3.org/1999/xlink"
)
}

export default IntroSection;