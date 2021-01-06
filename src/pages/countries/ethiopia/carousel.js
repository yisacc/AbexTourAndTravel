import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Lalibela1 from "../../../images/default-source/lalibela/Lalibela_church_exterior-1600x500-cc.jpg";
import Lalibela2 from "../../../images/default-source/lalibela/Lalibela_churchgoers-1600x500-cc.jpg";
import Lalibela3 from "../../../images/default-source/lalibela/Lalibela_Tess1-1600x500-cc.jpg";
const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={1}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Lalibela1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
         </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;