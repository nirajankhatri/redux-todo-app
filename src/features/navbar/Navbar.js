import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/components/_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="linkContainer">
        <NavLink to="/">Todo List</NavLink>
      </div>
      <div className="linkContainer">
        <NavLink to="/todolog">Todo Log</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
