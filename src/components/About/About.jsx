import React, { Component } from "react";
import "./About.scss";
import {
  MDBIcon,
  MDBNavLink,
  MDBCardImage,
  MDBCard,
  // MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import roundyFam from "./assets/roundyFam.jpeg";
import { animateScroll as scroll } from "react-scroll";

/**
 *
 *
 * @export
 * @class About
 * @extends {Component}
 */
export class About extends Component {
  render() {
    const font = {
      fontFamily: "Orbitron",
      fontSize: 35,
      color: "#2C333F"
    };
    const font1 = {
      fontFamily: "Orbitron",
      fontSize: 25,
      color: "#2C333F",
      // fontWeight: 'bold'
    };
    return (
      <div className="about">
        <div className="about-btn-container">
          <button type="button" class="btn btn-link about-btn">
            <a
              className="about-scroll"
              href="#about"
              onClick={() => scroll.scrollMore(625)}
            >
              <MDBIcon className="fas fa-camera fa-3x" icon="chevron-down" />
              <MDBNavLink
                activeClass="active"
                className="#about"
                to="/"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <p style={font}>ROUNDY</p>{" "}
              </MDBNavLink>
            </a>
          </button>
        </div>
        <div className="about-container" id="about">
          <MDBCol md="3">
            <MDBCard className="about-card shadow-box-example">
              {/* <MDBCardBody className="meetup-content"> */}
                
                <MDBCardText className="about-text">
                <MDBCardTitle className="text-uppercase font-weight-bolder" style={font1}>About.Me</MDBCardTitle>
                  Born in Seattle Washington raised in Salt Lake City Utah.
                  Wether it’s rock climbing to marry the love of my
                  life, brewing and collaborating world class craft beers, or
                  learning a new programing language. I continuously strive to
                  build on my life resume
                </MDBCardText>
            <MDBCardImage
              className="roundy-fam shadow-box-example"
              src={roundyFam}
              ></MDBCardImage>
              {/* </MDBCardBody> */}
            </MDBCard>
          
            </MDBCol>
          
        </div>
      </div>
    );
  }
}

export default About;
