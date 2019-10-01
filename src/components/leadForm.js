import React, { Component } from "react";

export default class LeadForm extends Component {
  state = {
    leadFormActive: false
  };

  handleClick = () => {
    if (this.state.leadFormActive === false) {
      this.setState({ leadFormActive: true });
    }
    if (this.state.leadFormActive === true) {
      this.setState({ leadFormActive: false });
    }
  };
  render() {
    return (
      <div>
        <div id="mybutton">
          {this.state.leadFormActive == false ? (
            <button onClick={this.handleClick} class="feedback">
              Enquire Now
            </button>
          ) : (
            <>
              <div className="column main-lead">
                <a onClick={this.handleClick} class="delete"></a>
                <span id="close"></span>

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
            </>
          )}
        </div>
      </div>
    );
  }
}
