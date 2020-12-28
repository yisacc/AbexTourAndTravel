import react from 'react';
import {MDBContainer} from 'mdbreact';
import PersonalDetail from './personalDetail';


const Registration=()=>{
    return(
        <>
        <MDBContainer className="abex-tour-container mt-5" fluid>
        <div class="enquiry-section contact-form-2017 form-twocol">
        <div class="form-enquiry row">
   <div class="col-lg-6">
      <div class="form-section">
         <strong class="form-heading">Travel information</strong>
         <div class="form-group">
            <label>Destination(s)</label>
            <ul class="tags"></ul>
            <div class="destinations-wrap"> <input type="text" class="form-control icon icon-location" name="locations_search" placeholder="e.g. Iceland" autocomplete="off" /> </div>
            <button class="btn btn-primary destinations-wrap-btn" tabindex="-1">+ Add Another</button>
        
         </div>
         <div class="row">
   <div class="col-xs-12 col-sm-4 col-lg-12">
      <div class="form-group">
         <label for="number_of_passengers"> How many people are travelling? <span class="required">(required)</span> </label> 
         <select id="number_of_passengers" name="number_of_passengers" class="form-control validate">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="10+">10+</option>
         </select>
         <div class="error-message d-none" id="errorPassengers">Please enter the number of passengers.</div>
      </div>
   </div>
</div>
         <label class="has-sub"> When would you like to go? </label>
         <div class="row">
   <div class="col-xs-6 col-sm-4">
      <label class="sub">Year</label> 
      <select name="date_year_new" class="form-control full">
         <option value="">Any Year</option>
         <option value="2021"> 2021</option>
         <option value="2022"> 2022</option>
         <option value="2023"> 2023</option>
         <option value="2024"> 2024</option>
      </select>
   </div>
   <div class="col-xs-6 col-sm-4">
      <label class="sub">Month</label> 
      <select name="date_month_new" class="form-control full">
         <option value="">Any Month</option>
         <option value="01">January</option>
         <option value="02">February</option>
         <option value="03">March</option>
         <option value="04">April</option>
         <option value="05">May</option>
         <option value="06">June</option>
         <option value="07">July</option>
         <option value="08">August</option>
         <option value="09">September</option>
         <option value="10">October</option>
         <option value="11">November</option>
         <option value="12">December</option>
      </select>
   </div>
   <div class="hidden-xs col-sm-4">
      <label class="sub">Day</label> 
      <select name="date_day_new" class="form-control full">
         <option value="">Any Day</option>
         <option value="01">1</option>
         <option value="02">2</option>
         <option value="03">3</option>
         <option value="04">4</option>
         <option value="05">5</option>
         <option value="06">6</option>
         <option value="07">7</option>
         <option value="08">8</option>
         <option value="09">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
         <option value="31">31</option>
      </select>
   </div>
</div>
         </div>
         <div class="form-section">
   <div class="form-group">
      <strong class="form-heading"> Your Trip </strong> <label> Tell us about your ideal trip <span class="required">(required)</span> </label>
      <textarea name="details" rows="10" class="form-control validate icon icon-pencil" placeholder="Be as detailed as you like..."></textarea>
      <div class="error-message d-none" id="errorDetails">Please leave a message so we can start planning your bespoke trip.</div>
   </div>
   <div class="form-group">
      <label for="selectAspect"> What is the most important aspect of this trip for you? </label>
      <div class="custom-select">
         <select name="aspect" id="selectAspect" class="form-control full icon icon-default">
            <option value=""> Please choose from the list</option>
            <option value="adventure">Adventure</option>
            <option value="nature">Nature</option>
            <option value="culture">Culture</option>
            <option value="conservation">Conservation</option>
            <option value="family">Friends &amp; Family</option>
            <option value="photography">Photography</option>
            <option value="luxury">Luxury</option>
            <option value="romance">Romance</option>
            <option value="wildlife">Wildlife</option>
            <option value="open">I'm open to suggestions</option>
         </select>
      </div>
   </div>
</div>
         </div>
         <div class="col-lg-6">
             <div>
                 <div>
                 <div class="form-section">
   <strong class="form-heading"> Budget </strong>
   <div class="row">
      <div class="col-sm-6">
         <div class="form-group">
            <label>Currency</label> 
            <select name="currency" class="form-control has-value">
               <option value="USD"> $ USD</option>
               <option value="GBP"> £ GBP</option>
               <option value="AUD"> $ AUD</option>
               <option value="CAD"> $ CAD</option>
               <option value="HKD"> $ HKD</option>
               <option value="SGD"> $ SGD</option>
               <option value="NZD"> $ NZD</option>
               <option value="CNY"> ¥ RMB</option>
               <option value="EUR"> € EUR</option>
            </select>
         </div>
      </div>
      <div class="col-sm-6">
         <div class="form-group">
            <label>Max. budget per person</label> 
            <select name="budget" class="form-control">
               <option value="-">-</option>
               <option value="4000">$4,000</option>
               <option value="5000">$5,000</option>
               <option value="6000">$6,000</option>
               <option value="7000">$7,000</option>
               <option value="8000">$8,000</option>
               <option value="9000">$9,000</option>
               <option value="10000">$10,000</option>
               <option value="15000">$15,000</option>
               <option value="20000">$20,000</option>
               <option value="25000">$25,000</option>
               <option value="30000">$30,000</option>
               <option value="No Budget">No Budget</option>
            </select>
         </div>
      </div>
   </div>
</div>
                <PersonalDetail />
                 </div>
             </div>
         </div>
         </div>
         </div>
         </MDBContainer>
        </>
    )
}
export default Registration;