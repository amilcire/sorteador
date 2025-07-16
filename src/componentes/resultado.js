import React from "react";
import Lottie from "lottie-react";
import animacaoSucesso from "../assets/Sucesso.json"; // Importa a animação de sucesso

function Resultado({ mostrar }) {
  if (!mostrar) return null; // Se mostrar for falso, não renderiza nada
  
  return (
    <div>
      <h2>Parabéns!</h2>
      <Lottie animationData={animacaoSucesso} style={{ width: 200, height: 200 }} />
    </div>
  );
}

export default Resultado;

