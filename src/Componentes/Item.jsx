import React from "react";
import "../Estilos/Cards.css";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="item">
      <img src={producto.Thumbnail} width="200px" alt={producto.Title} />
      <p className="item-p">{producto.Title}</p>
      <p className="item-p">
        <b>${producto.Price}</b>
      </p>
      <p className="item-p c">{producto.Category}</p>
      <div className="btn-detalle">
        <Link className="btn-comprar" to={`/detail/${producto.id}`}>
          <b>Comprar</b>
        </Link>
      </div>
    </div>
  );
}

export default Item;
