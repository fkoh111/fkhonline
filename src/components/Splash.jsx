import React, { Component } from "react";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  counter() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.counter(), 1000);
  }

  render() {
    if (this.state.seconds <= 4) {
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
