import React from "react";
import logo from '../Imagenes/Logo-Bentica.png'
import Input from '../Componentes/Input';
import NavBar from '../Componentes/NavBar';
import '../Estilos/Header.css'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="contenedor-header">
            <div className="logo-input">
                <Link to='/Home'><img className="logo-bentica" src={logo} alt="Logo de Bentica" /></Link>
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