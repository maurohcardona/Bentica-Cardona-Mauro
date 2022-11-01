import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Estilos/NavBar.css';
import {BiRightArrow} from 'react-icons/bi'



function NavBar () {
    return (
        <nav className= "contenedor-navbar">
            <ul className= "contenedor-ul">
                <NavLink className='itemsNavbar' to='/Home'>Home</NavLink>
                <NavLink className='itemsNavbar' to='/productos'>Productos
                        <ul className="subproductos">
                            <Link className="link" to='/categoria/Shampoo sólidos'>Shampoo sólidos <BiRightArrow />
                                <ul className="subproductos">
                                    <Link to='/categoria/Para cabellos secos'>Para cabellos secos</Link>
                                    <Link to='/categoria/Para cabellos normales'>Para cabellos normales</Link>
                                    <Link to='/categoria/Para cabellos grasos'>Para cabellos grasos</Link>
                                </ul>
                            </Link> 
                            <Link to='/categoria/Acondicionador Sólido' >Acondicionadores sólidos <BiRightArrow />
                            <ul className="subproductos">
                                    <Link>Para cabellos secos</Link>
                                    <Link>Para cabellos normales</Link>
                                    <Link>Para cabellos grasos</Link>
                                </ul>
                            </Link>
                            <Link to='/categoria/aromaterapia'>Aromaterapia <BiRightArrow />
                                <ul className="subproductos">
                                    <Link>Pillowsplash</Link>
                                </ul>
                            </Link>
                            <Link to='/categoria/Bálsamo labial'>Bálsamo labial</Link>
                            <Link to='/categoria/Combos'>Combos</Link>
                            <Link to='/categoria/Jaboneras'>Jaboneras</Link>
                            <Link to='/categoria/desodorante'>Desodorante</Link>
                            <Link to='/categoria/2x1'>2 en 1 : Shampoo/barba</Link>
                            <Link to='/categoria/Sanitizante'>Sanitizante</Link>
                        </ul>
                    </NavLink>
                <NavLink className='itemsNavbar' to='/contactos'>Contacto</NavLink>
            </ul>    
        </nav>
    )
}

export default NavBar