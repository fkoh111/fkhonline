import React from "react";

export default class Wttr extends React.Component {
  state = {
    loading: true,
    ip: null
  };

  async componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "http://wttr.in/Denmark?format=3";
    const response = await fetch(proxy + url);
    const data = await response.text();
    this.setState({ ip: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.ip ? (
          <div>loading...</div>
        ) : (
          <div>{this.state.ip}</div>
        )}
      </div>
    );
  }
}
