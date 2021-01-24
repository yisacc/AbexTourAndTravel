import react, { useState } from 'react';
import {MDBContainer} from 'mdbreact';

import RegistrationSection1 from './registrationSection1';
import RegistrationSection2 from './registrationSection2';


const Registration=()=>{

    const [notCompleted,setNotCompleted]=useState({
        number_of_passengers:true,
        details:true,
        client_name:true,
        client_phone_number:true,
        client_email:true,
        consent_processing:true,
        formCompleted: false,
     });
     const [state,setState]=useState({
        number_of_passengers:'',
        date_year_new:'',
        date_month_new:'',
        date_day_new:'',
        details:'',
        aspectss:'',
        currency:'',
        budget:'',
        client_name:'',
        client_phone_number:'',
        CountryCode:'',
        client_email:'',
        consent_processing:false,
     });
     const [destinations,setDestinations]=useState([]);
     const [destination,setDestination]=useState();
     const handleValueChange = (event) => {
        const { name, value } = event.target;
        
           setState((prevState) => ({
              ...prevState,
              [name]: value,
            }));
        if(value==''){
           setNotCompleted((prevState)=>({
              ...prevState,
              [name]:true
           }))
        }else{
           setNotCompleted((prevState)=>({
              ...prevState,
              [name]:false
           }))
        }
        
     };
     const validate=()=>{
        setNotCompleted((prevState)=>({
           ...prevState,
           formCompleted:true
        }));
        if(!notCompleted.number_of_passengers&&!notCompleted.details&&!notCompleted.PhoneNumber&&!notCompleted.Fullname&&!notCompleted.Email&&!notCompleted.consent_processing){
           console.log('data filled well');
        }
     }
     const handleChecked=(e)=>{
        setState((prevState) => ({
           ...prevState,
           consent_processing: !state.consent_processing,
         }));
     }
     const AddDestination=()=>{
         setDestinations([...destinations,destination]);
         setDestination('');
     }
     const handleChange=(e)=>{
         const {  value } = e.target;
         setDestination(value);
     }
     const removeItem=(e)=>{
        const {  innerText } = e.target;
        let array =[...destinations];
       let index= destinations.indexOf(innerText);
       if(index!==-1){
        array.splice(index, 1);
        setDestinations(array);
       }
       
     }
    return(
        <>
        <MDBContainer className="abex-tour-container mt-5" fluid>
        <div class="enquiry-section contact-form-2017 form-twocol">
        <div class="form-enquiry row">
   <div class="col-lg-6">
<RegistrationSection1 destinations={destinations} AddDestination={AddDestination} handleChange={handleChange} destination={destination} removeItem={removeItem} handleValueChange={handleValueChange} data={state} notCompleted={notCompleted} />
      
       </div>
         <div class="col-lg-6">
         <RegistrationSection2 handleValueChange={handleValueChange} data={state} handleChecked={handleChecked} validate={validate} notCompleted={notCompleted} />

          </div>
         </div>
         </div>
         </MDBContainer>
        </>
    )
}
export default Registration;