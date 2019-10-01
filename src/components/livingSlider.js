import React, { Component } from "react";
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
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0008.jpg" />
          </div>
          <div>
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0009.jpg" />
          </div>
          <div>
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0010.jpg" />
          </div>
          <div>
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0011.jpg" />
          </div>
          <div>
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0012.jpg" />
          </div>
          <div>
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/10/IMG-20191001-WA0013.jpg" />
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
                <h4 className="bold">GLOBAL BENCHMARK PRODUCTS</h4>
                <p>
                  Panchshil Towers Kharadi is known for its quality product
                  which is best in the industry one of the finest structures in
                  India and gives excellent quality product Just next to world
                  trade centre.
                </p>
                <hr />
              </div>
              <div className="column">
                <h4 className="bold">THOUGHTFULLY DESIGNED SPACE</h4>
                <p>
                  Panchshil Provides best designed spaces which is interiored by
                  best in class designers.
                </p>
                <hr />
              </div>
              <div className="column">
                <h4 className="bold">BEST IN INDUSTRY CONSTRUCTION</h4>
                <p>
                  We at Panchshil towers kharadi provides you world class
                  construction material for your safety and security and to
                  innovate in the industry.
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
