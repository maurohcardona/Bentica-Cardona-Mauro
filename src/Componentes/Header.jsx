import React from "react";
import logo from "../Imagenes/Logo-Bentica.png";
import NavBar from "../Componentes/NavBar";
import "../Estilos/Header.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Header() {
  const { currentUser, desloguearse } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <div className="login">
        <p style={{ color: "transparent" }}>1</p>
        <p>benticacosmetica@gmail.com</p>
        {/* {currentUser ? (
          <div>
            <span>
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
          <span className="hola">
            <Link to="/login">
              <span>login</span>
            </Link>
            <Link to="/register">
              <span>Registrese</span>
            </Link>
          </span>
        )} */}
      </div>
      <div className="contenedor-header">
        <div className="logo-input">
          <Link to="/">
            <img className="logo-bentica" src={logo} alt="Logo de Bentica" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
