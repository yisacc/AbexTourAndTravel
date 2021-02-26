import react from 'react';
import {MDBContainer} from 'mdbreact';

const ExampleTripMap=(props)=>{
  const {exampleTripMapData}=props;
    return(
        <>
        <MDBContainer fluid>
        <div class="example-trip-map bg-grey row">
        <div class="map-wrapper col-xs-12 col-lg-6">
   <div class="map">
   <img src={exampleTripMapData.map}></img>
   </div>
      </div>
      <div class="col-xs-12 col-lg-6 col-lg-offset-6">
         <div class="example-trip-map__padding">
            <h2>At a glance</h2>
            <div class="tab-content current">
         <div dangerouslySetInnerHTML={{__html: exampleTripMapData.ataglance}} />

               </div>
         </div>
      </div>
   </div>
</MDBContainer>
        </>
    )
}

export default ExampleTripMap;