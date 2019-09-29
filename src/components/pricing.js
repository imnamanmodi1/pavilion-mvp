import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";
import priceList from "../price-list.png";

export default class Pricing extends Component {
  render() {
    return (
      <>
        <div>
          <div className="pricing-heading">
            <BeautifulHeading lightHeading="Price" darkHeading="Detail" />
          </div>
          <div className="columns">
            <div className="column">
              <img src={priceList} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
