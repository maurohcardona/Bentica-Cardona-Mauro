import React from "react";
import "../Estilos/form.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

function CarritoFinal() {
  const { getCarts } = useContext(CartContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await getCarts();
        setCart(cartData);
        console.log("Cart data:", cartData);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchData();
  }, [getCarts]);
  console.log(cart);
  return (
    <div className="contenedor-entero-co">
      {cart.map((prod) => (
        <div className="map-carrito-co" key={prod._id}>
          <h3>{prod.createdAt}</h3>
          {prod.Cart.map((item) => (
            <div className="producto-carrito-co" key={item._id}>
              <p>X {item.quantity}</p>
              <img
                src={item.cart.Thumbnail}
                width="70px"
                alt={item.cart.Title}
              />
              <p>{item.cart.Title}</p>
              <p>${item.cart.Price * item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${prod.total}</h3>
        </div>
      ))}
    </div>
  );
}

export default CarritoFinal;
