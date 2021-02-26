import React, { useState } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Lalibela1 from "../../../images/default-source/lalibela/Lalibela_church_exterior-1600x500-cc.jpg";
import Lalibela2 from "../../../images/default-source/lalibela/Lalibela_churchgoers-1600x500-cc.jpg";
import Lalibela3 from "../../../images/default-source/lalibela/Lalibela_Tess1-1600x500-cc.jpg";
const CarouselPage = (props) => {
  const [show,setShow]=useState(true);
  const {carouselData}=props
  let count =1;
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
      onMouseOver={()=>setShow(false)} onMouseOut={()=>setShow(true)}
    >
      <MDBCarouselInner onMouseOut={()=>setShow(true)} >
        {carouselData.image.map((element)=>(
          <>
          <MDBCarouselItem itemId={count}>
          <MDBView>
            <img
              className="d-block w-100"
              src={element.url}
              alt={element.alternativeText}
            />
            {show?<MDBMask overlay="black-light" />:null}
          
          </MDBView>
          {show?<MDBCarouselCaption>
            <h3 className="h3-responsive">{carouselData.bannerText}</h3>
          </MDBCarouselCaption>:null}
        
        </MDBCarouselItem>
         {
          count++}
          </>
        ))}
         </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;