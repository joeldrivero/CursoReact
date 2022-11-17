import React from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div key={id} className="productCard">
      <img className="productCardImage" src={pictureUrl} alt="" />
      <h3 className="productCardTitle">{title}</h3>
      <span className="productCardPrice">${price}</span>
      <span>
        <button>
          <Link to={`/products/${id}`}>Ver detalle de producto</Link>
        </button>
      </span>
    </div>
  );
};

export default Item;
