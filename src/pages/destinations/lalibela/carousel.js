import React, { useState } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Lalibela1 from "../../../images/default-source/lalibela/Lalibela_church_exterior-1600x500-cc.jpg";
import Lalibela2 from "../../../images/default-source/lalibela/Lalibela_churchgoers-1600x500-cc.jpg";
import Lalibela3 from "../../../images/default-source/lalibela/Lalibela_Tess1-1600x500-cc.jpg";
const CarouselPage = () => {
  const [show,setShow]=useState(true);
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
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Lalibela1}
              alt="First slide"
            />
            {show?<MDBMask overlay="black-light" />:null}
          
          </MDBView>
          {show?<MDBCarouselCaption>
            <h3 className="h3-responsive">A Historical and Cultural Exploration of Ethiopia</h3>
            <p>First text</p>
          </MDBCarouselCaption>:null}
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Lalibela2}
              alt="Second slide"
            />
          {show?<MDBMask overlay="black-light" />:null}
          </MDBView>
          {show?<MDBCarouselCaption>
            <h3 className="h3-responsive">A Historical and Cultural Exploration of Ethiopia</h3>
            <p>First text</p>
          </MDBCarouselCaption>:null}
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={Lalibela3}
              alt="Third slide"
            />
          {show?<MDBMask overlay="black-light" />:null}
          </MDBView>
          {show?<MDBCarouselCaption>
            <h3 className="h3-responsive">A Historical and Cultural Exploration of Ethiopia</h3>
            <p>First text</p>
          </MDBCarouselCaption>:null}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;