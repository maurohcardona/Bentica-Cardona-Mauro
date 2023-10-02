//import axios from "axios";

const API = "http://localhost:8080/products";

// export const getProduct = async (idProduct) => {
//   return (
//     await axios.get(`${API}/${idProduct}`),
//     {
//       withCredentials: true,
//     }
//   );
// };
export async function getProduct(idProduct) {
  try {
    const response = await fetch(`${API}/${idProduct}`, {
      credentials: "include",
    });
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

export const elimProd = async (idProduct) => {
  console.log(idProduct);
  try {
    const response = await fetch(
      `http://localhost:8080/products/${idProduct}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error(
        `La solicitud falló con código de estado: ${response.status}`
      );
    }

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await fetch("http://localhost:8080/products", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(
        `La solicitud falló con código de estado: ${response.status}`
      );
    }

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
