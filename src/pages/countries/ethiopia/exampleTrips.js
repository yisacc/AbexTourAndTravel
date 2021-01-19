import react from 'react';
import {MDBContainer,MDBCardGroup,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';
import { Link } from 'react-router-dom';

function ExampleTrips(){
return(
    <>
     <MDBContainer className="abex-tour-container padded-section" fluid>
        <h1 className="underlined text-center">Our top Ethiopia example trips</h1>
    <MDBCardGroup className="mb-5">
      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/175928/madikwe-hills-safari-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5"> A Historical and Cultural Exploration of Ethiopia</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Ethiopia in this luxurious 11-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/168446/castle-coombe-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Peru and the Galapagos Luxury Tour</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>

      <MDBCard className="">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/153741/example_trip__iStock_000030333700_Large_0-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Classic Italy</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>
    
    </MDBCardGroup>
    <MDBCardGroup className="mb-5">
      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/172832/machu-picchu-ruins-with-laama-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5"> Safari, Wine and Waterfalls</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/338213/Upsala-glacier-LETTERBOX-1124864844-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Peru and the Galapagos Luxury Tour</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>

      <MDBCard className="">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/337741/turtle-galapagos-letterbox-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Classic Italy</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>
    
    </MDBCardGroup>
    <MDBCardGroup className="mb-5">
      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/175928/madikwe-hills-safari-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5"> Safari, Wine and Waterfalls</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-4">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/168446/castle-coombe-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Peru and the Galapagos Luxury Tour</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>

      <MDBCard className="">
        <MDBCardImage src="https://www.jacadatravel.com/wp-content/uploads/fly-images/153741/example_trip__iStock_000030333700_Large_0-362x210-cc.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="packages-card-body">
          <MDBCardTitle className="travel-packages-title" tag="h5">  Classic Italy</MDBCardTitle>
          <div className="card-label t-tag">
          <div className="price-from">Prices start from</div>
          <div className="price-from">$10,500</div>
          </div>
          <MDBCardText className="travel-packages-description">
          Discover the jewels of Southern Africa in this luxurious 10-day adventure
          </MDBCardText>
          <div class="card-button t-tag t-tag--black"><Link to="/destinations/lalibela" class="t-tag">EXPLORE THIS TRIP</Link></div>

        </MDBCardBody>
      </MDBCard>
    
    </MDBCardGroup>
    </MDBContainer>
  
    </>
)
}
export default ExampleTrips;