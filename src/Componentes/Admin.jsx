import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="adminContainer">
      <p>
        <Link to="/usuarios">Usuarios</Link>
      </p>
      <p>
        <Link to="/crearprod">Crear producto</Link>
      </p>
      <p>
        <Link to="/elimprod">Eliminar producto</Link>
      </p>
    </div>
  );
}

export default Admin;
