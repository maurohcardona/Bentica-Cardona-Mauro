import React from 'react';
import '../Estilos/contacto.css'

function Contacto() {
    return ( 
        <div className='contacto-container'>
            <h2>CONTACTO</h2>
            <form className='form-contacto' action="">
                <input className='input-contacto'
                    type="text" 
                    name='nombre'
                    placeholder='Nombre'
                />
                <input className='input-contacto'
                    type="email" 
                    name='email'
                    placeholder='Email'
                />
                <input className='input-contacto'
                    type="text"
                    name='telefono'
                    placeholder='Telefono'

                />
                <textarea className='input-contacto'
                    placeholder='Mensaje'
                    name="mensaje" 
                    cols="30" 
                    rows="10">
                    
                </textarea>
            </form>
        </div>
     );
}

export default Contacto;