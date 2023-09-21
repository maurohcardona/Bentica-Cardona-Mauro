import axios from "axios";

export const checkOut = (cart) => {
  return axios.post("http://localhost:8080/purchase", cart, {
    withCredentials: true,
  });
};

export const finalCart = (cart, userId, total) => {
  const mapCart = cart.map((prod) => ({
    cart: prod.id,
    quantity: prod.cantidad,
  }));

  const newCart = {
    user: userId,
    Cart: mapCart,
    total: total,
  };
  return newCart;
};

export const fetchCarritos = async (userId) => {
  try {
    const response = await fetch(`http://localhost:8080/cartss/${userId}`, {
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
};
