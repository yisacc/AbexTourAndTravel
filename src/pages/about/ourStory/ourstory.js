import { MDBContainer } from 'mdbreact';
import react from 'react';
import { Link } from 'react-router-dom';

function OurStory(){
return(
    <>
    <section class="component-header-section component-index-1 has-bg-img bg-white">
   <section class="hero-cover hero-cover--mid hero-cover--has-image hero-cover--w-dark-overlay hero-cover--has-badge hero-cover--has-peace-badge">
      <picture class="hero-cover__bg-image behave-like-bg">
         <img data-src="https://www.jacadatravel.com/wp-content/uploads/fly-images/155044/111-2480x1085-cc.jpg" src="https://www.jacadatravel.com/wp-content/uploads/fly-images/155044/111-2480x1085-cc.jpg" data-srcset="https://www.jacadatravel.com/wp-content/uploads/fly-images/155044/111-2480x1085-cc.jpg 1.550x" alt="Jacada Travel Our Story" class=" lazyloaded" srcset="https://www.jacadatravel.com/wp-content/uploads/fly-images/155044/111-2480x1085-cc.jpg 1.550x"></img>
      </picture>
      <div class="hero-cover__breadcrumb-container">
         <div class="container breadcrumb"> <Link to="https://www.jacadatravel.com">Home</Link> &gt; <span>Our Story</span></div>
      </div>
      <div class="hero-cover__content-container container">
         <h1 class="hero-cover__primary-heading serif"> Our&nbsp;Story</h1>
         <div class="hero-cover__subtitle h3"></div>
        
      </div>
   </section>
</section>
<section class="component-two-column-section component-index-2 bg-grey">
   <div class="content-section ">
      <div class="container-wrap single">
      <MDBContainer className="abex-tour-container" fluid>
            <div class="row">
               <div class="content col-xs-12 col-lg-8 col-lg-offset-2">
                  <p><span style={{"font-weight": "400"}}>East Africa Tour And Travel is a tour operator officially emerged Ethiopian Toursim Buisness in early December, 2018. We have efficient, unflagging, trusted and Multilingual Young Guides that can make the tour catchy form the start to end.  </span></p>
                  <p><span style={{"font-weight": "400"}}>We invite you to browse from the exiting tours and get inspired the incridlbe nature of Ethiopia. We have arranged different itineraries in different route pick what you are interested and enjoy the reasonable offers. </span></p>
                  <p><span style={{"font-weight": "400"}}>Ultimately, our optimistic and knowledgeable Guides are awaits you to assist with an honour of you and our Historic Nation. </span></p>
               </div>
            </div>
         </MDBContainer>
      </div>
   </div>
</section>
<section class="component-two-column-section component-index-3 has-bg-img bg-grey">
   <div class="content-section has-bg-img">
      <picture class="content-section-bg-img">
         <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/101624/CityAndSeaPamorama-1-1400x205-cc.jpg"  alt="Dubrovnik City and Sea Panorama" class=" lazyloaded" ></img>
      </picture>
      <div class="container-wrap single">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-lg-8 col-lg-offset-2">
                  <h2 class="text-center no-margin"> Our ethos</h2>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
   <section class="component-two-column-section component-index-4 bg-grey">
<div class="content-section ">
<div class="container-wrap double">
<MDBContainer className="abex-tour-container" fluid>
      <div class="row row-flex v-align-flex">
         <div class="col-xs-12 col-md-5 col-md-push-7">
            <div class="wrapper double">
               <h3> Responsible Travel &amp; Giving Back</h3>
               <p><span style={{"font-weight": "400"}}>Central to everything we do is the desire to effect positive change and enrich the lives of those we encounter along the way. We do this because we feel it’s the right thing to do and because we believe travel is a far more enjoyable and rewarding experience when you know your trip is directly benefiting others.&nbsp;</span><span style={{"font-weight": "400"}}>We do what we can to make it easier for you to travel in a way that you know positively contributes to the people and place you visit.</span></p>
            </div>
         </div>
         <div class="col-xs-12 col-md-6 col-md-pull-5">
            <div class="image">
               <picture>
                  <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/139454/event__Highlands-Ngorongoro-guests-view-maasai-guide-Eliza-Deacon-2-HRWF-525x295-cc.jpg"  class=" lazyloaded" ></img>
               </picture>
            </div>
         </div>
      </div>
   </MDBContainer>
</div>
<div class="container-wrap double">
   <div class="container">
      <div class="row row-flex v-align-flex">
         <div class="col-xs-12 col-md-5">
            <div class="wrapper double">
               <h3></h3>
               <p>These are just a couple of the ways that we are committed to making the world a better place through travel as well as upholding our commitment to follow a low-impact tourism model. There are other ways we work to make travel uplifting, and you can find out more&nbsp;</p>

            </div>
         </div>
         <div class="col-xs-12 col-md-6 col-md-offset-1">
            <div class="image">
               <picture>
                  <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/198333/fiji_seaplane_flight-525x295-cc.jpg"  alt="Seaplane in flight on Fiji" class=" lazyloaded" ></img>
               </picture>
            </div>
         </div>
      </div>
   </div>
</div>

</div>
   </section>
    </>
)
}
export default OurStory;