import { useEffect, useState } from "react";
import { elimProd } from "../Services/products";

function ElimProd() {
  const [data, setData] = useState(null);
  const [elim, setElim] = useState(false);
  const eliminarProd = async (idprod) => {
    await elimProd(idprod);
    setElim(!elim);
  };
  console.log(data);
  console.log(elim);
  const getProducts = async () => {
    try {
      const fetchProducts = await fetch(
        "http://localhost:8080/products/admin",
        {
          credentials: "include",
        }
      );
      const products = await fetchProducts.json();
      setData(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [elim]);

  return (
    <div>
      {data?.map((el) => (
        <div key={el.id}>
          <p>{el.Title}</p>
          <p>status: {Boolean(el.status).toString()}</p>
          <button onClick={() => eliminarProd(el.id)}>
            {el.status ? "Desactivar producto" : "Activar producto"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ElimProd;
