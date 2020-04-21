import React, { Component } from "react";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { twistedHeader: false };
  }

  twist() {
    this.setState((state) => ({
      twistedHeader: Boolean(Math.random() >= 0.5),
    }));
  }

  componentDidMount() {
    this.twist();
  }

  render() {
    if (this.state.twistedHeader === true) {
      return (
        <div>
          <h1>FKHONLINƎ</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>FKHONLINE</h1>
        </div>
      );
    }
  }
}

export default Splash;
