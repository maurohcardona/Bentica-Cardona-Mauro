import React from 'react';
import { useState } from 'react';
import '../Estilos/contacto.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';
import Swal from 'sweetalert2'

function Contacto() {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')

    const cambionombre = (e) => setNombre(e.target.value);
    const cambioemail = (e) => setEmail(e.target.value);
    const cambiotelefono = (e) => setTelefono(e.target.value);
    const cambiomensaje = (e) => setMensaje(e.target.value);

    const orderconsultas = collection(db, 'Consultas');

    const enviarDatos = (e) => {
        e.preventDefault();
        const objConsulta = {
            Consulta: {
                Nombre: nombre,
                Telefono: telefono,
                Email: email,
                Mensaje: mensaje,
                date: serverTimestamp(),
            }
        }
        

        addDoc(orderconsultas, objConsulta)
        setEmail('')
        setNombre('')
        setTelefono('')
        setMensaje('')
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Mensaje enviado, Muchas gracias.',
            showConfirmButton: false,
            timer: 2200
          })
    }       

    

    return ( 
        <div className='contacto-container'>
            <p className='h1-contacto'>CONTACTO</p>
            <form className='form-contacto' action="" onSubmit={enviarDatos}>
                <input className='input-contacto'
                    type="text" 
                    name='nombre'
                    placeholder='Nombre'
                    onChange={cambionombre}
                    value={nombre}
                />
                <input className='input-contacto'
                    type="email" 
                    name='email'
                    placeholder='Email'
                    onChange={cambioemail}
                    value={email}
                />
                <input className='input-contacto'
                    type="text"
                    name='telefono'
                    placeholder='Telefono'
                    onChange={cambiotelefono}
                    value={telefono}
                />
                <textarea className='input-contacto'
                    placeholder='Mensaje'
                    name="mensaje" 
                    onChange={cambiomensaje}
                    value={mensaje}
                    cols="30" 
                    rows="10">
                </textarea>
                <input type='submit' className="button-contacto" value='Enviar'/>
            </form>
        </div>
     );
}

export default Contacto;