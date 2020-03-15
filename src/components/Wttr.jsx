import React from "react";

export default class Wttr extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      text: null
    };
  }

  async componentDidMount() {
    try {
      const proxy = "https://fkoh111cors.herokuapp.com/";
      const url = "http://wttr.in/Denmark?format=3&?m";
      const response = await fetch(proxy + url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.text();

      /**
       * Do some testing of the returned result. Has to contain Denmark...
       */

      this.setState({ text: result, fetching: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.fetching || !this.state.text ? (
          <div>...</div>
        ) : (
          <div>{this.state.text}</div>
        )}
      </div>
    );
  }
}
