import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Estilos/NavBar.css";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  const { currentUser, desloguearse } = useContext(UserContext);

  return (
    <nav className="contenedor-navbar">
      <div>
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
            <>
              <li className="itemsNavbar">
                <NavLink to="/checkout">Seguimiento</NavLink>
              </li>
              <li className="itemsNavbar">
                <NavLink to="/perfil">Perfil</NavLink>
              </li>
              <li className="itemsNavbar">
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </>
          )}
          <li className="itemsNavbar">
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>
      <div>
        {currentUser ? (
          <div>
            <span className="itemsNavbar">
              {currentUser.profile.email}{" "}
              {<span onClick={desloguearse}>logout</span>}
            </span>
            <div className="icono-carrito">
              <Link to="/carrito">
                <CartWidget />
              </Link>
            </div>
          </div>
        ) : (
          <span className="itemsNavbar">
            <Link to="/login">
              <span>login</span>
            </Link>
            <Link to="/register">
              <span className="reg">Registrese</span>
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
