import React, { useEffect, useState } from 'react';
import { productos } from '../Mock/productos'
import ItemList from './ItemList';
import logo from '../Imagenes/Frente-bentica.png'
import { useParams } from 'react-router-dom';
import '../Estilos/Cards.css'


function ItemListContainer () {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams ()

    useEffect(() => {
        const getProducts = (categoryName) => {
            return new Promise((res, rej) => {
                const prodFiltrados = productos.filter (
                    (prod) => prod.categoria === categoryName
                );
                const ref = categoryName ? prodFiltrados : productos
                setTimeout(() => {
                    res(ref);
                }, 1000);
                
            });
        };
        getProducts(categoryName)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryName]); 
    
    
    return (
        <div>
            <img className='img-itemlistcontainer' src={logo} alt="Imagen de Bentica"/>
            <ItemList items={items} />
       </div>
    )
}

export default ItemListContainer;