//import React, { useState } from 'react';
import Contador from './Contador'
import '../Estilos/ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'

function ItemDetail({ item }) {

    

    const { addToCart, cantidadDeProducto } = useContext(CartContext)

    const onAdd = (cant) => {
        
        addToCart(item, cant)
    };

    const cantidad = cantidadDeProducto(item.id);

    return (
        <div className="detail">
            <img className='imagendetail' src={item.imagen} alt={item.nombre} />
            <article className='aricledetail'>
                <h2>{item.nombre}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus optio, necessitatibus iusto odit cupiditate a quae
                    tempora dolor earum laboriosam hic distinctio. Nemo odit
                    laboriosam quasi! Temporibus fugit omnis deleniti?
                </p>
                <h3>${item.precio}.</h3>
                <Contador stock={item.stock} onAdd={onAdd} initial= {cantidad}  />
            </article>
        </div>
    );
};

export default ItemDetail;