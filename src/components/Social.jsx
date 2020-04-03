import React, { Component } from "react";
class Social extends Component {
  render() {
    return (
      <div>
        <a
          href="https://github.com/fkoh111"
          title="Github | fkoh111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social fa fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/frederik-kok-hansen/"
          title="LinkedIn | Frederik Kok Hansen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social fa fa-linkedin fa-lg"></i>
        </a>
        <a
          href="mailto:frederik_kok@icloud.com"
          title="Mail | Frederik Kok Hansen"
          target="_parent"
        >
          <i className="social fa fa-paper-plane fa-lg"></i>
        </a>
      </div>
    );
  }
}
export default Social;
