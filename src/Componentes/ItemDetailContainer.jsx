import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
//import { productos } from '../Mock/productos'
import { useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import '../Estilos/Cards.css'
import { collectionProd } from '../Services/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';



function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();


    useEffect(() => {

        const ref = doc(collectionProd, idProd)

        getDoc(ref)
            .then((res) => {
                setItem( {
                    id: res.id,
                    ...res.data(),
                } );
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
            <div className="loader">
                <h1><SyncLoader color='#4c83d8'/></h1>
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

