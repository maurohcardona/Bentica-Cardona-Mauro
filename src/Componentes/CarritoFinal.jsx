import React from "react";
import '../Estilos/form.css'

function CarritoFinal({ cart, precioTotal }) {

    return(
            <div className="contenedor-entero-co">
                {cart.map((prod) => (
                    <div className="map-carrito-co">
                        <div className="producto-carrito-co">
                            <img src={prod.imagen} width='70px' alt={prod.nombre} />
                            <p>{prod.nombre}</p>
                            <p>X {prod.cantidad}</p>
                            <p>$ {prod.cantidad * prod.precio}</p>
                        </div>
                </div>
                ))}
                <div className="precio-total-co">
                    <h2>Total</h2>
                    <h4>$ {precioTotal}</h4>
                </div>
            </div>
    );
}

export default CarritoFinal;


    