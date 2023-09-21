import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import "../Estilos/Cards.css";
import { getProduct } from "../Services/products";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProd } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await getProduct(idProd);
        setItem({
          id: res._id,
          nombre: res.Title,
          imagen: res.Thumbnail,
          stock: res.Stock,
          precio: res.Price,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [idProd]);

  if (loading) {
    return (
      <div className="loader">
        <h1>
          <SyncLoader color="#4c83d8" />
        </h1>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
