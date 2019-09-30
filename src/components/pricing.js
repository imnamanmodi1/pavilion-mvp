import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";

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
              <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/price-list.png" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
