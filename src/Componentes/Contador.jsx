import { useState } from "react";
import "../Estilos/Contador.css";
import Swal from "sweetalert2";

function Contador({ stock, onAdd, initial = 1, producto }) {
  const [cantidad, setcantidad] = useState(initial);

  const agregar = () => {
    if (cantidad < stock) {
      setcantidad(cantidad + 1);
    }
  };

  const sacar = () => {
    if (cantidad > 1) {
      setcantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    onAdd(cantidad);
    Swal.fire({
      position: "center",
      grow: "true",
      icon: "success",
      color: "gray",
      heightAuto: "false",
      title: `Agregaste ${producto} al carrito de compras`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="contenedor-contador">
      <div className="contenedor-botones">
        <button onClick={sacar} disabled={cantidad === 1}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={agregar} disabled={cantidad === stock}>
          +
        </button>
      </div>
      <div>
        <button className="button" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Contador;
