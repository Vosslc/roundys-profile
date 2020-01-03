import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./Header.css";


export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="headerImg">
          <MDBContainer></MDBContainer>
        </div>
      </div>
    );
  }
}
