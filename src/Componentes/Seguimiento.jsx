import { collection, getDoc, doc } from "firebase/firestore";
import React, { useState } from 'react';
import '../Estilos/Input.css'
import { db } from '../Services/firebaseConfig'



function Seguimiento () {

    const [orden, setorden] = useState('');
    const numeroOrden = (e) => setorden(e.target.value);
    const [detalle, setDetalle] = useState('');
    
    
 
    const ingresarNumero = (e) =>{
        e.preventDefault();
        const Ordenes = collection(db, 'Ordenes')
        const seg = doc(Ordenes, orden)

        getDoc(seg)
        .then((res) => {
            console.log(res.data())
            setDetalle(res.data())
            
            
            
        }
        )
    }
        if(detalle) {
            return(
                <div className= 'contenedor-seguimiento'>
                <h2>Seguimiento de su compra</h2>
                <div>
                    <form action="" onSubmit={ingresarNumero}>
                        <input
                            type="text"
                            placeholder= "Ingrese su numero de compra"
                            name="numeroOrden"
                            onChange={numeroOrden}
                            value={orden} />
                            <button className="boton-buscar">Buscar</button>
                        </form>
                </div>
                <div className="detalle">
                    <div>
                        <h3>Datos del comprador</h3>
                        <p>Nombre: {detalle.Comprador.Nombre}</p>
                        <p>Apellido: {detalle.Comprador.Apellido}</p>
                        <p>Direccion: {detalle.Comprador.Direccion}</p>
                        <p>Telefono: {detalle.Comprador.Telefono}</p>
                        <p>Email: {detalle.Comprador.Email}</p>
                    </div>
                    <div>
                        <h3>Productos comprados</h3>
                            {detalle.items.map((prod) =>(
                                <div>
                                    <p>{prod.nombre} x {prod.cantidad}</p>
                                    
                                    
                                </div>
                            ))}
                    </div>
                </div>
                <h4>Fecha de compra: {new Date (detalle.date.seconds*1000).toLocaleString()}</h4>
                <h3>Total a pagar $: {detalle.total}</h3>
            </div>
            
            )
        }
    
    
   
        return (
            <div className= 'contenedor-seguimiento'>
            <h2>Seguimiento de su compra</h2>
            <form action="" onSubmit={ingresarNumero}>
                <input
                    type="text"
                    placeholder= "Ingrese su numero de compra"
                    name="numeroOrden"
                    onChange={numeroOrden}
                    value={orden} />
                <button className="boton-buscar">Buscar</button>
            </form>
            </div>
        )
}

export default Seguimiento;