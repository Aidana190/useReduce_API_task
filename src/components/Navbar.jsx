import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/details"}>DETAILS</NavLink>
    </div>
  );
};

export default Navbar;
