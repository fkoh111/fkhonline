import React from "react";
import "./css/index.css";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <React.Fragment>
      <div className="splash">
        <h1>
          <Splash />
        </h1>
      </div>
      <div>
        <Navigation />
      </div>
      <div className="center">
        <Social />
      </div>
    </React.Fragment>
  );
};

export default App;
