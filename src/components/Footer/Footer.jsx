import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBIcon } from "mdbreact";
import "./Footer.scss";

const Footer = () => {
  return (
    <MDBFooter
      color="elegant-color
    "
      className="font-small pt-6 mt-0"
      // id="footer"
    >
      <MDBContainer fluid className="footer text-center text-md-left">
        <MDBCol md="6">
          <h5 className="title">GET IN TOUCH</h5>
          <p className="footer-p">
            Want to talk about beer or code? Contact me through one of these
            links. Cheers!
          </p>
        </MDBCol>
        <MDBCol md="3">
          {/* <h5 className="title">Links</h5> */}
          <ul>
            <div className="footer-link-container">
              <li className="footer-links">
                <a href="https://github.com/Vosslc" target="_blank" rel="noopener noreferrer">
                  <MDBIcon fab icon="github" size="2x" />
                </a>
              </li>
              <li className="footer-links" target="_blank" rel="noopener noreferrer">
                <a href="https://www.linkedin.com/in/nate-roundy/">
                  <MDBIcon fab icon="linkedin" size="2x" />
                </a>
              </li>
              <li className="footer-links">
                <a href="https://teamtreehouse.com/roundy" target="_blank" rel="noopener noreferrer">
                  <MDBIcon icon="tree" size="2x" />
                </a>
              </li>
            </div>
          </ul>
        </MDBCol>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} / 100% built by {"Roundy"}
          {/* <a href="https://www.MDBootstrap.com">  </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
