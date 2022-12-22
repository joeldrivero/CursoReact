import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, cleanCart, cartLenght, getTotal, removeItem } =
    useCartContext();

  if (cartLenght() > 0) {
    return (
      <>
        <div className="container">
          {
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col">Artículo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <th scope="row" className="item">
                      {item.title}
                    </th>
                    <td>${item.price}</td>
                    <td>{item.count}</td>
                    <td>${item.count * item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>

        <div>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total: ${getTotal()}</h5>
                <p className="card-text">
                  Para finalizar haz click en el botón.
                </p>
                <button>
                  <Link
                    to="/Checkout"
                    className="btn btn-primary"
                    onClick={() => cleanCart()}
                  >
                    Finalizar Compra
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="container vacio">
            <p className="text">
              <strong>Carrito Vacio</strong>
            </p>
            <button>
              <Link to="/all" className="btn btn-primary">
                Volver a Comprar
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
