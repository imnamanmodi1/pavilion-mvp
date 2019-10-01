import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";

export default class Welcome extends Component {
  state = {
    readMoreActive: false,
    description:
      "Panchshil towers is Spread in more than 14 sections of land, Panchshil Towers contains 9 contemporary towers with world-class enhancements including Technology,commitment,Product finshing  includes far reaching clubhouse and a pool. The living arrangements offer shocking perspectives on Pune's urbanscape, while practically 60% of the open region is wonderfully finished. In Kharadi it is one of the Creative and maximum utilization of space with development  and innovation, support. Key part of panchshil towers kharadi is "
  };

  handleClick = () => {
    this.setState({
      readMoreActive: true,
      description:
        "Panchshil towers is Spread in more than 14 sections of land, Panchshil Towers contains 9 contemporary towers with world-class enhancements including Technology,commitment,Product finshing  includes far reaching clubhouse and a pool. The living arrangements offer shocking perspectives on Pune's urbanscape, while practically 60% of the open region is wonderfully finished. In Kharadi it is one of the Creative and maximum utilization of space with development  and innovation, support. Key part of panchshil towers kharadi is innovation accomplices a contemporary glass and ACP façade which makes Panchshil Towers a genuine milestone of extravagance living in Pune. Advancement Size : 3,300,000 sq. ft. or then again 306,580 sq. m. RERA No. P52100002528"
    });
  };

  render() {
    return (
      <div id="welcome-navigator">
        <BeautifulHeading
          lightHeading="Welcome"
          darkHeading="Panchshil Towers"
        />
        <p className="welcome-description">{this.state.description}</p>
        {this.state.readMoreActive == true ? (
          ""
        ) : (
          <a
            class="button is-warning read-more-hover"
            onClick={this.handleClick}
          >
            Read More
          </a>
        )}
      </div>
    );
  }
}
