import React from "react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import '../Estilos/carrito.css'
import { IoMdTrash } from 'react-icons/io'
import { Link } from "react-router-dom";



function Cart() {

        
    const { cart, precioTotal, deleteAll, deleteOne } = useContext(CartContext)
    
    
    console.log(cart.length)
    return(
        <div className="contenedor-entero">
            {cart.length ? (
                <>
                    <h1>Carrito de compras</h1><div className="indice-carrito">
                    <h2>Productos</h2>
                    <h2>Subtotal</h2>
                    </div>
                    <div className="contenedor-carrito">
                        {cart.map((prod) => (
                            <div className="map-carrito">
                                <div className="producto-carrito">
                                    <img src={prod.imagen} width='70px' alt={prod.nombre} />
                                    <p>{prod.nombre}</p>
                                    <p>
                                        X {prod.cantidad}
                                    </p>
                                    <div className="delete-one">
                                        <IoMdTrash  size={25} color="black" onClick={() => deleteOne(prod.id)} /> 
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
                    </div><div className="vaciar-carrito">
                        <button onClick={deleteAll}>Vaciar el carrito</button>
                        <Link to='/checkout'>Iniciar compra</Link>
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