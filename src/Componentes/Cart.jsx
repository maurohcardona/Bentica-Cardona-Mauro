import React from "react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'

function Cart() {

    const carrito = useContext(CartContext)
    console.log(carrito)
    return(
        <div>    
            <h1>Carrito</h1>
            <div>
                {carrito.cart.map((prod) => (
                    <div>
                        <p>{prod.nombre}</p>
                        <p>{prod.cantidad}</p>
                    </div>
                ))
                }
            </div>
            
        </div>
    );
};

export default Cart;