import React from "react";
import logo from '../Imagenes/Logo-Bentica.png'
import NavBar from '../Componentes/NavBar';
import '../Estilos/Header.css'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { auth } from '../Services/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";





function Header () {

    const { handleUserStateChanged, currenState, currentUser, handleOnClick, desloguearse, setCurrentState } = useContext(UserContext)
    

   

    useEffect(()=>{
        onAuthStateChanged(auth, handleUserStateChanged);
        
    },[currenState]);

    console.log(currenState)
    

    return (
        <>
            <div className="login">
                    <p style={{color:'transparent'}}>1</p>
                    <p>benticacosmetica@gmail.com</p>
                    {currenState? <p>{currentUser} {<p onClick={desloguearse}>logout</p>} </p>:<p onClick={handleOnClick}>login</p>}
                </div>
            <div className="contenedor-header">
                
                <div className="logo-input">
                    <Link to='/'><img className="logo-bentica" src={logo} alt="Logo de Bentica" /></Link>
                    <div className="icono-carrito">
                        <Link to='/carrito'><CartWidget /></Link> 
                    </div>    
                </div>
            <NavBar />
            </div>
        </>
    )   
}

export default Header