import "./App.css";
import Header from "./Componentes/Header";
import ItemListContainer from "./Componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Inicio from "./Componentes/Inicio";
import CartProvider from "./Context/CartContext";
import Cart from "./Componentes/Cart";
import Footer from "./Componentes/Footer";
import Form from "./Componentes/Form";
import Seguimiento from "./Componentes/Seguimiento";
import Contacto from "./Componentes/Contacto";
import UserProvider from "./Context/UserContext";
import Login from "./Componentes/Login";
import Perfil from "./Componentes/Perfil";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        {" "}
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Form />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
