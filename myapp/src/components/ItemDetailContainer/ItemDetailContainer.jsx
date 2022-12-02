import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const getProduct = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
  };

  const { detalleId } = useParams();
  const [data, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (detalleId) {
      const db = getFirestore();
      console.log(detalleId);
      const q = query(collection(db, "items"), where("id", "==", 1));
      getDocs(q).then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      });
    }
    console(data);
  }, [detalleId]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
