import React from "react";
import logo from '../Imagenes/Logo-Bentica.png'
import Input from '../Componentes/Input';
import NavBar from '../Componentes/NavBar';
import '../Estilos/Header.css'
import CartWidget from "./CartWidget";

function Header () {
    return (
        <div className="contenedor-header">
            <div className="logo-input">
                <img className="logo-bentica" src={logo} alt="Logo de Bentica" />
                <div className="div-input">
                    <Input 
                        estilo= 'input-header'
                        placeholder= '¿Que estas buscando?' />
                </div>
                <CartWidget />
            </div>
        <NavBar />
        </div>
    )   
}

export default Header