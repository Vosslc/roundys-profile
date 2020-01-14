import React from "react";
import "./ProjectCarouselPage.scss";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
// import RegSC from "./assets/SC.png";
// import SCHome from "./assets/SCHome.jpeg";
import SCProfile from "./assets/SCProfile.png";
// import mobileReg from "./assets/mobileReg.png";

const ProjectCarouselPage = () => {
  const font1 = {
    fontFamily: "Orbitron",
    fontSize: 45,
    color: "#2C333F"
    // fontWeight: 'bold'
  };
  const font2 = {
    fontFamily: "Orbitron",
    fontSize: 25,
    color: "#FF0000"
    // fontWeight: 'bold'
  };
  return (
    <div id="personal-dev-img">
      <h4
        className="project-title text-uppercase font-weight-bolder"
        style={font1}
      >
        Projects
      </h4>

      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          className="project-carousel"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1" className="item1">
              <MDBView>
                <div className="item1-img" alt="First slide"></div>

                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Social Coders</h3>
                <a
                  style={font2}
                  href="https://social-coders.com/#/Register"
                  target="_blank"
                >
                  https://social-coders.com/
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className="item2">
              <MDBView>
                {/* <img
                  className="item2-img"
                  src='none'
                  alt="Second slide"
                /> */}
                <div className="item2-img"></div>
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Home Feed</h3>

                <a
                  style={font2}
                  href="https://social-coders.com/"
                  target="_blank"
                >
                  https://social-coders.com/
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3" className="item3">
              <MDBView>
                <div className="item3-img" alt="Third slide"></div>

                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Profile Page</h3>
                <a
                  style={font2}
                  href="https://social-coders.com/"
                  target="_blank"
                >
                  https://social-coders.com/
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            {/* <MDBCarouselItem itemId="4" className='item4'>
              <MDBView>
                <img
                  className="mobile-reg-asset"
                  src={mobileReg}
                  alt="Fourth slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Mobile Responsive</h3>
                <a
                  style={font2}
                  href="https://social-coders.com/#/Register"
                  target="_blank"
                >
                  https://social-coders.com/
                </a>
              </MDBCarouselCaption>
            </MDBCarouselItem> */}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default ProjectCarouselPage;
