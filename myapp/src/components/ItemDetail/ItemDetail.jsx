import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";

const ItemDetail = ({ data }) => {
  const { addItem } = useCartContext();

  const onAdd = (count) => {
    addItem(data, count);
    alert(`Agregaste ${count} unidades`);
  };

  return (
    <>
      <div className="container">
        <div className="detalle">
          <img className="detalleImagen" src={data.picture} alt="" />
          <div className="detalleProducto">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="itemPrice">
              <h2>$ {data.price}</h2>
            </div>
            <div className="count-cont">
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
