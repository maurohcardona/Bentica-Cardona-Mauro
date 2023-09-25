import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Estilos/NavBar.css";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

function NavBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="contenedor-navbar">
      <ul className="contenedor-ul">
        <li className="itemsNavbar">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {currentUser && (
          <li className="itemsNavbar">
            <NavLink to="/productos">Productos</NavLink>
            <ul className="subproductos">
              <li className="link">
                <Link to="/categoria/Shampoo sólidos">Shampoo sólidos</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Acondicionador Sólido">
                  Acondicionadores sólidos
                </Link>
              </li>
              <li className="link">
                <Link to="/categoria/aromaterapia">Aromaterapia</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Bálsamo labial">Bálsamo labial</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Combos">Combos</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Jaboneras">Jaboneras</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Desodorante">Desodorante</Link>
              </li>
              <li className="link">
                <Link to="/categoria/2x1">2 en 1: Shampoo/barba</Link>
              </li>
              <li className="link">
                <Link to="/categoria/Sanitizante">Sanitizante</Link>
              </li>
            </ul>
          </li>
        )}
        {currentUser && (
          <li className="itemsNavbar">
            <NavLink to="/checkout">Seguimiento</NavLink>
          </li>
        )}
        <li className="itemsNavbar">
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li className="itemsNavbar">
          <NavLink to="/perfil">Perfil</NavLink>
        </li>
      </ul>
    </nav>
  );
}
//     return (
//         <nav className= "contenedor-navbar">
//             <ul className= "contenedor-ul">
//                 <NavLink className='itemsNavbar' to='/' end >Home</NavLink>
//                 <NavLink className='itemsNavbar' to='/productos'>Productos
//                         <ul className="subproductos">
//                             <Link className="link" to='/categoria/Shampoo sólidos'>Shampoo sólidos </Link>
//                             <Link to='/categoria/Acondicionador Sólido' >Acondicionadores sólidos </Link>
//                             <Link to='/categoria/aromaterapia'>Aromaterapia </Link>
//                             <Link to='/categoria/Bálsamo labial'>Bálsamo labial</Link>
//                             <Link to='/categoria/Combos'>Combos</Link>
//                             <Link to='/categoria/Jaboneras'>Jaboneras</Link>
//                             <Link to='/categoria/Desodorante'>Desodorante</Link>
//                             <Link to='/categoria/2x1'>2 en 1 : Shampoo/barba</Link>
//                             <Link to='/categoria/Sanitizante'>Sanitizante</Link>
//                         </ul>
//                     </NavLink>
//                     {currentUser? <NavLink className='itemsNavbar' to='/seguimiento'>Seguimiento</NavLink>:<p></p>}
//                 <NavLink className='itemsNavbar' to='/contacto'>Contacto</NavLink>
//             </ul>
//         </nav>
//     )
// }

export default NavBar;
