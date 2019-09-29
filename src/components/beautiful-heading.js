import React, { Component } from "react";

export default class BeautifulHeading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-heading">
        <h3 className="beautiful-heading-transparent">
          {this.props.lightHeading}
        </h3>
        <h3 className="beautiful-heading-dark">{this.props.darkHeading}</h3>
        <hr />
      </div>
    );
  }
}
