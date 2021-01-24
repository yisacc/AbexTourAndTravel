import react from 'react';

function RegistrationSection1(props){
   const {destinations,AddDestination,handleChange,destination,removeItem,handleValueChange,data,notCompleted}=props;
    return(
        <>
        <div class="form-section">
         <strong class="form-heading">Travel information</strong>
         <div class="form-group">
            <label>Destination(s)</label>
            <ul class="tags">
               {destinations.map(element=>(
                  <li onClick={(e)=>removeItem(e)}>{element}</li>
               ))}
</ul>
            <div class="destinations-wrap"> <input type="text" class="form-control icon icon-location" name="locations_search" value={destination} onChange={(e)=>handleChange(e)} placeholder="e.g. Iceland" autocomplete="off" /> </div>
            <button class="btn btn-primary destinations-wrap-btn" onClick={()=>AddDestination()} tabindex="-1">+ Add Another</button>
        
         </div>
         <div class="row">
   <div class="col-xs-12 col-sm-4 col-lg-12">
      <div class="form-group">
         <label for="number_of_passengers"> How many people are travelling? <span class="required">(required)</span> </label> 
         <select defaultValue={data.number_of_passengers} id="number_of_passengers" name="number_of_passengers" className={`form-control validate ${data.number_of_passengers!==''?'has-value':''}`}  onChange={(e)=>handleValueChange(e)}>
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
         {notCompleted.formCompleted&&notCompleted.number_of_passengers?<div class="error-message" id="errorPassengers">Please enter the number of passengers.</div>:null}
      </div>
   </div>
</div>
         <label class="has-sub"> When would you like to go? </label>
         <div class="row">
   <div class="col-xs-6 col-sm-4">
      <label class="sub">Year</label> 
      <select defaultValue={data.date_year_new} name="date_year_new" className={`form-control full ${data.date_year_new!==''?'has-value':''}`} onChange={(e)=>handleValueChange(e)}>
         <option value="">Any Year</option>
         <option value="2021"> 2021</option>
         <option value="2022"> 2022</option>
         <option value="2023"> 2023</option>
         <option value="2024"> 2024</option>
      </select>
   </div>
   <div class="col-xs-6 col-sm-4">
      <label class="sub">Month</label> 
      <select defaultValue={data.date_month_new} name="date_month_new" className={`form-control full ${data.date_month_new!==''?'has-value':''}`} onChange={(e)=>handleValueChange(e)}>
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
      <select defaultValue={data.date_day_new} name="date_day_new" className={`form-control full ${data.date_day_new!==''?'has-value':''}`}  onChange={(e)=>handleValueChange(e)}>
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
      <textarea name="details" rows="10" className={`form-control validate icon icon-pencil ${data.details!==''?'has-value':''}`} placeholder="Be as detailed as you like..." onChange={(e)=>handleValueChange(e)}></textarea>
      {notCompleted.formCompleted&&notCompleted.details?<div class="error-message" id="errorDetails">Please leave a message so we can start planning your bespoke trip.</div>:null}
   </div>
   <div class="form-group">
      <label for="selectAspect"> What is the most important aspect of this trip for you? </label>
      <div class="custom-select">
         <select defaultValue={data.aspect} name="aspect" id="selectAspect" className={`form-control full icon icon-default ${data.aspect!==''?'has-value':''}`} onChange={(e)=>handleValueChange(e)}>
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
        
        </>
    )
}
export default RegistrationSection1;