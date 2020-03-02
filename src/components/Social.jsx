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
          <social className="fa fa-github fa-1x"></social>
        </a>
        <a
          href="https://www.linkedin.com/in/frederik-kok-hansen/"
          title="LinkedIn | Frederik Kok Hansen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social className="fa fa-linkedin fa-1x"></social>
        </a>
        <a
          href="mailto:frederik_kok@icloud.com"
          title="Mail | Frederik Kok Hansen"
          target="_parent"
        >
          <social className="fa fa-envelope fa-1x"></social>
        </a>
      </div>
    );
  }
}
export default Social;
