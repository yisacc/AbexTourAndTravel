import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Lalibela from "../pages/destinations/lalibela/lalibela";
import Ethiopia from "../pages/countries/ethiopia/ethiopia";
import ContactUs from "../pages/contactUs/contact";
import OurStory from "../pages/about/ourStory/ourstory";
import DanakilDepression from "../pages/destinations/danakilDepression/danakilDepression";
import ThanksPage from "../pages/contactUs/thanks/thanks";


function AbexTourRoute() {
  return (
    <>
    
    <Route exact path="/" component={HomePage} />
      <Route path="/destinations/ethiopia" component={Ethiopia} />
      <Route path="/destinations/lalibela" component={Lalibela} />
      <Route path="/contact/thanks" component={ThanksPage} />
      <Route exact path="/contact" component={ContactUs} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/danakil-depression" component={DanakilDepression} />
      

      
    </>
  );
}
export default AbexTourRoute;
