import React from "react";
//import { useState } from "react";
import "../Estilos/form.css";

import CarritoFinal from "./CarritoFinal";
import Swal from "sweetalert2";

// function Form() {
//   const { getCarts } = useContext(CartContext);

//   const getCart = async () => {
//     try {
//       const res = await getCarts();
//       return res; // Esto ya es la respuesta de la promesa
//     } catch (error) {
//       console.error("Error al obtener el carrito:", error);
//       throw new Error("Error al obtener el carrito");
//     }
//   };

//   const cart = getCart(); // A

//   return (
//     <div className="contenedor-checkout">
//       <div className="contenedor-entero-co">
//         <CarritoFinal cart={cart} />
//       </div>

//     </div>
//   );
// }

// export default Form;

function Form() {
  return (
    <div className="contenedor-checkout">
      <div className="contenedor-entero-co"> {<CarritoFinal />}</div>
    </div>
  );
}

export default Form;
