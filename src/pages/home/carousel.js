import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from 'mdbreact';
import axsum from '../../images/default-source/carousel/axum.jpg'
import lalibela from '../../images/default-source/carousel/lalibela.jpg'
import sofomer from '../../images/default-source/carousel/1920x550pix-ET-online-passport--web-0920--.jpg'
import semenMountain from '../../images/default-source/carousel/1920x550pix-ET-online-passport--web-0920-.jpg'

const CarouselPage = () => {
  return (
    
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={axsum}
                alt="First slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="passport-CarouselCaption">
              <h3 className="abex-tour-primary-heading">
                Discover East Africa
              </h3>
   
            </MDBCarouselCaption>
          </MDBCarouselItem>
         
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={lalibela}
                alt="First slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="passport-CarouselCaption">
            <h3 className="abex-tour-primary-heading">
            Discover East Africa
              </h3>
       
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={sofomer}
                alt="Second slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="passport-CarouselCaption">
              <h3 className="abex-tour-primary-heading">
              Discover East Africa
              </h3>
          
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={semenMountain}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="passport-CarouselCaption">
              <h3 className="abex-tour-primary-heading">
              Discover East Africa
              </h3>
         
            </MDBCarouselCaption>
          </MDBCarouselItem>
          
         
    
        </MDBCarouselInner>
      </MDBCarousel>
  );
};

export default CarouselPage;
