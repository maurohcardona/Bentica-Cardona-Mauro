import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri'
import '../Estilos/Header.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'


function CartWidget () {
    
    const { cantidadTotal } = useContext(CartContext)
    

    return (
        <div className="carrito" > 
            <RiShoppingCartLine color="black"  size= {35}/>
            <span >
                {cantidadTotal > 0 ? cantidadTotal  : ''}
            </span>
        </div>
    )
}

export default CartWidget