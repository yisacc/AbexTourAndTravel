import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 abex-tour-footer">
      <MDBContainer fluid className="text-center text-md-left abex-tour-container">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="abex-tour-footer-subtitle">DESTINATIONS</h5>
            <ul>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Aksum</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Lalibela</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Gonder</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Sofomer</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Sofomer</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Sofomer</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">Sofomer</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="abex-tour-footer-subtitle">CONTACT</h5>
            <ul>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">+251923052359</a>
              </li>
              <li className="list-unstyled abex-tour-footer-link">
                <a href="#!">abextour@gmail.com</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.abextour.com"> abextour.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;