import React, { Component } from "react";
class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/fkoh111"
          title="Github | fkoh111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social className="fa fa-github-square fa-2x"></social>
        </a>
        <a
          href="https://www.linkedin.com/in/frederik-kok-hansen/"
          title="LinkedIn | Frederik Kok Hansen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social className="fa fa-linkedin-square fa-2x"></social>
        </a>
        <a
          href="mailto:frederik_kok@icloud.com"
          title="Mail | Frederik Kok Hansen"
          target="_parent"
        >
          <social className="fa fa-envelope-square fa-2x"></social>
        </a>
      </div>
    );
  }
}
export default Social;
