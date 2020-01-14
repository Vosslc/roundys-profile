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
                    <a href="#portfolio"> Portfolio </a>
                  </MDBNavItem>
                  </div>
                </MDBNavbarNav>
            
                <MDBNavbarNav right>
                <ul>
                    <div className="nav-link-container">
                      <li className="nav-links">
                        <a href="https://github.com/Vosslc">
                          <MDBIcon fab icon="github" size="lg" />
                        </a>
                      </li>
                      <li className="nav-links linkedin-btn">
                        <a href="">
                          <MDBIcon fab icon="linkedin" size="lg" />
                        </a>
                      </li>
                      <li className="nav-links tree-btn">
                        <a href="">
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

// export class NavBar extends Component {
//   state = {};

//   handleChange = (key, value) => {
//     this.setState({ [key]: value });
//   };

//   toggleCollapse = collapseID => () =>
//     this.setState(prevState => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : ""
//     }));

//   render() {
//     const overlay = (
//       <div
//         // id="sidenav-overlay"
//         // style={{ backgroundColor: "transparent" }}
//         onClick={this.toggleCollapse("navbarCollapse")}
//       />
//     );
//     return (
//       <div id="HeaderPage">
//         <div>
//           <MDBNavbar dark expand="md" fixed="top">
//             <MDBContainer>
//               <MDBNavbarBrand>
//                 <strong className="white-text">BrUtah</strong>
//               </MDBNavbarBrand>
//               <MDBNavbarToggler
//                 onClick={this.toggleCollapse("navbarCollapse")}
//               />
//               <MDBCollapse
//                 id="navbarCollapse"
//                 isOpen={this.state.collapseID}
//                 navbar
//               >
//                 <MDBNavbarNav left>
//                   <MDBNavItem>
//                     <MDBNavLink to="#about">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="/createpost">Create Post</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#!">Profile</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="/">LogOut</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//                 <MDBNavbarNav right>
//                   <MDBNavItem>
//                     <MDBFormInline waves>
//                       <div className="md-form my-0">
//                         <input
//                           className="form-control mr-sm-2"
//                           type="text"
//                           placeholder="Search"
//                           aria-label="Search"
//                         />
//                       </div>
//                     </MDBFormInline>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBContainer>
//           </MDBNavbar>
//           {this.state.collapseID && overlay}
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;
