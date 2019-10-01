import React from "react";
import BeautifulHeading from "./beautiful-heading";

export default function Icons() {
  return (
    <>
      <div id="amenities-navigator" className="icon-section">
        <BeautifulHeading lightHeading="Awesome" darkHeading="Amenities" />
        <div class="columns">
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-dumbbell"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">GYM SERVICES</h4>
                <p className="icon-section-para">
                  We at Panchshil Towers provide luxurious gym facilities for
                  healthy lifestyle
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-swimming-pool"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">SWIMMING POOL</h4>
                <p className="icon-section-para">
                  Panchshil Towers has greatest Technology with swimming pool in
                  vicinity.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-spray-can"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">SPA SERVICES</h4>
                <p className="icon-section-para">
                  Kharadi has new relaxing commitment and the preferred location
                  is Panchshil Towers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-section">
        <div class="columns">
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-tractor"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">ORGANIC FARMING</h4>
                <p className="icon-section-para">
                  Panchshil towers has excellence in latest trending technology
                  and it's one of them
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-user-shield"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">HI-TECH SECURITY</h4>
                <p className="icon-section-para">
                  Discover new commitment of Technology with excellence only at
                  Panchshil Towers
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div className="first-icon">
                <span class="icon has-text-info is-large">
                  <i class="fas fa-2x fa-plug"></i>
                </span>
              </div>
              <div className="icon-description">
                <h4 className="bold">24x7 POWER BACKUP</h4>
                <p className="icon-section-para">
                  World class services at Panchshil keeps you away from darkness
                  always
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
