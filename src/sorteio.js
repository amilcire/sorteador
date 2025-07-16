import React, { useState } from 'react';
import './sorteio.css';
import Lottie from 'lottie-react';
import Resultado from './componentes/resultado';
import animacaoSucesso from './assets/Sucesso.json'; // Importa a animação de sucesso
import animacaoRufar from './assets/Rufar.json';


function Sorteio() {
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [resposta, setResposta] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarAnimacao, setMostrarAnimacao] = useState(false);
  const [mostrarRufar, setMostrarRufar] = useState(false);
  const [quantidade, setQuantidade] = useState(6);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(60);
  const realizarSorteio = () => {
    setMostrarAnimacao(false);
    setMostrarRufar(true);
    
    
      setTimeout(() => {
    let sorteados = [];
    while (sorteados.length < quantidade) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!sorteados.includes(numero)) {
        sorteados.push(numero);
      }
    }

    setNumerosSorteados(sorteados);
    setMostrarRufar(false);
// Verifica a resposta imediatamente após o sorteio
    const respostaArray = resposta
      .split(',')
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));

    const acertos = respostaArray.filter((num) => sorteados.includes(num));

    if (acertos.length >= 2) {
      setMensagem(`Você acertou ${acertos.length} número(s), parabéns!!`);
      setMostrarAnimacao(true);
    } else {
      setMensagem(`Você acertou ${acertos.length} número(s). Tente novamente.`);
      setMostrarRufar(false);
    }
  }, 3000);
};

  return (
    <div className="container-sorteio">
      <h2>Personalize seu sorteio!</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Quantidade de números: </label>
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label> Do número: <br/></label>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
        /><br/>
        <label>Até:</label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />
      </div>

      <input
        type="text"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite seus números separados por vírgula"
        style={{ marginBottom: '10px', width: '80%', 
          fontSize: '14px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc'
        }}
      />

      <button onClick={realizarSorteio}>Sortear e Verificar</button>

      <p>{numerosSorteados.length > 0 && `Números sorteados: ${numerosSorteados.join(', ')}`}</p>
      <p>{mensagem}</p>

      {mostrarRufar && (
        <Lottie animationData={animacaoRufar} style={{ width: 200, height: 200 }} />
      )}

      {mostrarAnimacao && (
        <Lottie animationData={animacaoSucesso} style={{ width: 200, height: 200 }} />
      )}
    </div>
  );
}

export default Sorteio;
