export const handleSubmit = async (file, uid, direct, iden) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      `http://localhost:8080/api/users/${uid}/documents/${direct}/${iden}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      console.log("Archivo enviado con éxito.");
    } else {
      console.error("Error al enviar el archivo.");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

export const toPremium = async (uid) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/users/premium/${uid}`,
      {
        credentials: "include",
      }
    );
    console.log(response);
    if (response.ok) {
      console.log("Eres Premium");
    } else {
      console.error("Error al hacer la peticion");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};
