import './App.css';
import Header from './Componentes/Header';
import Main from './Componentes/ItemListContainer';
import Contador from './Componentes/Contador';


function App() {
  return (
   <>
      <Header />
      <Main saludo= 'Bentica' />
      <Contador stock= {10} />
    </>
  );
}

export default App;
