import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Lalibela from "../pages/destinations/lalibela/lalibela";
import Ethiopia from "../pages/countries/ethiopia/ethiopia";

function AbexTourRoute() {
  return (
    <>
    <Router>
      <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
      <Route path="/destinations/ethiopia" component={Ethiopia} />
      <Route path="/destinations/lalibela" component={Lalibela} />
      
      </Router>
    </>
  );
}
export default AbexTourRoute;
