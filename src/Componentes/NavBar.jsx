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
                            <Link>Shampoo sólidos 
                                <ul className="subproductos">
                                    <Link>Para cabellos secos</Link>
                                    <Link>Para cabellos normales</Link>
                                    <Link>Para cabellos grasos</Link>
                                </ul>
                                <BiRightArrow />
                            </Link> 
                            <Link>Acondicionadores sólidos <BiRightArrow />
                            <ul className="subproductos">
                                    <Link>Para cabellos secos</Link>
                                    <Link>Para cabellos normales</Link>
                                    <Link>Para cabellos grasos</Link>
                                </ul>
                            </Link>
                            <Link>Aromaterapia <BiRightArrow />
                                <ul className="subproductos">
                                    <Link>Pillowsplash</Link>
                                </ul>
                            </Link>
                            <Link>Bálsamo labial</Link>
                            <Link>Combos</Link>
                            <Link>Jaboneras</Link>
                            <Link>Desodorante</Link>
                            <Link>2 en 1 : Shampoo/barba</Link>
                            <Link>Sanitizante</Link>
                        </ul>
                    </NavLink>
                <NavLink className='itemsNavbar' to='/contactos'>Contacto</NavLink>
            </ul>    
        </nav>
    )
}

export default NavBar