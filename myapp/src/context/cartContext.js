import React, { useContext, useState, useEffect } from "react";


export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  function addItem(item, count) {

    console.log(item.id);
    console.log(count)

    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, count: product.count + count } : product
      }));
    } else {
      setCart([...cart,{...item,count}])
    }
  }

  function removeItem(itemId) {
    let cartTemporal = [...cart];

    for (var i in cartTemporal) {
      if (cartTemporal[i].id === itemId) {
        cartTemporal.splice(i, i + 1);
        break;
      }
    }

    setCart(cartTemporal);
  }

  function getFromCart(id) {
    return cart.find((obj) => obj.id === id);
  }

  function isInCart(itemId) {
    return itemId === undefined ? undefined : getFromCart(itemId) !== undefined;
  }

  function cartLenght() {
    let cantidad = 0;
    console.log("coso")
    cart.forEach((i) => {
      cantidad = cantidad + i.count;
    });
    return cantidad;
  }

  function getTotal() {
    let total = 0;
    cart.forEach((i) => {
      total = total + i.count * i.price;
    });
    return Number(total.toFixed(2));
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, cartLenght, cleanCart, getTotal, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
