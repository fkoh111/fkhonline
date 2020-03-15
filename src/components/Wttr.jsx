import React from "react";

export default class Wttr extends React.Component {
  state = {
    fetching: true,
    ip: null
  };

  async componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "http://wttr.in/Denmark?format=3&?m";
    const response = await fetch(proxy + url);
    const data = await response.text();
    this.setState({ ip: data, fetching: false });
  }

  render() {
    return (
      <div>
        {this.state.fetching || !this.state.ip ? (
          <div>fetching...</div>
        ) : (
          <div>{this.state.ip}</div>
        )}
      </div>
    );
  }
}
