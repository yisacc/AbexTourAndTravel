import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import addisAbaba from "../../images/destinationsHome/Addis-Ababa.-678x9999.jpg";
import lalibela from "../../images/destinationsHome/St.-George-Church-in-Lalibela-678x9999.jpg";
import danakilDepression from "../../images/destinationsHome/danakil-depression-sulphur-pools-4-678x9999.jpg";
import omoValley from "../../images/destinationsHome/LETTERBOX-ethiopia-children-from-kara-tribe-362x210-cc.jpg";
import simenMountains from "../../images/destinationsHome/gelada-baboon-2-1-678x9999.jpg";
import baleMountains from "../../images/destinationsHome/Luxury-ethiopia-tour-1-3-678x9999.jpg";
import tigrayRegion from "../../images/destinationsHome/tigray-church-678x9999.jpg";

const MultiCarouselPage = () => {
  return (
    <MDBContainer className="bg-grey travel-around-container" fluid>
        <MDBContainer className="abex-tour-container padded-section" fluid>
        <h1 className="underlined text-center">Watch our Destinations to find out more</h1>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
            <MDBRow className='info equalcard'>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={addisAbaba} />
                  <MDBCardBody>
                    <MDBCardTitle>
Addis Ababa </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={lalibela} />
                  <MDBCardBody>
                    <MDBCardTitle>
Lalibela 
 </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={danakilDepression} />
                  <MDBCardBody>
                    <MDBCardTitle>Danakil Depression</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBRow className='info equalcard'>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={omoValley} />
                  <MDBCardBody>
                    <MDBCardTitle>
Omo Valley </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={simenMountains} />
                  <MDBCardBody>
                    <MDBCardTitle>
Simien Mountains </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={baleMountains} />
                  <MDBCardBody>
                    <MDBCardTitle>
Bale Mountains </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBRow className='info equalcard'>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={tigrayRegion} />
                  <MDBCardBody>
                    <MDBCardTitle>
Tigray Region </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className='equalcard'>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn className="abex-tour-primary-btn d-none">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
    </MDBContainer>
  );
}

export default MultiCarouselPage;