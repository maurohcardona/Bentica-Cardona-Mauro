import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import logo from "../Imagenes/Frente-bentica.png";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { useFetch } from "../CustomHooks/fetchHook";

function ItemListContainer() {
  const { category } = useParams();
  const queryCategory = category && `&category=${category}`;
  const apiUrl = `http://localhost:8080/products?limit=5&page=1&${queryCategory}`;
  const [api, setApi] = useState(apiUrl);
  const { data, error, loading } = useFetch(api);

  useEffect(() => {
    setApi(apiUrl);
  }, [category, apiUrl]);

  return (
    <div>
      <img src={logo} alt="Imagen de Bentica" />
      {error && <h1>{error}</h1>}
      <div>
        {loading ? (
          <SyncLoader color="#4c83d8" />
        ) : (
          <div>
            <ItemList items={data?.products} />
            <div>
              {data?.nextLink && (
                <button onClick={() => setApi(data.nextLink)}>
                  Pagina siguiente
                </button>
              )}
              {data?.prevLink && (
                <button onClick={() => setApi(data.prevLink)}>
                  Pagina anterior
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
