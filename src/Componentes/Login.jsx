import React from "react";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Login() {
  const { onSubmit, error } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        </div>

        <div>
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
        </div>
        {error && <h3>{error}</h3>}
        <button type="submit">Iniciar sesion</button>
      </form>
      <Link to="/recpass">Recuperar Password</Link>
      <a href="http://localhost:8080/api/auth/github/github">
        Loguearse con GitHub
      </a>
    </div>
  );
}

export default Login;
