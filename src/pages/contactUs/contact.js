import react,{useState} from 'react';
import RegistrationSection1 from '../destinations/registrationSection1';
import RegistrationSection2 from '../destinations/registrationSection2';
import { Link } from 'react-router-dom';
import axiosInstance from "../../utils/axios";
import { useHistory } from 'react-router-dom';

function ContactUs(){
   let history = useHistory();
   const [loading,setLoading]=useState(false);
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

   let destinationString='';
   destinations.forEach(element => {
      destinationString=+element;
   });
   const requestBody={
      Destinations:destinationString,
      number_of_passengers:state.number_of_passengers,
      year:Number.parseInt(state.date_year_new),
      month:Number.parseInt(state.date_month_new),
      day:Number.parseInt(state.date_day_new),
      details:state.details,
      aspectss:state.aspectss,
      currency:state.currency,
      budget:state.budget,
      name:state.client_name,
      phone_number:state.client_phone_number,
      email:state.client_email,
   };
   const validate=()=>{
      debugger;
      setLoading(true);
      setNotCompleted((prevState)=>({
         ...prevState,
         formCompleted:true
      }));
      if(notCompleted.number_of_passengers||notCompleted.details||notCompleted.PhoneNumber||notCompleted.Fullname||notCompleted.Email||notCompleted.consent_processing){
         console.log('data filled well');
         setLoading(false);
      }else{
         console.log(JSON.stringify(requestBody));
         axiosInstance.post('/contact-uses',requestBody)
         .then((data)=>{
            history.push('/contact/thanks');
            setLoading(false);
         })
         .catch((error)=>{
            setLoading(false);
debugger;
         });
      }
   }
   const handleChecked=(e)=>{
      setState((prevState) => ({
         ...prevState,
         consent_processing: !state.consent_processing,
       }));
       setNotCompleted((prevState)=>({
          ...prevState,
          consent_processing:!notCompleted.consent_processing,
       }))
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
    <section class="component-header-section component-index-1 bg-white">
   <section class="hero-cover hero-cover--auto hero-cover--no-image">
      <div class="hero-cover__content-container container">
         <h1 class="hero-cover__primary-heading hero-cover__primary-heading--black serif"> Contact&nbsp;Us</h1>
         <div class="hero-cover__subtitle h3 hero-cover__subtitle--black"> Send us some details so we can create your 100% tailor-made&nbsp;trip.</div>
         <div></div>
         <div class="print-logo">
            <svg width="144" height="40" viewBox="0 0 144 40" presureaspectratio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
               <g fill="#FFF" fill-rule="evenodd">
                  <path d="M26.265 30.957c-5.27 0-9.555-4.344-9.555-9.682 0-5.337 4.285-9.68 9.555-9.68 5.271 0 9.559 4.343 9.559 9.68 0 5.338-4.288 9.682-9.559 9.682m0-22.035c-6.723 0-12.193 5.541-12.193 12.353 0 6.809 5.47 12.352 12.193 12.352 3.874 0 7.322-1.843 9.559-4.703v3.369h2.636V21.275c0-6.812-5.47-12.353-12.195-12.353M76.532 30.957c-5.27 0-9.558-4.344-9.558-9.682 0-5.337 4.288-9.68 9.558-9.68s9.556 4.343 9.556 9.68c0 5.338-4.286 9.682-9.556 9.682m0-22.035c-6.725 0-12.193 5.541-12.193 12.353 0 6.809 5.468 12.352 12.193 12.352 3.872 0 7.322-1.843 9.556-4.703v3.369h2.638V21.275c0-6.812-5.472-12.353-12.194-12.353M104.105 30.957c-5.27 0-9.556-4.344-9.556-9.682 0-5.337 4.286-9.68 9.556-9.68s9.555 4.343 9.555 9.68c0 5.338-4.285 9.682-9.555 9.682M113.66.404v13.223c-2.233-2.861-5.684-4.705-9.555-4.705-6.724 0-12.195 5.541-12.195 12.353 0 6.809 5.47 12.352 12.195 12.352 6.724 0 12.193-5.543 12.193-12.352V.405h-2.638M131.68 30.957c-5.272 0-9.559-4.344-9.559-9.682 0-5.337 4.287-9.68 9.558-9.68 5.269 0 9.555 4.343 9.555 9.68 0 5.338-4.286 9.682-9.555 9.682m0-22.035c-6.725 0-12.194 5.541-12.194 12.353 0 6.809 5.469 12.352 12.194 12.352 3.87 0 7.32-1.843 9.555-4.703v3.369h2.637V21.275c0-6.812-5.47-12.353-12.192-12.353M61.14 27.606a9.501 9.501 0 0 1-7.23 3.35c-5.269 0-9.555-4.343-9.555-9.681 0-5.337 4.286-9.681 9.555-9.681a9.504 9.504 0 0 1 7.23 3.351c.356-.882.779-1.724 1.27-2.523a12.096 12.096 0 0 0-8.5-3.499c-6.722 0-12.192 5.54-12.192 12.352 0 6.809 5.47 12.352 12.192 12.352 3.193 0 6.232-1.264 8.5-3.499a16.909 16.909 0 0 1-1.27-2.522M.598 39.276c6.428-1.995 10.196-8.41 10.196-18.001V.319H8.158v20.956c0 8.735-2.739 15.724-7.778 17.287-.694.216-.326.885.218.714"></path>
               </g>
            </svg>
         </div>
      </div>
   </section>
</section>
    <section class="component-contact-form-section component-index-2 light">
   <div class="padded-section bg-white container">
      <div class="enquiry-section contact-form-2017 form-onecol">
         <div class="form-enquiry row">
            <div class="col-lg-8">
<RegistrationSection1 destinations={destinations} AddDestination={AddDestination} handleChange={handleChange} destination={destination} removeItem={removeItem} handleValueChange={handleValueChange} data={state} notCompleted={notCompleted} />
<div class="mt-4">
<RegistrationSection2 handleValueChange={handleValueChange} data={state} loading={loading} handleChecked={handleChecked} validate={validate} notCompleted={notCompleted} />
</div>

            </div>
            <div class="col-lg-4">
               <div class="trustpilot-box">
               <div class="trustpilot-box-top">
   <div class="h5 no-margin">Prefer to talk?</div>
   <p>Call one of our experts today</p>
   <Link class="h3 no-margin t-link--white rTapNumber420174" to="tel:+2519230523592" style={{visibility: "visible"}}>+251-92-305-2359</Link>
</div>

               </div>
               <div class="trustpilot-box-bottom">
   <p>We're rated Excellent based on customer&nbsp;reviews</p>
</div>
<div class="points">
   <div class="point">
      <div class="row">
         <div class="col-md-3">
            <svg class="svg-icon cta-icon">
            <svg id="cta-plane">
   <g fill="none" fill-rule="evenodd">
      <path d="M57.51 5.793c-1.616-3.317-10.246.353-16.072 3.133L23.695.402c-.256-.131-.566-.109-.825.018l-2.278 1.113c-.26.126-.34.486-.11.695l6.323 6.533-1.087.53a.496.496 0 0 0-.213.617l.354.726c.1.207.409.313.616.212l1.605-.784 3.876 4.008c-4.563 2.741-9.297 5.855-12.059 7.62l-6.252-2.11c-.256-.13-.566-.108-.825.019l-.673.328c-.207.101-.248.346-.096.528l4.766 5.177 1.14 6.947c.05.233.267.35.475.25l.673-.33c.259-.126.429-.369.522-.639l2.189-6.232c3.09-1.092 8.468-2.949 13.421-4.822l.768 5.525-1.605.784a.496.496 0 0 0-.212.617l.353.726c.101.207.41.313.616.212l1.088-.531 1.248 9.01c.023.31.343.507.615.342l2.279-1.113c.259-.126.429-.37.522-.64l4.214-19.247C50.872 13.684 59.125 9.11 57.51 5.793z" fill="#A5A5A5" fill-rule="nonzero"></path>
      <path d="M18.826 25c-7.92 2.365-13.201 5.406-15.842 9.123C-.976 39.7 1.5 44.26 5.954 46.288c4.456 2.027 20.793 1.013 23.268 4.561 2.476 3.548 5.941 3.041 1.98 11.151" stroke="#A5A5A5" stroke-width="2" stroke-dasharray="6,4"></path>
   </g>
</svg>
            </svg>
         </div>
         <div class="col-md-9">
            <p>We design bespoke experiences tailored to your exact tastes</p>
         </div>
      </div>
   </div>
   <div class="point">
      <div class="row">
         <div class="col-md-3">
            <svg class="svg-icon cta-icon">
            <svg id="cta-signs">
   <path d="M27.528 47.591l-2.697-11.684-16.735 4.799-8.102-4.824 4.314-8.384L21.736 22.5l-.845-3.657L4.498 21.44l-.345-2.175 3.34-1.16-3.553-.187-.937-5.919 5.27-1.936-5.493.534-.432-2.728 15.445-2.446-.938-4.061 3.35-.774.992 4.296 20.202-3.2 7.454 5.775-5.304 7.796-19.254 3.05.75 3.247 17.27-4.952 1.203 4.198-5.539 2.652 5.84-1.349 2.283 7.707-17.962 5.15 2.904 12.577c5.169.441 9.147 3.12 9.147 5.486 0 2.589-2.155 1.802-10.627 1.802-8.583-.19-10.628.787-10.628-1.802 0-2.28 3.696-4.852 8.592-5.43z" fill="#A5A5A5" fill-rule="evenodd"></path>
</svg>
            </svg>
         </div>
         <div class="col-md-9">
            <p>We take care of every detail so you don't have to worry</p>
         </div>
      </div>
   </div>
   <div class="point">
      <div class="row">
         <div class="col-md-3">
            <svg class="svg-icon cta-icon">
            <svg id="cta-advice">
   <g fill="none" fill-rule="evenodd">
      <path d="M45.76 30.782c0-3.83-1.964-7.277-5.03-9.575-.815 3.83-2.876 7.373-6.038 10.15-4.073 3.59-9.44 5.6-15.142 5.6h-.383c2.443 3.83 7.043 6.463 12.362 6.463 2.3 0 4.409-.479 6.325-1.34l5.559 2.537c.383.192.814-.144.766-.574l-.719-6.463c1.486-1.963 2.3-4.309 2.3-6.798z" fill="#A5A5A5" fill-rule="nonzero"></path>
      <path d="M38.908 17.521C38.908 8.043 30.235.383 19.55.383S.192 8.043.192 17.521c0 3.4 1.102 6.607 3.066 9.288l-1.006 8.808c-.048.574.527 1.005 1.054.766l7.571-3.495a21.397 21.397 0 0 0 8.625 1.82c10.733 0 19.406-7.708 19.406-17.187z" fill="#A5A5A5" fill-rule="nonzero"></path>
      <path d="M22 18.68V9h-1.221v9.68c0 4.034-1.269 7.262-3.603 7.984-.322.1-.151.408.1.33C20.255 26.071 22 23.108 22 18.678z" stroke="#FFF" stroke-width=".5" fill="#FFF"></path>
   </g>
</svg>
            </svg>
         </div>
         <div class="col-md-9">
            <p>We give advice and recommendations that are right for you</p>
         </div>
      </div>
   </div>
   <div class="point">
      <div class="row">
         <div class="col-md-3">
            <svg class="svg-icon cta-icon">
            <svg id="cta-responsible">
   <path d="M35.392 36.695a.9.9 0 0 0-.143-.382c-.733-1.162-1.002-3.05-.733-4.086.3-1.148.444-1.544.93-2.742.104-.26.253-.563.393-.92.422-.378 1.293-6.85 5.797-7.187 5.44-.7 6.44 3.22 14.496.91C64.188 19.975 63.149 11.88 64 8.753c-1.883 1.374-3.871 4.244-15.73 1.857-2.85-.408-8.223 2.687-10.372 9.951 1.559-1.46 6.83-6.907 16.427-6.89-4.897.907-12.816 2.977-17.344 9.242.006-.028.01-.052.015-.07l-.398-.082C32.076 10.932 19.436 7.524 12.14 6.172c13.7-.025 18.992 7.83 20.947 9.662C30.393 6.719 23.315 1.818 19.74 2.33 4.858 5.326 2.363 1.724 0 0c1.068 3.923-.236 14.083 9.874 16.983 10.11 2.9 11.365-2.02 18.191-1.14 4.364.325 6.01 5.241 6.778 7.683l-.004.02a85.436 85.436 0 0 1-.572 2.407c-.137.538-.27 1.029-.395 1.46-.158.538-.302.973-.426 1.28-.532 1.314-1.016 2.533-1.409 3.656-.344.986-1.387 2.756-2.095 3.964a.827.827 0 0 0-.124.409c-4.55.752-7.893 3.182-7.893 5.351 0 2.606 2.183 1.814 10.763 1.814 8.69-.19 10.762.792 10.762-1.814 0-2.196-3.423-4.658-8.058-5.378z" fill="#A5A5A5"></path>
</svg>
            </svg>
         </div>
         <div class="col-md-9">
            <p>We believe luxury travel should be synonymous with responsible travel</p>
         </div>
      </div>
   </div>
</div>
            </div>
            </div>
            </div>
            </div>
            </section>
    </>
)
}

export default ContactUs;