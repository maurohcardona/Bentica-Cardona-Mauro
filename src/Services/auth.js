import axios from "axios";

const API = "http://localhost:8080/login";

export const loginRequest = (user) => {
  return axios.post(API, user, {
    withCredentials: true,
  });
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
