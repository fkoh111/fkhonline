import React from "react";

/**
 * EXPERIMENTAL
 */

export default class Emojirator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      emoji: null,
    };
  }

  async componentDidMount() {
    try {
      const url =
        "https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png?v8";
      const response = await fetch(url);
      const result = await response.blob();
      const img = URL.createObjectURL(result);
      console.log(img);
      this.setState({ emoji: img, fetching: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.emoji}</div>
      </div>
    );
  }
}
