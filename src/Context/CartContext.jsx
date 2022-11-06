import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ( {children} ) => {
    const [cart, setcart] = useState ([])

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            console.log('ya esta en el carrito')
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

    return (
        <CartContext.Provider value ={{ cart, addToCart, deleteAll }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;