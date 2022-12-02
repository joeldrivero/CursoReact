import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ data = [] }) => {
  return (
    <div className="product-list-container">
      {data.length ? (
        <>
          {data.map((product) => {
            return <Item key={product.id} data={product} />;
          })}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemList;
