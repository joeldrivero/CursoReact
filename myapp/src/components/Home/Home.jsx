import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title">
          <h1>Bar ESCABIADORES</h1>
        </div>
        <div className="main">
          <h2>Aplicacion Ecommerce para los pedidos del Bar</h2>
        </div>
        <button>
          <Link to="/all" className="btn btn-primary">
            Ver todos los productos
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
