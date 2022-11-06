import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri'
import '../Estilos/Header.css'



function CartWidget () {
    return (
        <div className="carrito" > 
            <RiShoppingCartLine color="black"  size= {35}/>
        </div>
    )
}

export default CartWidget