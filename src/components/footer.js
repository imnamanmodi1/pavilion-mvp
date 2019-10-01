import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer footer-section">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <div className="copyright">
                All Rights Reserved - Copyright © 2019
              </div>
              <div className="disclaimer">
                Disclaimer and Privacy Policy : This website is meant only for
                information purposes. It should not be considered/ claimed as an
                official site of Panchshil
              </div>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
