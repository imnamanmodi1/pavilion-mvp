import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Slider extends Component {
  render() {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
        <div>
          <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/banner1.jpg" />
        </div>
        <div>
          <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/banner2.jpg" />
        </div>
        <div>
          <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/banner3.jpg" />
        </div>
        <div>
          <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/banner4.jpg" />
        </div>
      </Carousel>
    );
  }
}
