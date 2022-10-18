import React from "react";
import '../Estilos/Input.css'

function Input ({estilo, placeholder}) {
    return(
        <input className= {estilo} type="text" placeholder= {placeholder} />
    )
}

export default Input