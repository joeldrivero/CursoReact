import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const onAdd =(quantity)=>{
    alert(`Compraste ${quantity} unidades`)}
  return (
    <>
      <div className="container">
        <div className="detail">
          <img className="detail__img" src={data.pictureUrl} alt="" />
          <div className="content">
            <h1>{data.title}</h1>
            <p>{data.descripcion}</p>
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
