import React from "react";
import imagen from '../Imagenes/inicio.bentica.png'
import '../Estilos/inicio.css'

function Inicio () {
    return(
        <img className="imagen-inicio" src={imagen} alt="Imagen de Inicio" />
    )
}

export default Inicio