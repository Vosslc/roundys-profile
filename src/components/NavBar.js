import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import treeHouse from "../assets"
// import AnchorLink from "react-anchor-link-smooth-scroll";
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
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

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
      <div>
        <Router>
          <header>
            <MDBNavbar style={black} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                {/* <strong style={roundy}>Roundy</strong> */}
                <img style={logo} src={code} alt="code logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav style={navFont} left>
                  {/* <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem>
                    {/* <AnchorLink
                      // offset="100"
                      href="#about"
                      // style={{ color: "white" }}
                      // className="pl-3"
                    > */}
                    <a href="#about" onClick={() => scroll.scrollMore(500)}>
                      <MDBNavLink
                        activeClass="active"
                        className="#about"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {" "}
                        About{" "}
                      </MDBNavLink>
                    </a>
                    {/* </AnchorLink> */}
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Skills</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Portfolio</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon fab icon="github" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon icon="tree" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon fab icon="linkedin" />
                    </MDBNavLink>
                  </MDBNavItem>
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
