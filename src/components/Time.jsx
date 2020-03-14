import React from "react";

export default class Time extends React.Component {
  state = {
    fetching: true,
    time: null
  };

  async componentDidMount() {
    const response = await fetch("http://worldtimeapi.org/api/ip");
    const result = await response.json();

    if (!result.unixtime) {
      console.log("Unixtime not returned");
    }

    this.setState({ fetching: false, time: result.unixtime });
  }

  render() {
    return (
      <div>
        {this.state.fetching || !this.state.time ? (
          <div>fetching...</div>
        ) : (
          <div> {this.state.time}</div>
        )}
      </div>
    );
  }
}
