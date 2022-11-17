import { Component } from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <div className="brand"></div>
      <ul className="nav-menu">
        <li>
          {" "}
          <NavLink className="nav-links" to="/">
            Home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="nav-links" to="/categoria/bebidas">
            Bebidas
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="nav-links" to="/categoria/comidas">
            Comidas
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="nav-links" to="/all">
            Todos los productos
          </NavLink>{" "}
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
