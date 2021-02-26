import react from 'react';
import {MDBContainer} from 'mdbreact';
import {Link} from 'react-router-dom';
import addisAbaba from "../../../images/destinations270X180/addis-ababa-aerial-2-e1497283439144-270x180-c.jpg";
import lalibela from "../../../images/destinations270X180/St.-George-Church-in-Lalibela-270x180-c.jpg";
import danakilDepression from "../../../images/destinations270X180/Erta-Ale-volcano-Danakil-Depression1-270x180-c.jpg";
import omoValley from "../../../images/destinations270X180/omo-valley-tribe-e1497614958368-270x180-c.jpg";
import simenMountains from "../../../images/destinations270X180/gelada-baboon-2-e1497369679978-270x180-c.jpg";
import tigrayRegion from "../../../images/destinations270X180/tigray-church-270x180-c.jpg";
import baleMountains from "../../../images/destinations270X180/ethiopian-fox-270x180-c.jpg";
function Destinations(){
    return(
        <>
        <section class="component-tile-section component-index-6 bg-white padded-section active" id="destinations" data-label="Destinations">
   <h2 class="underlined"> Inspiring destinations in Ethiopia</h2>
   <MDBContainer className="abex-tour-container padded-section" fluid>
      <div class="locations-grid">
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={lalibela}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> Lalibela</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={danakilDepression}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> Danakil Depression</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={omoValley}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> OMO Valley</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={simenMountains}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> Simen Mountains</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={baleMountains}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> Bale Mountains</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
               <img src={tigrayRegion}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>

               </picture>
               <div class="locations-grid__title"> Tigray Region</div>
            </Link>
         </div>
         <div class="locations-grid__item col-lg-3">
            <Link to="#!" class="locations-grid__item-inner">
               <picture class="locations-grid__image behave-like-bg">
                  <img src={addisAbaba}  alt="manuel-antonio-costa-rica" class=" lazyloaded" ></img>
               </picture>
               <div class="locations-grid__title"> Addis Ababa</div>
            </Link>
         </div>
         
      
      </div>
   </MDBContainer>
</section>
        </>
    )
}

export default Destinations;