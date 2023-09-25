import React, { useEffect } from "react";
import { useState } from "react";
import { handleSubmit, toPremium } from "../Services/profile";
import Swal from "sweetalert2";

function Perfil() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [premium, setPremium] = useState(false);

  const nombresAB = [
    "Identificacion",
    "Comprobante de domicilio",
    "Comprobante de cuenta",
  ];

  const [data, setData] = useState(null);
  const fetchApi = async () => {
    fetch("http://localhost:8080/current", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const todosPresentes = nombresAB.every((nombre) =>
    data?.profile.documents.some((objeto) => objeto.name === nombre)
  );

  const handleFileChange1 = (event) => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
  };
  const handleFileChange2 = (event) => {
    const selectedFile = event.target.files[0];
    setFile2(selectedFile);
  };
  const handleFileChange3 = (event) => {
    const selectedFile = event.target.files[0];
    setFile3(selectedFile);
  };

  const loadFile1 = async (event) => {
    event.preventDefault();
    await handleSubmit(
      file1,
      data.profile._id,
      "identificaciones",
      "Identificacion"
    );
    await fetchApi();
  };
  const loadFile2 = async (event) => {
    event.preventDefault();
    await handleSubmit(
      file2,
      data.profile._id,
      "comp de domicilios",
      "Comprobante de domicilio"
    );
    await fetchApi();
  };
  const loadFile3 = async (event) => {
    event.preventDefault();
    await handleSubmit(
      file3,
      data.profile._id,
      "comp de cuentas",
      "Comprobante de cuenta"
    );
    await fetchApi();
  };

  const userToPremium = async () => {
    await toPremium(data.profile._id);
    setPremium(true);
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Eres Premium.",
      showConfirmButton: false,
      timer: 2200,
    });
  };

  console.log(data);
  return (
    <div>
      <h1>perfil</h1>
      <div>
        {data && (
          <div>
            <p>Nombre: {data.profile.firstname}</p>
            <p>Apellido: {data.profile.lastname}</p>
            <p>Correo: {data.profile.email}</p>
            <p>Edad: {data.profile.age}</p>
            {data.profile.documents?.some(
              (objeto) => objeto.name === "Identificacion"
            ) ? (
              <p>
                Identificacion:{" "}
                {
                  <a
                    href={
                      data.profile.documents.find(
                        (objeto) => objeto.name === "Identificacion"
                      ).path
                    }
                  >
                    {" "}
                    Identificacion
                  </a>
                }
              </p>
            ) : (
              <p>
                Identificacion:{" "}
                <form onSubmit={loadFile1}>
                  <input type="file" onChange={handleFileChange1} />
                  <button type="submit">Enviar</button>
                </form>
              </p>
            )}
            {data.profile.documents?.some(
              (objeto) => objeto.name === "Comprobante de domicilio"
            ) ? (
              <p>
                Comprobante de domicilio:
                {
                  <a
                    href={
                      data.profile.documents.find(
                        (objeto) => objeto.name === "Comprobante de domicilio"
                      ).path
                    }
                  >
                    {" "}
                    Comprobante de domicilio
                  </a>
                }
              </p>
            ) : (
              <p>
                Comprobante de domicilio:{" "}
                <form onSubmit={loadFile2}>
                  <input type="file" onChange={handleFileChange2} />
                  <button type="submit">Enviar</button>
                </form>
              </p>
            )}
            {data.profile.documents?.some(
              (objeto) => objeto.name === "Comprobante de cuenta"
            ) ? (
              <p>
                Comprobante de cuenta:
                {
                  <a
                    href={
                      data.profile.documents.find(
                        (objeto) => objeto.name === "Comprobante de cuenta"
                      ).path
                    }
                  >
                    {" "}
                    Comprobante de cuenta
                  </a>
                }{" "}
              </p>
            ) : (
              <p>
                Comprobante de cuenta:{" "}
                <form onSubmit={loadFile3}>
                  <input type="file" onChange={handleFileChange3} />
                  <button type="submit">Enviar</button>
                </form>
              </p>
            )}
          </div>
        )}

        {todosPresentes && premium === false && (
          <button onClick={userToPremium}>Se premium</button>
        )}
      </div>
    </div>
  );
}

export default Perfil;
