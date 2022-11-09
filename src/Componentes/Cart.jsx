import React from "react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import '../Estilos/carrito.css'
import { CiTrash } from 'react-icons/ci'


function Cart() {

    const { cart, deleteAll, deleteOne } = useContext(CartContext)
    
    const filtroPrecio = cart.map((e) => {return e.precio*e.cantidad}) 
    const precioTotal = filtroPrecio.reduce((a,b) => {return a+b},0)
    
    console.log(cart.length)
    return(
        <div className="contenedor-entero">
            {cart.length ? (
                <>
                    <h1>Carrito de compras</h1><div className="indice-carrito">
                    <h2>Productos</h2>
                    <h2>Subtotal</h2>
                    </div><div className="contenedor-carrito">
                        {cart.map((prod) => (
                            <div className="map-carrito">
                                <div className="producto-carrito">
                                    <img src={prod.imagen} width='70px' alt={prod.nombre} />
                                    <p>{prod.nombre}</p>
                                    <p>
                                        X {prod.cantidad}
                                    </p>
                                    <CiTrash />
                                </div>
                                <div className="producto-carrito">
                                    $ {prod.cantidad * prod.precio}
                                </div>

                            </div>
                        ))}
                    </div><div className="precio-total">
                        <h2>Total</h2>
                        <h4>$ {precioTotal}</h4>
                    </div><div className="vaciar-carrito">
                        <button onClick={deleteAll}>Vaciar el carrito</button>
                    </div>
                </>
                ) 
                : 
                (
                    <h3 className="carrito-vacio">El carrito de compras está vacío.</h3>
                )}
        </div>
    );
};

export default Cart;