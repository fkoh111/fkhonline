import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  counter() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.counter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.seconds <= 11.5) {
      return (
        <div>
          <span>> </span>
          <ReactTypingEffect
            className="typingeffect"
            text={["frederik kok hansen", "fkhonline.net"]}
            speed={100}
            eraseDelay={1300}
            cursor={"_"}
          />
        </div>
      );
    } else {
      return <div>> fkhonline.net_</div>;
    }
  }
}

export default Splash;
