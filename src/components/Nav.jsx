import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/About">
        <li>About</li>
      </NavLink>
      <NavLink to="/Vitae">
        <li>Vitae</li>
      </NavLink>
      <NavLink to="/Contact">
        <li>Contact</li>
      </NavLink>
    </ul>
  );
};
export default Nav;
