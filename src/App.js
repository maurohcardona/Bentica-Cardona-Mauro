import './App.css';
import Header from './Componentes/Header';
import ItemListContainer from './Componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Inicio from './Componentes/Inicio';



function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/productos' element={<ItemListContainer />}  />
      <Route path='/categoria/:categoryName' element={<ItemListContainer />}  />
      <Route path='/detail/:idProd' element={<ItemDetailContainer />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
