import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { productList } from "../../data/data.js";
import "./ItemList.css";

const ItemList = ({data = []}) => {

  return (
    <div className="product-list-container">
      {
        data.length ? ( 
          <>
            {           
              data.map((product) => {
                return (
                  <Item
                    key={product.id}
                    title={product.title}
                    pictureUrl={product.picture}
                    price={product.price}
                    id={product.id}
                  />
                );
              })
            }
          </>
        ) : (
          <p>Cargando...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;
