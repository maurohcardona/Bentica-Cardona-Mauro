import React from "react";
import { useState } from "react";
import '../Estilos/form.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'

function Form() {

    const { cart, precioTotal } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')

    const cambionombre = (e) => setNombre(e.target.value);
    const cambioapellido = (e) => setApellido(e.target.value);
    const cambiotelefono = (e) => setTelefono(e.target.value);
    const cambioemail = (e) => setEmail(e.target.value);
    const cambiodireccion = (e) => setDireccion(e.target.value);
    

    return (
        <div className="contenedor-checkout">
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
            <form className="formulario" action="" onSubmit=''>
                <h3>Complete el formulario para finalizar la compra</h3>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={cambionombre}
                    value={nombre}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={cambioapellido}
                    value={apellido}
                />
                <input
                    type="number"
                    placeholder="Telefono"
                    name="telefono"
                    onChange={cambiotelefono}
                    value={telefono}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    onChange={cambioemail}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Direccion"
                    name="direccion"
                    onChange={cambiodireccion}
                    value={direccion}
                />
                <button className="boton-enviar">Enviar</button>
            </form>
        </div>
    );
}

export default Form;    
