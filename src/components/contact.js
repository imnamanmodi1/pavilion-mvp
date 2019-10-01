import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-navigator">
        <BeautifulHeading
          lightHeading="Contact"
          darkHeading="Leave Your Details"
        />
        <div className="columns contact-form-main">
          <div className="column">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  name="name"
                  type="name"
                  placeholder="Name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right"></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right"></span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  name="mobile"
                  class="input"
                  type="mobile"
                  placeholder="Mobile"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-mobile"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-text-centered">
                <button class="button is-warning">Submit</button>
              </p>
            </div>
          </div>
          <div className="column secondary-contact-section">
            <div class="card">
              <h4 class="connect-heading">Connect Now</h4>
              <br />
              <p>
                <b>Call Us:</b> <a href="tel:917276038387">+91-7276038387</a>
                <br />
                <br />
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
