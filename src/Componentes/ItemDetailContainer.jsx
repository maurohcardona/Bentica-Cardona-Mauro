import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../Mock/productos'
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { idProd } = useParams();

     const getProduct = (idProd) => {
        return new Promise((res, rej) => {
            const product = productos.find((prod) => prod.id === +idProd);
            setTimeout(() => {
                res(product);
            }, 1000);
        });
    };  

    useEffect(() => {
        getProduct(idProd)
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProd]);

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
};


export default ItemDetailContainer

