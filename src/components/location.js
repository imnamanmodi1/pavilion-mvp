import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";

export default class Location extends Component {
  render() {
    return (
      <div id="location-navigator">
        <BeautifulHeading lightHeading="Location" darkHeading="Advantage" />
        <div className="columns location-data">
          <div className="column">
            <img src="https://cdn.digitaliz.in/wp-content/uploads/2019/09/location-map.jpg" />
          </div>
          <div className="column">
            <div class="list is-hoverable">
              <a class="list-item">Pune Airport - 10 KM</a>
              <a class="list-item">Bishop's Co-ed School - 09 KM</a>
              <a class="list-item">Phoenix Market City - 08 KM</a>
              <a class="list-item">Business Bay - 10 KM</a>
              <a class="list-item">Columbia Asia Hospital - 07 KM</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
