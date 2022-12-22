import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { detalleId } = useParams();
  const [data, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (detalleId) {
      const db = getFirestore();
      console.log(detalleId);
      const item = doc(db, "items", detalleId);
      getDoc(item).then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      });
      console.log(data);
    }
  }, [detalleId]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
