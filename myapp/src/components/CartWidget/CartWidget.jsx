import React from "react";
import { NavLink } from "react-router-dom";


import "../CartWidget/CartWidget.css";

function CartWidget() {
  return (
    <NavLink className="CartWidget" to="/Cart">
      <img
        className="icono"
        src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart--v1.png"
      ></img>

    </NavLink>
  );
}
export default CartWidget;
