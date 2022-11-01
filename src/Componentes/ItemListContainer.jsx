import React, { useEffect, useState } from 'react';
import { productos } from '../Mock/productos'
import ItemList from './ItemList';
import logo from '../Imagenes/Frente-bentica.png'

function ItemListContainer () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos);
                }, 1000);
                
            });
        };
        getProducts()
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []); 
    
    
    return (
        <div>
            <img src={logo} alt="Imagen de Bentica"/>
            <ItemList items={items} />
       </div>
    )
}

export default ItemListContainer;