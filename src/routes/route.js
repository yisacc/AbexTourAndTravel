import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/home/homePage";

function AbexTourRoute() {
  return (
    <>
    <Router>
      <Route path="/" component={HomePage} />
      </Router>
    </>
  );
}
export default AbexTourRoute;
