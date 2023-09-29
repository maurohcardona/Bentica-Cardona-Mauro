import axios from "axios";

export const checkOut = (cart) => {
  return axios.post("http://localhost:8080/purchase", cart, {
    withCredentials: true,
  });
};

export const initCompra = async (cart, id) => {
  console.log(cart);
  try {
    const response = await fetch(`http://localhost:8080/pagos/payment/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("La solicitud no pudo completarse correctamente.");
    }

    const responseData = await response.json();

    if (responseData && responseData.init_point) {
      console.log("Iniciando proceso de compra...");
      window.location.href = responseData.init_point;
    } else {
      console.error("La respuesta no contiene la URL de inicio.");
    }
  } catch (error) {
    console.error("Error al iniciar el proceso de compra:", error);
    // Podrías mostrar un mensaje de error al usuario aquí
  }
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
