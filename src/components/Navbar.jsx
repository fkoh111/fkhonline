import React from "react";
import Navigate from "./Navigate";

const Navbar = () => {
  return (
    <ul>
      <h4>
        <Navigate item="Home" tolink="/home"></Navigate>
        <Navigate item="About" tolink="/about"></Navigate>
        <Navigate item="Vitae" tolink="/vitae"></Navigate>
        <Navigate item="Contact" tolink="/contact"></Navigate>
      </h4>
    </ul>
  );
};

export default Navbar;
