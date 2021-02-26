import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";
import {Link} from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 abex-tour-footer">
      <MDBContainer fluid className="text-center text-md-left abex-tour-container">
        <MDBRow>
          <MDBCol md="6">
            <h5 class="footer-subtitle">East Africa Tour And Travel</h5>
            <div class="footer-subtitle">Contact</div>
            <ul>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">+251-92-305-2359</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">abextour@gmail.com</Link>
              </li>
              
            </ul>
            <div class="social-icon-section">
            <Link target="_blank" to="https://www.facebook.com/abextour/">
      <MDBIcon fab icon="tripadvisor" size="lg" />
   </Link>
   <Link target="_blank" to="https://www.facebook.com/abextour/">
      <MDBIcon fab icon="facebook-square" size="lg" />
   </Link>
   <Link target="_blank" to="https://twitter.com/abextour">
      <MDBIcon fab icon="twitter" size="lg" />
   </Link>
   <Link target="_blank" to="https://www.instagram.com/abextour/">
      <MDBIcon fab icon="instagram" size="lg" />
   </Link>
   <Link target="_blank" to="https://www.instagram.com/abextour/">
      <MDBIcon fab icon="telegram" size="lg" />
   </Link>
</div>
          </MDBCol>
          
          <MDBCol md="3">
            <h5 className="abex-tour-footer-subtitle">DESTINATIONS</h5>
            <ul>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="/destinations/ethiopia">Ethiopia</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Kenya</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Uganda</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Djibouti</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Eritrea</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Somalia</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">South Sudan</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">Sudan</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="abex-tour-footer-subtitle">About</h5>
            <ul>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="/our-story!">Our Story</Link>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <Link to="#!">What We Do?</Link>
              </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="http://eastafricatourandtravel.com"> eastafricatourandtravel.com </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;