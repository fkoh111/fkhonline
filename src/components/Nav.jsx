import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="navActive" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navActive" to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navActive" to="/Vitae">
          Vitae
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navActive" to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
export default Nav;
