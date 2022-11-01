import './App.css';
import Header from './Componentes/Header';
import ItemListContainer from './Componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Componentes/Inicio';



function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/Home' element={<Inicio />} />
      <Route path='/productos' element={<ItemListContainer />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
