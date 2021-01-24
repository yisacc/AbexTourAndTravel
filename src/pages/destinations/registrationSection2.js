import react from 'react';
import PersonalDetail from './personalDetail';

function RegistrationSection2(props){
   const {handleValueChange,data,handleChecked,validate,notCompleted}=props;
    return(
        <>

<div>
                 <div>
                 <div class="form-section">
   <strong class="form-heading"> Budget </strong>
   <div class="row">
      <div class="col-sm-6">
         <div class="form-group">
            <label>Currency</label> 
            <select name="currency" onChange={(e)=>handleValueChange(e)} defaultValue={data.currency} class="form-control has-value">
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
            <select name="budget" onChange={(e)=>handleValueChange(e)} className={`form-control ${data.budget!==''?'has-value':''}`}  class="form-control" defaultValue={data.budget}>
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
                <PersonalDetail handleValueChange={handleValueChange} data={data} handleChecked={handleChecked} validate={validate} notCompleted={notCompleted} />
                 </div>
             </div>
        
        </>
    )
}
export default RegistrationSection2;