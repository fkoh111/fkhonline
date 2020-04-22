import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/style.css";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Nav from "./components/Nav";
import Wttr from "./components/Wttr";

import Home from "./pages/Home";
import About from "./pages/About";
import Vitae from "./pages/Vitae";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";

const App = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <h1>
          <Splash />
        </h1>
      </div>
      <div className="navStyle">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Vitae" component={Vitae} />
        <Route path="/Contact" component={Contact} />
        <Route path="/ContactForm" component={ContactForm} />
      </Switch>
      <div className="footer">
        <div id="container">
          <div id="right">
            <div className="widgetStyle">
              <Wttr />
            </div>
          </div>
          <div id="center">
            <Social />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
