import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Skills.scss";
import {
  MDBIcon,
  MDBNavLink,
  // MDBCard,
  MDBRow,
  MDBCardImage,
  // MDBCardTitle,
  MDBCol,
  MDBContainer
} from "mdbreact";
import { Proficiencies } from "./Proficiencies.js";

// import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll as scroll } from "react-scroll";

export default class Skills extends Component {
  render() {
    const font = {
      fontFamily: "Orbitron",
      fontSize: 45
    };
    return (
      <div id="skills">
        <div className="skills-btn-container">
          <button type="button" className="btn btn-link about-btn">
            {/* <a
              className="about-scroll"
              href="#about"
              
            > */}
              <MDBNavLink
                className="#about"
                to="about"
                // spy={true}
                // smooth={true}
                // duration={500}
                onClick={() => scroll.scrollMore(900)}
              >
              <MDBIcon className="fas fa-camera fa-3x" icon="chevron-down" />
                {" "}
              </MDBNavLink>
            {/* </a> */}
          </button>
        </div>
        <div className="skills-header">
          <p style={font}>SKILLS</p>{" "}
        </div>
        
        <div className="skills-container">
          <MDBContainer>
            <MDBRow>
              {Proficiencies.map(function(element) {
                return (
                  <MDBCol md="3"> 
                    {/* <Link> */}
                      <ScrollAnimation animateIn="zoomIn">
                        <a className="img-js" href="#/us">
                          <MDBCardImage
                            className="img-js-origin img-fluid"
                            // style={{ width: "15vw", height: "25vh" }}
                            src={element.src}
                          />
                        </a>
                        <p>{element.name}</p>
                      </ScrollAnimation>
                    {/* </Link> */}
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
