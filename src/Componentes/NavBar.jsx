import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Estilos/NavBar.css';
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { updateCurrentUser } from "firebase/auth";




function NavBar () {

    const { currentState } = useContext(UserContext)

    useEffect(()=>{
        
        console.log('holasss')
    },[]);


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
                {!currentState? <NavLink className='itemsNavbar' to='/seguimiento'>Seguimiento</NavLink>:<p>holas</p>}
                <NavLink className='itemsNavbar' to='/contacto'>Contacto</NavLink>
            </ul>    
        </nav>
    )
}

export default NavBar