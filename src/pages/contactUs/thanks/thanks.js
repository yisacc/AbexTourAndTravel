import react,{useState} from 'react';
import Banner from "./banner";
import Information from './information';

const ThanksPage=()=>{
    return(
        <>
         <div class="page-content"> 
         <div class="flexible-content">
        <Banner />
        <Information />
        </div>
        </div>
        </>
    )
}

export default ThanksPage;