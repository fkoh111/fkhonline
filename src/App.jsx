import React from "react";
import "./css/index.css";
import Splash from "./components/Splash";
import Social from "./components/Social";

const App = () => {
  return (
    <React.Fragment>
      <div className="splash">
        <h1>
          <Splash />
        </h1>
      </div>
      <div className="center">
        <Social />
      </div>
    </React.Fragment>
  );
};

export default App;
