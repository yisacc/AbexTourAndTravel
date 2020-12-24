import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Lalibela from "../pages/destinations/lalibela/lalibela";

function AbexTourRoute() {
  return (
    <>
    <Router>
      <Route path="/home" component={HomePage} />
      <Route path="/destinations/lalibela" component={Lalibela} />
      </Router>
    </>
  );
}
export default AbexTourRoute;
