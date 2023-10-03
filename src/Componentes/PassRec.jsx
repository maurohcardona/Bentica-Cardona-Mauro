import { useEffect } from "react";
import { changePassword } from "../Services/auth";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { resetPassword } from "../Services/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function PassRec() {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");
  const correo = searchParams.get("correo");
  const [data, setData] = useState(false);

  const navigate = useNavigate();

  const passwordReset = async () => {
    const data = await changePassword(token, correo);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    passwordReset();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (password) => {
    console.log(correo, password.password);
    await resetPassword(correo, password.password);
    Swal.fire({
      position: "center",
      grow: "true",
      icon: "success",
      color: "gray",
      heightAuto: "false",
      title: `Password actualizado`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/login");
  };

  return (
    <div>
      {data && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p> Usuario: {correo}</p>

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
                    placeholder="Nuevo Password"
                  />
                )}
              />
            </div>

            <button type="submit">Resetear password</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PassRec;
