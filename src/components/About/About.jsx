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
      color: "#2C333F"
      // fontWeight: 'bold'
    };
    return (
      <div className="about" id="about">
        <div className="about-btn-container">
          <button type="button" className="btn btn-link about-btn">
            <MDBNavLink
              className="#about about-scroll"
              to="/"
              onClick={() => scroll.scrollMore(625)}
            >
              <MDBIcon className="fas fa-camera fa-3x" icon="chevron-down" />{" "}
              <p style={font}>ROUNDY</p>{" "}
            </MDBNavLink>
          </button>
        </div>
        <div className="about-container">
          <MDBCol md="3">
            <h4 className="text-uppercase font-weight-bolder" style={font1}>
              About.Me
            </h4>
            <MDBCard className="about-card shadow-box-example">
              <MDBCardText className="about-text">
                Born in Seattle Washington raised in Salt Lake City Utah.
                Whether it’s rock climbing to marry the love of my life, welding
                on a oil field in the frozen tundra of North Dekota, brewing and
                collaborating world class craft beers, or learning a new
                programing language. I continuously strive to build on my life
                resume. In 2019, I put my brewing boots aside, to attend a 13
                week Full Stack Web Dev program, from Dev Mountain. I look
                forward to this new chapter in my life. To continually learning,
                developing, and build on my life resume.
              </MDBCardText>
              <MDBCardImage
                className="roundy-fam shadow-box-example"
                src={roundyFam}
              ></MDBCardImage>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    );
  }
}

export default About;
