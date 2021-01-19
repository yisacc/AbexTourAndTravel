import react, { useState } from 'react';
import {MDBContainer} from 'mdbreact';

import RegistrationSection1 from './registrationSection1';
import RegistrationSection2 from './registrationSection2';


const Registration=()=>{

    const [destinations,setDestinations]=useState([]);
    const [destination,setDestination]=useState();

    const AddDestination=()=>{
        debugger;
        setDestinations([...destinations,destination])
    }
    const handleChange=(e)=>{
        debugger;
        const {  value } = e.target;
        setDestination(value);
    }
    return(
        <>
        <MDBContainer className="abex-tour-container mt-5" fluid>
        <div class="enquiry-section contact-form-2017 form-twocol">
        <div class="form-enquiry row">
   <div class="col-lg-6">
      <RegistrationSection1 destinations={destinations} AddDestination={AddDestination} handleChange={handleChange} />
       </div>
         <div class="col-lg-6">
         <RegistrationSection2 />
          </div>
         </div>
         </div>
         </MDBContainer>
        </>
    )
}
export default Registration;