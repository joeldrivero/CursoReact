import React from "react";
import { Link } from "react-router-dom";
import "../Checkout/Checkout.css";

const Checkout = () => {
  return (
    <>
      <div className="container">
        <p className="card-text">Gracias por su compra</p>
        <button>
          <Link to="/all" className="btn btn-primary">
            Volver a Comprar
          </Link>
        </button>
      </div>
    </>
  );
};

export default Checkout;
