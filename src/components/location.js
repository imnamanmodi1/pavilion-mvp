import React, { Component } from "react";
import LocationMap from "../location-map.jpg";
import BeautifulHeading from "./beautiful-heading";

export default class Location extends Component {
  render() {
    return (
      <>
        <BeautifulHeading lightHeading="Location" darkHeading="Advantage" />
        <div className="columns location-data">
          <div className="column">
            <img src={LocationMap} />
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
      </>
    );
  }
}
