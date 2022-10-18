import React from "react";
import '../Estilos/NavBar.css';


function NavBar () {
    return (
        <nav className= "contenedor-navbar">
            <ul className= "contenedor-ul">
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>    
        </nav>
    )
}

export default NavBar