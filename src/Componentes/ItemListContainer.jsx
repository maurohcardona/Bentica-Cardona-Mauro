import React, { useEffect, useState } from 'react';
//import { productos } from '../Mock/productos'
import ItemList from './ItemList';
import logo from '../Imagenes/Frente-bentica.png'
import { useParams } from 'react-router-dom';
import '../Estilos/Cards.css'
import SyncLoader from 'react-spinners/SyncLoader';
import { collectionProd } from '../Services/firebaseConfig'
import { getDocs, query, where } from 'firebase/firestore';


function ItemListContainer () {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams ()

    useEffect(() => {
        //const getProducts = (categoryName) => {
            //return new Promise((res, rej) => {
                //const prodFiltrados = productos.filter (
                    //(prod) => prod.categoria === categoryName
                //);
                //setTimeout(() => {
                    //res(ref);
                    // }, 2000);
                    
                    //  });   
                    // };
                    
                    //const collectionProd = collection(db, 'productos')
                    //const categoria = query(collectionProd, where('categoria', '==', categoryName ))
                    
                    const ref = categoryName ? query(collectionProd, where('categoria', '==', categoryName )) : collectionProd;

        getDocs(ref)
            .then((res) => {    
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
            console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        //getProducts(categoryName)
        //.then((res) => {
        //    setItems(res);
        //})
        //.catch((error) => {
        //    console.log(error);
        //})
        //.finally(() => {
        //    setLoading(false);
        //});
    }, [categoryName]); 

    if (loading) {
        return (
            <div className="loader">
                <h1><SyncLoader color='#4c83d8'/></h1>
            </div>
        );
    }
    
    
    return (
        <div>
            <img className='img-itemlistcontainer' src={logo} alt="Imagen de Bentica"/>
            <ItemList items={items} />
       </div>
    )
}

export default ItemListContainer;