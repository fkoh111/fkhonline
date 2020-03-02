import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigate extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.tolink}>{this.props.item}</Link>
      </li>
    );
  }
}
export default Navigate;
