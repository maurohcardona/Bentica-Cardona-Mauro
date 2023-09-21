import React from "react";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

function Login() {
  const { onSubmit } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue="" // Valor inicial del campo
          rules={{ required: true }} // Reglas de validación (opcional)
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

      <button type="submit">Iniciar sesion</button>
    </form>
  );
}

export default Login;
