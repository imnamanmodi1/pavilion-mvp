import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    clickedReadMore: false
  };

  handleClick = () => {
    if (this.state.clickedReadMore === true) {
      this.setState({ clickedReadMore: false });
    }
    if (this.state.clickedReadMore === false) {
      this.setState({ clickedReadMore: true });
    }
  };
  render() {
    return (
      <footer class="footer footer-section">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <div className="copyright">
                All Rights Reserved - Copyright © 2019
              </div>
              {this.state.clickedReadMore === false ? (
                <div onClick={this.handleClick} className="bold pointer">
                  Read More
                </div>
              ) : (
                <div className="disclaimer">
                  Disclaimer and Privacy Policy : This website is meant only for
                  information purposes. It should not be considered/ claimed as
                  an official site of Panchshil
                </div>
              )}
              <div className="rera-id bold">RERA ID: A52100019479</div>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
