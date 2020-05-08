import React from "react";

/**
 * It's a hacked solution, I know!
 */

export default class Wttr extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      text: null,
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
       * We're overwriting state if the service returns something unknown, e.g.:
       * Unknown location; please try ~55.670249,10.3333283
       */
      this.setState({ text: result, fetching: false });

      if (result.includes("Unknown")) {
        this.setState({ text: "🙄", fetching: false });
      }
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
