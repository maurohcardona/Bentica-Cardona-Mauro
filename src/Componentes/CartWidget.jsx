import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri'
import '../Estilos/Header.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'


function CartWidget () {
    
    const carrito = useContext(CartContext)
    const cantidadcarrito = carrito.cart.map((e) => {return e.cantidad}) 
    const cantidadTotal = cantidadcarrito.reduce((a,b) => {return a+b},0)

    return (
        <div className="carrito" > 
            <RiShoppingCartLine color="black"  size= {35}/>
            <span >{cantidadTotal}</span>
        </div>
    )
}

export default CartWidget