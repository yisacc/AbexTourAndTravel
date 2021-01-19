import { MDBContainer } from 'mdbreact';
import react, { useEffect,useRef } from 'react';
import {Link} from 'react-router-dom';


const TripItinerary=()=>{
   const myRefFirst = useRef(null);
   const myRefSecond = useRef(null);
   const myRefThird = useRef(null);
   const myRefFourth = useRef(null);
   const myRefFifth = useRef(null);
   const myRefSix = useRef(null);
   const myRefSeventh = useRef(null);
const handleMouseEnter=(e)=>{
   var id = e.currentTarget.id;
   var element= document.getElementsByClassName(id);
element[0].classList.add('active');

}
const handleMouseLeave=(e)=>{
   var id = e.currentTarget.id;
   var element= document.getElementsByClassName(id);
element[0].classList.remove('active');
}
const executeScrollFirst = () => myRefFirst.current.scrollIntoView();
const executeScrollSecond = () => myRefSecond.current.scrollIntoView();
const executeScrollThird = () => myRefThird.current.scrollIntoView();
const executeScrollFourth = () => myRefFourth.current.scrollIntoView();
const executeScrollFifth = () => myRefFifth.current.scrollIntoView();
const executeScrollSixth = () => myRefSix.current.scrollIntoView();
    return(
        <>
<MDBContainer className="abex-tour-container mt-5 example-trip-itinerary padded-section" fluid>
<div class="row row-flex-md">
<div class="col-md-7">
<h2 class="underlined"> Example trip itinerary</h2>
<section ref={myRefFirst} data-scroll-section="Days 1-2" class="example-trip-section" id="addis-ababa-0" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="8.980603" data-lng="38.757761"> <strong>Days 1-2</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Addis Ababa</h3>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Meet and greet at Addis Ababa airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to your hotel in Addis Ababa</p>
      </div>
   </div>
    <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/304819/Addis-Ababa.-678x9999.jpg"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Addis Ababa city tour" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Addis Ababa city tour</span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>This interesting tour includes a visit to the National Museum, which houses several hundred pieces of bone fossils representing 40% of the skeleton of a female of the hominin species, known as Lucy. You'll also see the Ethnological Museum and get the chance to witness a traditional coffee ceremony, as well as discover the city's churches, Unity Park and Merkato.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to Addis Ababa airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Addis Ababa to Gondar airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Meet and greet at Gondar airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to your lodge in Simien Mountains</p>
      </div>
   </div>
</section>
<section ref={myRefSecond} data-scroll-section="Days 2-4" class="example-trip-section" id="simien-mountains-1" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="13.306449" data-lng="38.264140"> <strong>Days 2-4</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Simien Mountains</h3>
   </div>
   <div class="hotel-grid__title">
      <h3>Accommodation in Simien Mountains</h3>
   </div>
   
      <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/337406/Luxury-ethiopia-tour-3-678x9999.jpg" ></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Sightseeing at Fasiledes Castle and Fasil Bath " width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Sightseeing at Fasiledes Castle and Fasil Bath </span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>Built for Emperor Fasilides, this grand castle helped to establish Gondar as the capital of the Ethiopian empire during this period. Also known as the Royal Enclosure, Fasil Ghebbi, the egg-shaped domed roofs of this castle and huge towers have a more mediaeval European style than African. The view from to top of the castle also offers incredible views over the city.</p>
               <p>During your visit, you’ll also see the 300-year-old Fasil Bath that was once used by Ethiopian royalty. The pool is ceremoniously filled every year for the Timkat celebration that plays an important role in the spiritual lives of<span class="readmore__nth-word"> Ethiopian </span><span class="readmore__hidden">Orthodox Christians.</span></p>
            </div>
         </div>
      </div>
   </div>
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img  src="https://www.jacadatravel.com/wp-content/uploads/fly-images/337319/simien-mountains-simien-national-park-678x9999.jpg"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Exploring Simien National Park" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Exploring Simien National Park</span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>Today, you'll drive into the Simien National Park for a day of exploring while keeping an eye out for geladas (early morning is the best as they warm up on the cliff edges) and ibex. In the afternoon, you'll stop and tuck into a packed lunch.</p>
               <p>You'll then return to Limalimo and have evening drinks paired with amazing views. As the temperature in the park and at the lodge in the evenings can be cool, a warm fleece is recommended</p>
            </div>
         </div>
      </div>
   </div>
   
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer from Simien Mountains to Gondar airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Gondar to Lalibela airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Meet and greet at Lalibela airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to your lodge in Lalibela</p>
      </div>
   </div>
</section>
<section ref={myRefThird} data-scroll-section="Days 4-6" class="example-trip-section" id="lalibela-2" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="12.030899" data-lng="39.04763"> <strong>Days 4-6</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Lalibela</h3>
   </div>
   <div class="hotel-grid__title">
      <h3>Accommodation in Lalibela</h3>
   </div>

   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/189971/St.-George-Church-in-Lalibela-678x9999.jpg"  alt="St. George Church in Lalibela Ethiopia" class="lazyload"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Discovering Lalibela's rock churches" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Discovering Lalibela's rock churches</span></div>
         <div class="activities__description">
            <div class="readmore readmore--active" style={{"max-height": "227px"}}>
               <p>Lalibela is Ethiopia's holiest city and a site of pilgrimage for many Orthodox Christians. The 900-year-old church of Bet Giyorgis - church of St. George - is located on the western side of the cluster of 11 churches. It was carved from a single piece of rock 40 feet into the ground in the shape of a Greek cross. There is a curtain that shields the Holy of Holies, in front of which usually stands a priest displaying scripture and paintings.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img  src="https://www.jacadatravel.com/wp-content/uploads/fly-images/337414/Luxury-ethiopia-tour-1-2-678x9999.jpg" alt="Ethiopia tej wine" class="lazyload"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="An evening at Torpido Tej House wine bar" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>An evening at Torpido Tej House wine bar</span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>Mingle with the locals in this popular bar where you can taste the local delicacy, Tej. This libation is a kind of Ethiopian mead, a delicious honey wine with a herby flavour. Patrons can also enjoy a traditional azmari song and dance until the early hours.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to Lalibela airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Lalibela to Axum airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Meet and greet at Axum airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to your lodge in Tigray Region</p>
      </div>
   </div>
</section>
<section ref={myRefFourth} data-scroll-section="Days 6-8" class="example-trip-section" id="tigray-region-3" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="14.032334" data-lng="38.316573"> <strong>Days 6-8</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Tigray Region</h3>
   </div>
   <div class="hotel-grid__title">
      <h3>Accommodation in Tigray Region</h3>
   </div>
 
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/191629/axum-tigray-ethiopia-678x9999.jpg" class=" lazyloaded"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Sightseeing in Axum" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Sightseeing in Axum</span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>This city in northern Ethiopia is known for its tall, carved obelisks which date back to the ancient Kingdom of Aksum. Spend some time sightseeing in the city and you'll discover many of them in the Northern Stelae Park. Other highlights include the ancient St. Mary of Zion church which is a pilgrimage site and is believed to have housed the Ark of the Covenant. Many believe the neighboring Chapel of the Tablet contains the Ark today.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/191659/tigray-church-678x9999.jpg"></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="The rock-hewn churches of Gheralta" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>The rock-hewn churches of Gheralta</span></div>
         <div class="activities__description">
            <div class="readmore readmore--active" style={{"max-height": "227px"}}>
               <p>Very little is known about the origin of the 120 churches carved into the rock and cliffs, or their architectural history. Local tradition attributes most of the churches to the 4th century Aksumite Kings, Abreha and Atsbeha. Access to the churches involves some interesting hikes up the steep, and sometimes sheer, cliff faces. Inside many of the churches are colourful frescoes, hundreds of years old. The priests who live on these mountains follow a simple life that revolves around the Orthodox Christian calendar.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to Mekele airpot</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Mekele to Addis Ababa airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Addis Ababa to Murulle airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p> Meet and greet at Murulle airport</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Boat transfer to your camp in Omo Valley</p>
      </div>
   </div>
</section>
<section ref={myRefFifth} data-scroll-section="Days 8-11" class="example-trip-section" id="omo-valley-4" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="6.385088" data-lng="37.007425"> <strong>Days 8-11</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Omo Valley</h3>
   </div>
   <div class="hotel-grid__title">
      <h3>Accommodation in Omo Valley</h3>
   </div>
   
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/337418/Luxury-ethiopia-tour-1-3-678x9999.jpg"  class=" lazyloaded" ></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Mago National Park and Kara dance" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Mago National Park and Kara dance</span></div>
         <div class="activities__description">
            <div class="readmore readmore--active" style={{"max-height": "185px"}}>
               <p>The Mago National Park is a vast national park in the south of Ethiopia and on your morning walk you may spot dik-diks, baboons, waterbucks and many other mammals. You'll head back to camp for lunch and then you'll also have a chance to visit the Mursi villages and expereince an evening dance from the Kara people. The Kara tribe occupy the left bank of the Omo River and are known for their intricate body art and face painting. The vibrant white chalk, red ochre and yellow mineral rock colours used are spectacular to behold and can be designed in<span class="readmore__nth-word"> dots, </span><span class="readmore__hidden">spirals and patterns that change every day. The Kara are incredibly social and it’s always great fun when they throw an evening dance in the village.</span></p>
            </div>
         </div>
      </div>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to Jinka</p>
      </div>
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Flight from Jinka to Addis Ababa airport</p>
      </div>
   </div>
</section>
<section ref={myRefSix} data-scroll-section="Day 11" class="example-trip-section" id="addis-ababa-5" onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>{handleMouseLeave(e)}}>
   <div class="information-break" data-lat="8.980603" data-lng="38.757761"> <strong>Day 11</strong></div>
   <div class="information-break__content">
      <h3 class="information-break__title"> Addis Ababa</h3>
   </div>
   <div class="activity_wrap">
      <div class="activity-image">
         <picture>
            <img src="https://www.jacadatravel.com/wp-content/uploads/fly-images/189735/addis-sheraton-exterior-678x9999.jpg" ></img>
         </picture>
      </div>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="Day room at the Sheraton Addis" width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>Day room at the Sheraton Addis</span></div>
         <div class="activities__description">
            <div class="readmore"></div>
         </div>
      </div>
   </div>
   <div class="activity_wrap">
      <img src="https://www.jacadatravel.com/wp-content/uploads/2017/06/addis-ababa-aerial-1-1024x576.jpg" class="img-responsive" alt="addis-ababa-aerial" loading="lazy"  sizes="(max-width: 900px) 100vw, 900px"></img>
      <div class="activities">
         <div class="h3 bold activities__title"> <img class="activities__title-icon" alt="One final day in Addis Ababa " width="20" src="https://www.jacadatravel.com/wp-content/themes/jacada/assets/images/icon-star-gold.png"></img> <span>One final day in Addis Ababa </span></div>
         <div class="activities__description">
            <div class="readmore">
               <p>Enjoy your last day wandering around this city, picking up some trinkets to take home and feasting on delicious local delicacies.</p>
            </div>
         </div>
      </div>
   </div>
   <div class="flights-transfers__title">
      <div class="h3 bold no-margin"> Flights &amp; transfers</div>
   </div>
   <div class="flights-transfers__container">
      <div class="flights-transfers__pod">
         <h4 class="flights-transfers__sub-title flights-transfers__sub-title--transfer">Transfer</h4>
         <p>Private transfer to Addis Ababa airport</p>
      </div>
   </div>
</section>
</div>
<div class="col-md-4 col-md-offset-1">
<div class="tip-box">
   <div class="tip-box__cross"></div>
   <div class="tip-box__lightbulb"></div>
   <div class="tip-box__instruction"> Use the navigation to jump down to a particular part of this example trip</div>
   <div class="tip-box__arrow">
      <div class="arrows"></div>
   </div>
</div>
<div class="floating-navigation">
   <div class="location addis-ababa-0">
   <Link onClick={executeScrollFirst}> <strong>Days 1-2:</strong> Addis Ababa </Link>
   </div>
   <div class="location simien-mountains-1"> <Link onClick={executeScrollSecond}> <strong>Days 2-4:</strong> Simien Mountains </Link></div>
   <div class="location lalibela-2"> <Link onClick={executeScrollThird}> <strong>Days 4-6:</strong> Lalibela </Link></div>
   <div class="location tigray-region-3"> <Link onClick={executeScrollFourth} > <strong>Days 6-8:</strong> Tigray Region </Link></div>
   <div class="location omo-valley-4"> <Link onClick={executeScrollFifth}> <strong>Days 8-11:</strong> Omo Valley </Link></div>
   <div class="location addis-ababa-5"> <Link onClick={executeScrollSixth}> <strong>Day 11:</strong> Addis Ababa </Link></div>
   <div class="call">
   <div class="floating_navigation__price">
      <div class="price-from floating-nav__price-from"> Prices start from</div>
      <span class="price floating-nav__price" data-price="11924">$11,924</span> <span class="price-pp floating-nav__price-pp"> PP </span>
   </div>
   <div>
      <span class="ui-font v-align">Call us</span>
      <div class="number v-align"> <Link class="tel rTapNumber420176" to="tel:+251923052359" style={{visibility: "visible"}}>+251-92-305-2359</Link></div>
      <span class="ui-font v-align">or</span>
   </div>
   <div class="shift"> <Link class="btn btn-black" to="#cta-container"> Plan your adventure </Link></div>
</div>
</div>
</div>
</div>
</MDBContainer>
</>
    )
}

export default TripItinerary;