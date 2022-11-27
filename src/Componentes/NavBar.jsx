import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Estilos/NavBar.css';




function NavBar () {
    return (
        <nav className= "contenedor-navbar">
            <ul className= "contenedor-ul">
                <NavLink className='itemsNavbar' to='/' end >Home</NavLink>
                <NavLink className='itemsNavbar' to='/productos'>Productos
                        <ul className="subproductos">
                            <Link className="link" to='/categoria/Shampoo sólidos'>Shampoo sólidos </Link> 
                            <Link to='/categoria/Acondicionador Sólido' >Acondicionadores sólidos </Link>
                            <Link to='/categoria/aromaterapia'>Aromaterapia </Link>
                            <Link to='/categoria/Bálsamo labial'>Bálsamo labial</Link>
                            <Link to='/categoria/Combos'>Combos</Link>
                            <Link to='/categoria/Jaboneras'>Jaboneras</Link>
                            <Link to='/categoria/Desodorante'>Desodorante</Link>
                            <Link to='/categoria/2x1'>2 en 1 : Shampoo/barba</Link>
                            <Link to='/categoria/Sanitizante'>Sanitizante</Link>
                        </ul>
                    </NavLink>
                <NavLink className='itemsNavbar' to='/seguimiento'>Seguimiento</NavLink>
            </ul>    
        </nav>
    )
}

export default NavBar