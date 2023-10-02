import axios from "axios";

export const usersClean = async () => {
  return (
    await axios.put("http://localhost:8080/api/users"),
    {
      withCredentials: true,
    }
  );
};

export const register = async (user) => {
  try {
    const response = await fetch("http://localhost:8080/register", {
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

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
