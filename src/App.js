import './App.css';
import Header from './Componentes/Header';
import ItemListContainer from './Componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Inicio from './Componentes/Inicio';
import CartProvider from './Context/CartContext';
import Cart from './Componentes/Cart';
import Footer from './Componentes/Footer';
import Form from './Componentes/Form';
import Seguimiento from './Componentes/Seguimiento';
import Contacto from './Componentes/Contacto';
import UserProvider from './Context/UserContext';


function App() {
  return (
   <BrowserRouter>
      <UserProvider
>      <CartProvider>
        <Header />
        <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<ItemListContainer />}  />
        <Route path='/categoria/:categoryName' element={<ItemListContainer />}  />
        <Route path='/detail/:idProd' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path="/checkout" element={<Form />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
