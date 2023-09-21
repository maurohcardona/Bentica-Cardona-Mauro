import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import logo from "../Imagenes/Frente-bentica.png";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

function ItemListContainer() {
  const [items, setItems] = useState(null);
  const apiUrl = "http://localhost:8080/products?limit=10&page=1";

  async function fetchProducts() {
    try {
      const response = await fetch(apiUrl, { credentials: "include" });
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con código de estado: ${response.status}`
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async function nextPage() {
    try {
      try {
        const response = await fetch(items.nextLink, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(
            `La solicitud falló con código de estado: ${response.status}`
          );
        }

        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async function prevPage() {
    try {
      try {
        const response = await fetch(items.prevLink, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(
            `La solicitud falló con código de estado: ${response.status}`
          );
        }

        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  const { categoryName } = useParams();

  useEffect(() => {
    const getProducts = async (categoryName) => {
      try {
        const products = await fetchProducts();
        const prodFiltrados = products.products.filter(
          (prod) => prod.categoria === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setItems(ref);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProducts(categoryName);
  }, [categoryName]);

  if (items === null) {
    return (
      <div className="loader">
        <SyncLoader color="#4c83d8" />
      </div>
    );
  }

  return (
    <div>
      <img src={logo} alt="Imagen de Bentica" />
      <ItemList items={items.products} />
      {items.nextLink ? (
        <button onClick={nextPage}>Pagina siguiente</button>
      ) : (
        <p></p>
      )}
      {items.prevLink ? (
        <button onClick={prevPage}>Pagina anterior</button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default ItemListContainer;
