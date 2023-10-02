import { useFetch } from "../CustomHooks/fetchHook";
import { usersClean } from "../Services/users";

function Users() {
  const { data, error, loading } = useFetch("http://localhost:8080/api/users");

  const cleanUsers = async () => {
    await usersClean();
    window.location.reload();
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <div>
        {data &&
          data.users.map((user) => (
            <div key={user._id}>
              <p>ID: {user._id}</p>
              <p>Email: {user.email}</p>
              <p>Email: {user.rol}</p>
              <p>Status: {Boolean(user.status).toString()}</p>
            </div>
          ))}
        {loading && <p>Cargando usuarios...</p>}
        {error && <p>Error al cargar usuarios.</p>}
        <button onClick={cleanUsers}>Limpiar Usuarios</button>
      </div>
    </div>
  );
}

export default Users;
