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

const App = () => {
  return (
    <React.Fragment>
      <div className="splash">
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
      </Switch>
      <div className="footer">
        <Social />
        <Wttr />
      </div>
    </React.Fragment>
  );
};

export default App;
