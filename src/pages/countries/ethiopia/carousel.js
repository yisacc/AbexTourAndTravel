import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
const CarouselPage = (props) => {
  const {carouselData}=props;
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
              src={'http://localhost:1337'+carouselData.url}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{carouselData.bannerText}</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
         </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;