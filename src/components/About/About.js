import React, { Component } from "react";
import "./About.scss";
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
import { Link } from "react-router-dom";
import JS from "./assets/JS.png";
import Nodejs from "./assets/icons8-nodejs-144.png";
import ReactPng from "./assets/React.png";
import HTML5 from "./assets/HTML5_Badge_256.png";
import CSS3 from "./assets/CSS3.png";
import Jest from "./assets/Jest.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll as scroll } from "react-scroll";

export default class About extends Component {
  render() {
    const font = {
      fontFamily: "Orbitron",
      fontSize: 35
    };
    return (
      <div id="about">
    
        <div className="about-btn-container">
          <button type="button" class="btn btn-link about-btn">
            <a
              className="about-scroll"
              href="#about"
              onClick={() => scroll.scrollMore(500)}
            >
              <MDBIcon
                className="fas fa-camera fa-3x"
                icon="chevron-circle-down"
              />
              <MDBNavLink
                activeClass="active"
                className="#about"
                to="about"
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
        {/* <h1>Roundy</h1> */}
        <div className="card-container" waves>
          <MDBContainer>
            <MDBRow>
              {/* <Link>
            <ScrollAnimation animateIn="fadeInRight" delay=".8s">
              <a className="linkText" href="#/us">
                <img
                  className="img-fluid"
                  style={{ width: "15vw", height: "25vh" }}
                  src={JS}
                />
              </a>
            </ScrollAnimation>
          </Link> */}
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="fadeInLeft" delay="1s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={Nodejs}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="fadeInLeft" delay="1s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={JS}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>

              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="fadeInRight" delay=".5s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={HTML5}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="fadeInRight" delay=".5s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={CSS3}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="zoomIn" delay=".3s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={ReactPng}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="zoomIn" delay=".5s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={Jest}
                        />
                      </a>
                    </>
                  </ScrollAnimation>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
