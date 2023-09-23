import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { loginRequest, logOut, profile } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const cookieExists = document.cookie.includes("cookieToken");

  const [currentUser, setCurrentUser] = useState(null);
  const [currenState, setCurrentState] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await profile();
        setCurrentUser(res);
        setCurrentState(true);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (cookieExists) {
      fetchProfile();
    }
  }, [cookieExists]);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await loginRequest(data);
      if (res.response) {
        setError(res.response.data);
        setTimeout(() => {
          setError(null);
        }, 5000);
        return;
      }
      setCurrentState(true);
      navigate("/productos");
    } catch (error) {
      console.log("Error de logueo");
    }
  };

  async function desloguearse() {
    try {
      logOut();
      document.cookie =
        "cookieToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      setCurrentState(false);
      setCurrentUser("");
      navigate("/login");
    } catch (error) {}
  }

  return (
    <UserContext.Provider
      value={{
        onSubmit,
        currenState,
        currentUser,
        desloguearse,
        setCurrentState,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
