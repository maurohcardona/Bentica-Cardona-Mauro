import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

    const CartProvider = ( {children} ) => {
    const [cart, setcart] = useState ([])

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            
        }
        else {
            setcart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const deleteAll = () => {
        setcart([]);
    };

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setcart(prodFiltrados);
    };

    const cantidadTotal = cart.reduce((a,b) => {return a + b.cantidad},0)

    const precioTotal = cart.reduce((a,b) => {return a + b.precio*b.cantidad},0)

    return (
        <CartContext.Provider value ={{ cart, addToCart, deleteAll, deleteOne, cantidadTotal, precioTotal }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;