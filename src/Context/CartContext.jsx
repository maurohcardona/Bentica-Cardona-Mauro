import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";
import { finalCart, checkOut, fetchCarritos } from "../Services/cart";

export const CartContext = createContext();

const localCart = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState(localCart);
  const { currentUser } = useContext(UserContext);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setcart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const deleteAll = () => {
    setcart([]);
  };

  const sumarCantidad = (itemPorAgregar, cantidad) => {
    const cartActualizado = cart.map((prodDelCarrito) => {
      if (itemPorAgregar.id === prodDelCarrito.id) {
        const productoActualizado = {
          ...prodDelCarrito,
          cantidad: cantidad,
        };
        return productoActualizado;
      } else {
        return prodDelCarrito;
      }
    });
    setcart(cartActualizado);
  };

  const cantidadDeProducto = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  const deleteOne = (id) => {
    const prodFiltrados = cart.filter((prod) => prod.id !== id);
    setcart(prodFiltrados);
  };

  const cantidadTotal = cart.reduce((a, b) => {
    return a + b.cantidad;
  }, 0);

  const precioTotal = cart.reduce((a, b) => {
    return a + b.precio * b.cantidad;
  }, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    // Actualiza la cantidad del producto en el carrito
    const updatedCart = cart.map((prod) =>
      prod.id === productId ? { ...prod, cantidad: newQuantity } : prod
    );

    // Actualiza el carrito con las nuevas cantidades
    // Esto dependerá de cómo tienes implementado tu setCart en CartContext
    setcart(updatedCart);
  };

  const finishCart = async () => {
    const newCart = finalCart(cart, currentUser.profile.id, precioTotal);
    await checkOut(newCart);
  };

  const getCarts = async () => {
    const carts = await fetchCarritos(currentUser.profile.id);
    //console.log(carts);
    return carts;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteAll,
        deleteOne,
        cantidadTotal,
        precioTotal,
        cantidadDeProducto,
        handleQuantityChange,
        finishCart,
        getCarts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
