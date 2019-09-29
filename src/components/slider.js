import React, { Component } from "react";
// import ReactDOM from "react-dom";
import banner1 from "../banner1.jpg";
import banner2 from "../banner2.jpg";
import banner3 from "../banner3.jpg";
import banner4 from "../banner4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Slider extends Component {
  render() {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
        <div>
          <img src={banner1} />
          <p className="legend">Text Comes Up Here</p>
        </div>
        <div>
          <img src={banner2} />
          <p className="legend">Text Comes Up Here</p>
        </div>
        <div>
          <img src={banner3} />
          <p className="legend">Text Comes Up Here</p>
        </div>
        <div>
          <img src={banner4} />
          <p className="legend">Text Comes Up Here</p>
        </div>
      </Carousel>
    );
  }
}
