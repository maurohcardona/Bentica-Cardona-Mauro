import { useForm, Controller } from "react-hook-form";
import { passwordRecovery } from "../Services/auth";
import Swal from "sweetalert2";

function RecPass() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    await passwordRecovery(user);
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
    </div>
  );
}

export default RecPass;
