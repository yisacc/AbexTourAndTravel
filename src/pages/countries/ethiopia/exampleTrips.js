import react from 'react';
import {MDBContainer,MDBCardGroup,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import addExampleTrips from "../../../redux/actions/exampleTripsActions";
import { useHistory } from 'react-router-dom';

function ExampleTrips(props){
  const dispatch = useDispatch();
  const {exampleTripsData}=props;
  let history = useHistory();
  const handleClick=(id)=>{
    exampleTripsData.example_trips.forEach(element => {
      if(element._id==id){
        dispatch(addExampleTrips(element));
        history.push('/destinations/lalibela');
      }
    });
    
    
  }
return(
    <>
     <MDBContainer className="abex-tour-container padded-section" fluid>
        <h1 className="underlined text-center">{exampleTripsData.exampleTripsTitle}</h1>
    <MDBCardGroup className="mb-5">
      {
        exampleTripsData.example_trips.map(element => (
          <div class="col-4">
          <MDBCard className="mb-4">
          <MDBCardImage src={element.cardImage.url} alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody className="packages-card-body">
            <MDBCardTitle className="travel-packages-title" tag="h5"> {element.TripName}</MDBCardTitle>
            <div className="card-label t-tag">
            <div className="price-from">Prices start from</div>
            <div className="price-from">{element.priceStartFrom}</div>
            </div>
            <MDBCardText className="travel-packages-description">
            {element.travelPackagesDescription}
            </MDBCardText>
            <div class="card-button t-tag t-tag--black"><Link onClick={()=>handleClick(element._id)} class="t-tag">EXPLORE THIS TRIP</Link></div>
          </MDBCardBody>
        </MDBCard>
        </div>
  
        ))
      }
     
    
    </MDBCardGroup>

  
    </MDBContainer>
  
    </>
)
}
export default ExampleTrips;