import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../Estilos/carrito.css";
import { IoMdTrash } from "react-icons/io";

function Cart() {
  const {
    cart,
    precioTotal,
    deleteAll,
    deleteOne,
    handleQuantityChange,
    finishCart,
    mercadoPago,
    error,
  } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="contenedor-entero">
      {cart.length ? (
        <>
          <h1>Carrito de compras</h1>
          <div className="indice-carrito">
            <h2>Productos</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="contenedor-carrito">
            {cart.map((prod) => (
              <div className="map-carrito" key={prod.id}>
                <div className="producto-carrito">
                  <img src={prod.imagen} width="70px" alt={prod.nombre} />
                  <p>{prod.nombre}</p>
                  {/* <p>X {prod.cantidad}</p> */}
                  <input
                    type="number"
                    value={prod.cantidad}
                    onChange={(e) =>
                      handleQuantityChange(
                        prod.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                  <div className="delete-one">
                    <IoMdTrash
                      size={25}
                      color="black"
                      onClick={() => deleteOne(prod.id)}
                    />
                  </div>
                </div>
                <div className="producto-carrito">
                  $ {prod.cantidad * prod.precio}
                </div>
              </div>
            ))}
          </div>
          <div className="precio-total">
            <h2>Total</h2>
            <h4>$ {precioTotal}</h4>
          </div>
          <div className="vaciar-carrito">
            <button className="button" onClick={deleteAll}>
              Vaciar el carrito
            </button>
            <button onClick={mercadoPago}>Iniciar compra</button>
          </div>
          {error && (
            <h3>
              {error.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </h3>
          )}
        </>
      ) : (
        <h3 className="carrito-vacio">El carrito de compras está vacío.</h3>
      )}
    </div>
  );
}

export default Cart;
