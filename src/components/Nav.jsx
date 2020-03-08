import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/About">
        <li>About</li>
      </Link>
      <Link to="/Vitae">
        <li>Vitae</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
}
export default Nav;
