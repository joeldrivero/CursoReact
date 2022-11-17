import React, {useEffect, useState} from "react";  
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { productList } from "../../data/data.js";



const ItemListContainer = ({ texto }) => {



  //OBTENGO SET DE DATOS DE MI PRODUCTLIST
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productList);
      }, 1000);
    });                                         

    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((prod) => prod.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <div className="card-cont">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
