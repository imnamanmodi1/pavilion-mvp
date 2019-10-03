import React, { Component } from "react";

export default class FixedBottomCta extends Component {
  state = {
    expertAdviceClicked: false
  };
  render() {
    return (
      <div class="mobile-bottom-bar">
        <a href="#" class="footer-link">
          <i class="fa fa-cog"></i> <span class="footer-text">Settings</span>
        </a>
        <a href="#" class="footer-link">
          <i class="fa fa-sign-out"></i>{" "}
          <span class="footer-text">Log out</span>
        </a>
      </div>
    );
  }
}
