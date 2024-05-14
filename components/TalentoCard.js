import React from 'react';

const TalentoCard = ({ talento, marcarEntrevista, rejeitar }) => {
  return (
    <div className="talento-card">
      <h2>{talento.nome}</h2>
      <p>{talento.descricao}</p>
      <p>Área: {talento.area}</p>
      <video src={talento.video} controls />
      <button onClick={() => marcarEntrevista(talento.id)}>Marcar Entrevista</button>
      <button onClick={() => rejeitar(talento.id)}>Rejeitar</button>
    </div>
  );
};

export default TalentoCard;
