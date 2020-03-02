import React from "react";
//import { BrowserRouter } from "react-router-dom";

import "./css/index.css";
import Splash from "./components/Splash";
import Social from "./components/Social";
//import Legend from "./components/Legend";

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
