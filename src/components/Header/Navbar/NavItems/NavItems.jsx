import React from "react";
import { NavLink } from "react-router-dom";
import "./Navitem.css";

const NavItems = props => {
  return (
    <li>
      <NavLink exact={true} activeClassName="Selected" to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItems;
