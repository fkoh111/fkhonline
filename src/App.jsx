import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/index.css";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Legend from "./components/Legend";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vitae from "./pages/Vitae";

const App = () => {
  return (
    <React.Fragment>
      <div className="splash">
        <h1>
          <Splash />
        </h1>
        <BrowserRouter>
          <Legend />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Vitae">
            <Vitae />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </BrowserRouter>
      </div>
      <div className="center">
        <Social />
      </div>
    </React.Fragment>
  );
};

export default App;
