import React from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (data) => {
  console.log("datos",data)
  data = data.data;

  return (
    <div key={data.id} className="productCard">
      <img className="productCardImage" src={data.picture} alt="" />
      <h3 className="productCardTitle">{data.title}</h3>
      <span className="productCardPrice">${data.price}</span>
      <span>
        <button>
          <Link to={`/products/${data.id}`}>Ver detalle de producto</Link>
        </button>
      </span>
    </div>
  );
};

export default Item;
