import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Home from "./components/Home/Home";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import CartProvider from "./context/cartContext.js";
import "./styles/App.css";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productsFirebase = collection(db, "items");
    getDocs(productsFirebase).then((snapshot) => {
      const itemCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(itemCollection);
    });
  }, []);

  console.log("item", data);
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/products/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/all" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
