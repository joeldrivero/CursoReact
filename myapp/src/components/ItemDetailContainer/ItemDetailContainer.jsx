import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productList } from "../../data/data.js";


const ItemDetailContainer = ()=>{
  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(()=>{
      const getData = new Promise (resolve =>{
          setTimeout(() => {
              resolve(productList)
          }, 1000);
      });
      getData.then(res =>setData(res.find(prod => prod.id === parseInt(detalleId))));


  }, [detalleId])

  return(
      <>
      <ItemDetail data = {data}/>
      </>
  );
}

export default ItemDetailContainer;