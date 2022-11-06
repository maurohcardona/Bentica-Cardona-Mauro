import React from "react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import '../Estilos/carrito.css'



function Cart() {

    const carrito = useContext(CartContext)
    
    const filtroPrecio = carrito.cart.map((e) => {return e.precio*e.cantidad}) 
    const precioTotal = filtroPrecio.reduce((a,b) => {return a+b},0)
    
    
    return(
        <div className="contenedor-entero">    
            <h1>Carrito de compras</h1>
            <div className="indice-carrito">
                <h2>Productos</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="contenedor-carrito">
                {carrito.cart.map((prod) => (
                    <div className="map-carrito">
                        <div className="producto-carrito">
                           <img src={prod.imagen} width='70px' alt={prod.nombre} />
                           <p>{prod.nombre}</p>
                           <p>
                            X {prod.cantidad}
                           </p> 
                        </div>
                        <div className="producto-carrito">
                            $ {prod.cantidad * prod.precio}
                        </div>

                    </div>
                ))
                }
            </div>  
            <div className="precio-total">
                <h2>Total</h2>
                <h4>$ {precioTotal}</h4>
            </div>
            <div className="vaciar-carrito">
            <button onClick={carrito.deleteAll}>Vaciar el carrito</button>
            </div>
        </div>
    );
};

export default Cart;