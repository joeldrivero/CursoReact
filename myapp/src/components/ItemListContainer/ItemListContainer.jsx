import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ItemListContainer = ({ texto }) => {
  const { categoryId } = useParams();
  const [data, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (categoryId) {
      const db = getFirestore();
      console.log(categoryId);
      const q = query(
        collection(db, "items"),
        where("category", "==", categoryId)
      );
      getDocs(q).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [categoryId]);

  return (
    <>
      <div className="card-cont">
        <ItemList data={data} />
        
      </div>
    </>
  );
};

export default ItemListContainer;
