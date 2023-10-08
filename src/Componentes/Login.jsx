import React from "react";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Estilos/login.css";

function Login() {
  const { onSubmit, error } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input {...field} type="email" id="email" placeholder="Email" />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                id="password"
                placeholder="Password"
              />
            )}
          />

          {error && <h3>{error}</h3>}
          <button type="submit">Iniciar sesion</button>

          <Link to="/recpass">Recuperar Password</Link>
          <a href="http://localhost:8080/api/auth/github/github">
            Loguearse con GitHub
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
