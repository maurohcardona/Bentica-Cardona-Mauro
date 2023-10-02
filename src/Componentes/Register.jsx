import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";
import Swal from "sweetalert2";
import { register } from "../Services/users";

function Register() {
  const formRef = useRef();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await register(data);
    reset();
    Swal.fire({
      position: "center",
      grow: "true",
      icon: "success",
      color: "gray",
      heightAuto: "false",
      title: `Usuario creado`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <h1>Crear producto</h1>
      <div>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="firstname"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="firstname"
                  placeholder="Nombre"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="Text"
                  id="lastname"
                  placeholder="Apellido"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
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
              name="age"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input {...field} type="number" id="age" placeholder="Edad" />
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
                  type="text"
                  id="password"
                  placeholder="Password"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          {/* {error && <h3>{error}</h3>} */}
          <button type="submit">Crear Usuario</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
