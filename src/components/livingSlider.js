import React, { Component } from "react";
import banner1 from "../livingBanner1.jpg";
import banner2 from "../livingBanner2.jpg";
import banner3 from "../livingBanner3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BeautifulHeading from "./beautiful-heading";

const Slider = () => {
  return (
    <>
      <div className="secondary-carousel">
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          <div>
            <img src={banner1} />
            <p className="legend-main">Text Comes Up Here</p>
          </div>
          <div>
            <img src={banner2} />
            <p className="legend-main">Text Comes Up Here</p>
          </div>
          <div>
            <img src={banner3} />
            <p className="legend-main">Text Comes Up Here</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default class LivingSlider extends Component {
  render() {
    return (
      <div className="living-slider">
        <BeautifulHeading lightHeading="Luxury" darkHeading="Living" />
        <div className="columns living-slider">
          <div className="column">
            <Slider />
          </div>
          <div className="column">
            <div className="columns is-row">
              <div className="column">
                <h4 className="bold">KITCHEN AREA</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
              </div>
              <div className="column">
                <h4 className="bold">LIVING ROOM</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
              </div>
              <div className="column">
                <h4 className="bold">MASTER BEDROOM</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
