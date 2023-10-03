import axios from "axios";

const API = "http://localhost:8080/login";

// export const loginRequest = (user) => {
//   return axios.post(API, user, {
//     withCredentials: true,
//   });
// };
export const loginRequest = async (user) => {
  try {
    const response = await axios.post(API, user, {
      withCredentials: true,
    });
    console.log(response);
    // Manejar la respuesta exitosa aquí, si es necesario
    return response.data;
  } catch (error) {
    // Manejar errores aquí
    return error;
  }
};

export const logOut = async () => {
  return (
    await axios.get("http://localhost:8080/logout"),
    {
      withCredentials: true,
    }
  );
};

// export const profile = async () => {
//   return (
//     await axios.get("http://localhost:8080/current"),
//     {
//       withCredentials: true,
//     }
//   );
// };

export const profile = async () => {
  try {
    const response = await fetch("http://localhost:8080/current", {
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

export const passwordRecovery = async (user) => {
  try {
    const response = await fetch("http://localhost:8080/passwordrecover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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

export const changePassword = async (token, email) => {
  try {
    const response = await fetch(
      `http://localhost:8080/user/recoverypassword?token=${token}&email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
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

export const resetPassword = async (correo, password) => {
  console.log(correo, password);
  try {
    const response = await fetch("http://localhost:8080/user/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ correo, password }),
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
