import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import JS from "./assets/JS.png";
import Nodejs from "./assets/icons8-nodejs-144.png";
import ReactPng from "./assets/React.png";
import HTML5 from "./assets/HTML5_Badge_256.png";
import CSS3 from "./assets/CSS3.png";
import Bootstrap from "./assets/Bootstrap.svg";
import Jest from "./assets/Jest.png";
import Airbnb from "./assets/Airbnb.svg";
import Heroku from "./assets/Heroku.svg";
import Postgresql from "./assets/Postgresql.svg";
import Redux from "./assets/Redux.svg";

// import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll as scroll } from "react-scroll";

export default class Skills extends Component {
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
                  <ScrollAnimation animateIn="fadeInRight" delay=".5s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={Bootstrap}
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
              <MDBCol md="3">
                <Link>
                  <ScrollAnimation animateIn="zoomIn" delay=".5s">
                    <>
                      <a className="img-js" href="#/us">
                        <MDBCardImage
                          className="img-js-origin img-fluid"
                          // style={{ width: "15vw", height: "25vh" }}
                          src={Airbnb}
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
                          src={Heroku}
                        />
                        {/* <svg width="1600" height="2500" viewBox="0 0 256 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M28.083 398.289V363.51c0-2.452-1.798-3.51-3.917-3.51-4.248 0-9.554 1.058-14.37 3.181v35.108H0v-64.576h9.795v21.304c4.656-1.712 10.206-3.18 15.758-3.18 8.898 0 12.246 5.469 12.246 12.976v33.476h-9.716zm27.999-21.063c.326 11.674 2.613 13.961 9.794 13.961 5.634 0 12.002-1.879 16.902-3.757l1.632 7.346c-5.226 2.37-11.593 4.655-19.183 4.655-16.33 0-18.862-8.978-18.862-23.268 0-7.835.573-14.939 2.45-21.47 4.898-1.878 11.43-2.857 19.673-2.857 13.393 0 17.473 7.43 17.473 20.41v4.98H56.082zM68.488 360c-2.935 0-7.59.082-11.427.813-.406 1.96-.899 4.655-1.062 9.636h20.41c0-6.778-1.225-10.449-7.921-10.449zm35.837 3.181v35.108h-9.797v-39.515c8.246-4.489 16.981-5.877 22.698-6.285v8.164c-4 .326-9.064.816-12.9 2.528zm38.778 36.25c-14.616 0-21.228-7.183-21.228-23.594 0-17.389 8.735-24 21.228-24 14.612 0 21.226 7.182 21.226 23.592 0 17.39-8.737 24.002-21.226 24.002zm0-39.43c-7.512 0-11.675 4.325-11.675 15.836 0 12.574 3.51 15.35 11.675 15.35 7.51 0 11.674-4.247 11.674-15.758 0-12.574-3.51-15.429-11.674-15.429zm68.49 38.288H200.08c-2.692-7.184-6.45-14.532-12.246-20.9h-5.144v20.9h-9.796v-64.576h9.796v37.062h4.573c4.98-5.144 8.816-11.509 11.511-17.797h11.02c-3.754 7.593-8.57 14.287-13.959 19.757 6.45 8.164 11.511 16.818 15.757 25.554zm18.363 1.142c-8.897 0-12.244-5.468-12.244-12.98v-33.473h9.714v34.697c0 2.452 1.794 3.512 3.917 3.512 4.246 0 10.042-1.06 14.86-3.184v-35.025H256v39.35c-11.593 6.369-20.493 7.103-26.044 7.103zM225.628 317.253H30.258C13.545 317.253 0 303.708 0 286.998V30.256C0 13.546 13.546 0 30.257 0h195.37c16.71 0 30.26 13.546 30.26 30.256v256.742c0 16.71-13.55 30.255-30.26 30.255z" fill="#6762A6"/><path d="M160.36 273.6V147.61s8.195-30.15-100.943 12.334c-.2.539-.2-116.504-.2-116.504l35.66-.22v74.991s99.846-39.325 99.846 29.824V273.6h-34.362zm20.32-184.994h-37.824c13.615-16.646 25.94-45.167 25.94-45.167h39.11s-6.696 18.587-27.225 45.167zM59.865 273.382v-71.748l35.878 35.877-35.878 35.871z" fill="#FFF"/></svg> */}
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
                          src={Postgresql}
                        />
                        {/* <svg width="1600" height="2500" viewBox="0 0 256 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M28.083 398.289V363.51c0-2.452-1.798-3.51-3.917-3.51-4.248 0-9.554 1.058-14.37 3.181v35.108H0v-64.576h9.795v21.304c4.656-1.712 10.206-3.18 15.758-3.18 8.898 0 12.246 5.469 12.246 12.976v33.476h-9.716zm27.999-21.063c.326 11.674 2.613 13.961 9.794 13.961 5.634 0 12.002-1.879 16.902-3.757l1.632 7.346c-5.226 2.37-11.593 4.655-19.183 4.655-16.33 0-18.862-8.978-18.862-23.268 0-7.835.573-14.939 2.45-21.47 4.898-1.878 11.43-2.857 19.673-2.857 13.393 0 17.473 7.43 17.473 20.41v4.98H56.082zM68.488 360c-2.935 0-7.59.082-11.427.813-.406 1.96-.899 4.655-1.062 9.636h20.41c0-6.778-1.225-10.449-7.921-10.449zm35.837 3.181v35.108h-9.797v-39.515c8.246-4.489 16.981-5.877 22.698-6.285v8.164c-4 .326-9.064.816-12.9 2.528zm38.778 36.25c-14.616 0-21.228-7.183-21.228-23.594 0-17.389 8.735-24 21.228-24 14.612 0 21.226 7.182 21.226 23.592 0 17.39-8.737 24.002-21.226 24.002zm0-39.43c-7.512 0-11.675 4.325-11.675 15.836 0 12.574 3.51 15.35 11.675 15.35 7.51 0 11.674-4.247 11.674-15.758 0-12.574-3.51-15.429-11.674-15.429zm68.49 38.288H200.08c-2.692-7.184-6.45-14.532-12.246-20.9h-5.144v20.9h-9.796v-64.576h9.796v37.062h4.573c4.98-5.144 8.816-11.509 11.511-17.797h11.02c-3.754 7.593-8.57 14.287-13.959 19.757 6.45 8.164 11.511 16.818 15.757 25.554zm18.363 1.142c-8.897 0-12.244-5.468-12.244-12.98v-33.473h9.714v34.697c0 2.452 1.794 3.512 3.917 3.512 4.246 0 10.042-1.06 14.86-3.184v-35.025H256v39.35c-11.593 6.369-20.493 7.103-26.044 7.103zM225.628 317.253H30.258C13.545 317.253 0 303.708 0 286.998V30.256C0 13.546 13.546 0 30.257 0h195.37c16.71 0 30.26 13.546 30.26 30.256v256.742c0 16.71-13.55 30.255-30.26 30.255z" fill="#6762A6"/><path d="M160.36 273.6V147.61s8.195-30.15-100.943 12.334c-.2.539-.2-116.504-.2-116.504l35.66-.22v74.991s99.846-39.325 99.846 29.824V273.6h-34.362zm20.32-184.994h-37.824c13.615-16.646 25.94-45.167 25.94-45.167h39.11s-6.696 18.587-27.225 45.167zM59.865 273.382v-71.748l35.878 35.877-35.878 35.871z" fill="#FFF"/></svg> */}
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
                          src={Redux}
                        />
                        {/* <svg width="1600" height="2500" viewBox="0 0 256 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M28.083 398.289V363.51c0-2.452-1.798-3.51-3.917-3.51-4.248 0-9.554 1.058-14.37 3.181v35.108H0v-64.576h9.795v21.304c4.656-1.712 10.206-3.18 15.758-3.18 8.898 0 12.246 5.469 12.246 12.976v33.476h-9.716zm27.999-21.063c.326 11.674 2.613 13.961 9.794 13.961 5.634 0 12.002-1.879 16.902-3.757l1.632 7.346c-5.226 2.37-11.593 4.655-19.183 4.655-16.33 0-18.862-8.978-18.862-23.268 0-7.835.573-14.939 2.45-21.47 4.898-1.878 11.43-2.857 19.673-2.857 13.393 0 17.473 7.43 17.473 20.41v4.98H56.082zM68.488 360c-2.935 0-7.59.082-11.427.813-.406 1.96-.899 4.655-1.062 9.636h20.41c0-6.778-1.225-10.449-7.921-10.449zm35.837 3.181v35.108h-9.797v-39.515c8.246-4.489 16.981-5.877 22.698-6.285v8.164c-4 .326-9.064.816-12.9 2.528zm38.778 36.25c-14.616 0-21.228-7.183-21.228-23.594 0-17.389 8.735-24 21.228-24 14.612 0 21.226 7.182 21.226 23.592 0 17.39-8.737 24.002-21.226 24.002zm0-39.43c-7.512 0-11.675 4.325-11.675 15.836 0 12.574 3.51 15.35 11.675 15.35 7.51 0 11.674-4.247 11.674-15.758 0-12.574-3.51-15.429-11.674-15.429zm68.49 38.288H200.08c-2.692-7.184-6.45-14.532-12.246-20.9h-5.144v20.9h-9.796v-64.576h9.796v37.062h4.573c4.98-5.144 8.816-11.509 11.511-17.797h11.02c-3.754 7.593-8.57 14.287-13.959 19.757 6.45 8.164 11.511 16.818 15.757 25.554zm18.363 1.142c-8.897 0-12.244-5.468-12.244-12.98v-33.473h9.714v34.697c0 2.452 1.794 3.512 3.917 3.512 4.246 0 10.042-1.06 14.86-3.184v-35.025H256v39.35c-11.593 6.369-20.493 7.103-26.044 7.103zM225.628 317.253H30.258C13.545 317.253 0 303.708 0 286.998V30.256C0 13.546 13.546 0 30.257 0h195.37c16.71 0 30.26 13.546 30.26 30.256v256.742c0 16.71-13.55 30.255-30.26 30.255z" fill="#6762A6"/><path d="M160.36 273.6V147.61s8.195-30.15-100.943 12.334c-.2.539-.2-116.504-.2-116.504l35.66-.22v74.991s99.846-39.325 99.846 29.824V273.6h-34.362zm20.32-184.994h-37.824c13.615-16.646 25.94-45.167 25.94-45.167h39.11s-6.696 18.587-27.225 45.167zM59.865 273.382v-71.748l35.878 35.877-35.878 35.871z" fill="#FFF"/></svg> */}
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