import React from "react";
import Navigate from "./Navigate";

const Legend = () => {
  return (
    <ul>
      <Navigate item="About" tolink="/about"></Navigate>
      <Navigate item="Vitae" tolink="/vitae"></Navigate>
      <Navigate item="Contact" tolink="/contact"></Navigate>
    </ul>
  );
};

export default Legend;
