import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../Mock/productos'
import { useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';



function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

     const getProduct = (idProd) => {
        return new Promise((res, rej) => {
            const product = productos.find((prod) => prod.id === +idProd);
            setTimeout(() => {
                res(product);
            }, 3000);
        });
    };  

    useEffect(() => {
        getProduct(idProd)
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [idProd]);
    
    if (loading) {
        return (
            <div className="detail-container">
                <h1><SyncLoader /></h1>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
};


export default ItemDetailContainer

