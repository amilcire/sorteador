import React from 'react';
import Sorteio from './sorteio';  // Importa o componente Sorteio
//import './App.css';  // Importa o CSS do App
import './index.css';  // Importa o CSS do index
import './sorteio.css';  // Importa o CSS do Sorteio
import Resultado  from './componentes/resultado';  // Importa o componente Resultado
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      className="container-sorteio"    
    >
      <h1>Sistema de Sorteio</h1>
      <Sorteio />  {/* Usa o componente Sorteio aqui */}
      <Resultado/> {/* Usa o componente Resultado aqui */}
    </div>
  );
}

export default App;
