import { useForm, Controller } from "react-hook-form";
import { passwordRecovery } from "../Services/auth";
import Swal from "sweetalert2";
import { useState } from "react";

function RecPass() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);

  const onSubmit = async (user) => {
    try {
      const response = await passwordRecovery(user);
      console.log(response);
      if (!response.message) {
        reset();
        Swal.fire({
          position: "center",
          grow: "true",
          icon: "success",
          color: "gray",
          heightAuto: "false",
          title: `Email enviado`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
      setError(response.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="correo"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input {...field} type="email" id="correo" placeholder="Email" />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Enviar email</button>
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default RecPass;
