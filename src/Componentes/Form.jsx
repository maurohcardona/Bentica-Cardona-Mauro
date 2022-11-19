import React from "react";
import { useState } from "react";
import '../Estilos/form.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';
import CarritoFinal from "./CarritoFinal";

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
    const [orderId, setOrderId] = useState('');


    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log({ name, lastName });
        const objOrden = {
            Comprador: {
                Nombre: nombre,
                Apellido: apellido,
                Telefono: telefono,
                Email: email,
                Direccion: direccion,
            },
            items: cart,
            //cart -> [id, title,stock,price,img,etc]
            //cartReducido -> [id,title,price]
            total: precioTotal,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'Ordenes');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
        }

        if (orderId) {
            return (
                <div>
                    <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
                    <div>
                        <div className="contenedor-orden">
                            <CarritoFinal cart={cart} precioTotal={precioTotal} />
                            <div> 
                                <h2>Datos del comprador</h2>
                                <p>Nombre: {nombre}</p>
                                <p>Apellido: {apellido}</p>
                                <p>Telefono: {telefono}</p>
                                <p>Email: {email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

    return (
         <div className="contenedor-checkout">
            <div className="contenedor-entero-co">
        <CarritoFinal cart={cart} precioTotal={precioTotal} />
             </div>
            <form className="formulario" action="" onSubmit={enviarDatos}>
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
