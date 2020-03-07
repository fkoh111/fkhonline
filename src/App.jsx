import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/index.css";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
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
      </div>
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            <div className="text">
              <About />
            </div>
          </Route>
          <Route path="/Vitae">
            <div className="text">
              <Vitae />
            </div>
          </Route>
          <Route path="/Contact">
            <div className="text">
              <Contact />
            </div>
          </Route>
        </div>
      </BrowserRouter>
      <div className="footer">
        <Social />
      </div>
    </React.Fragment>
  );
};

export default App;
