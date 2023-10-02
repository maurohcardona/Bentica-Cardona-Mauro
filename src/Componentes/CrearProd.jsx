import { useForm, Controller } from "react-hook-form";
import { createProduct } from "../Services/products";
import { useRef } from "react";
import Swal from "sweetalert2";

function CrearProd() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  const onSubmit = async (data) => {
    await createProduct(data);
    reset();
    Swal.fire({
      position: "center",
      grow: "true",
      icon: "success",
      color: "gray",
      heightAuto: "false",
      title: `Producto creado`,
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
              name="Title"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="Title"
                  placeholder="Nombre del producto"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="Description"
              control={control}
              defaultValue="" // Valor inicial del campo
              rules={{ required: true }} // Reglas de validación (opcional)
              render={({ field }) => (
                <input
                  {...field}
                  type="Text"
                  id="Description"
                  placeholder="Descripcion"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="Price"
              control={control}
              defaultValue="" // Valor inicial del campo
              rules={{ required: true }} // Reglas de validación (opcional)
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  id="Price"
                  placeholder="Precio"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="Stock"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  id="Stock"
                  placeholder="Stock"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="Category"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="Category"
                  placeholder="Categoria"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="Thumbnail"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="Thumbnail"
                  placeholder="Link imagen"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          {/* {error && <h3>{error}</h3>} */}
          <button type="submit">Crear producto</button>
        </form>
      </div>
    </div>
  );
}

export default CrearProd;
