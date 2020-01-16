import React, { Component } from "react";
import "./NavBar.scss";
import {
  MDBNavbar,
  // MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  // MDBNavLink,
  MDBIcon
  // MDBContainer,
  // MDBFormInline
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import code from "../assets/code.png";
import code from "../assets/nr1.png";
import { animateScroll as scroll } from "react-scroll";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  /**
   *
   *
   * @returns
   * @memberof NavBar
   */
  render() {
    const black = { backgroundColor: "#2D3340" };
    const logo = {
      width: 50
    };
    const navFont = {
      fontFamily: "Orbitron",
      fontSize: 15
    };
    return (
      <div className="nav-bar-container">
        <Router>
          <header>
            <MDBNavbar style={black} dark expand="md" scrolling fixed="top">
              {/* <MDBNavbarBrand href="/"> */}
              {/* <strong style={roundy}>Roundy</strong> */}
              <a href="#about" onClick={() => this.scrollToTop(500)}>
                <img style={logo} src={code} alt="code logo" />
              </a>
              {/* </MDBNavbarBrand> */}
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav style={navFont} left>
                  <div className="nav-links-font">
                    <MDBNavItem className="about-nav-btn">
                      <a href="#about"> About </a>
                    </MDBNavItem>

                    <MDBNavItem className="skills-nav-btn">
                      {/* <MDBNavLink to="#">Skills</MDBNavLink> */}
                      <a href="#skills"> Skills </a>
                    </MDBNavItem>
                    <MDBNavItem className="portfolio-nav-btn">
                      {/* <MDBNavLink to="#">Portfolio</MDBNavLink> */}
                      <a href="#personal-dev-img"> Portfolio </a>
                    </MDBNavItem>
                  </div>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                  <ul>
                    <div className="nav-link-container">
                      <li className="nav-links">
                        <a href="https://github.com/Vosslc" target="_blank">
                          <MDBIcon fab icon="github" size="lg" />
                        </a>
                      </li>
                      <li className="nav-links linkedin-btn">
                        <a
                          href="https://www.linkedin.com/in/nate-roundy/"
                          target="_blank"
                        >
                          <MDBIcon fab icon="linkedin" size="lg" />
                        </a>
                      </li>
                      <li className="nav-links tree-btn">
                        <a
                          href="https://teamtreehouse.com/roundy"
                          target="_blank"
                        >
                          <MDBIcon icon="tree" size="lg" />
                        </a>
                      </li>
                    </div>
                  </ul>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;