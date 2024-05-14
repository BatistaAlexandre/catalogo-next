import React, { useState } from 'react';
import TalentoCard from '../components/TalentoCard';
import MenuLateral from '../components/MenuLateral';
import candidatosData from '../candidatos.json';

const Filtro = () => {
  const [candidatos, setCandidatos] = useState(candidatosData);
  const [candidatosExibidos, setCandidatosExibidos] = useState(candidatosData);
  const [filtroArea, setFiltroArea] = useState('todos'); // Estado para armazenar a área de filtro selecionada

  const mostrarBancoDeTalentos = () => {
    setCandidatosExibidos(candidatos);
  };

  const mostrarProximasEntrevistas = () => {
    const proximasEntrevistas = candidatos.filter((candidato) => candidato.status === 'próxima entrevista');
    setCandidatosExibidos(proximasEntrevistas);
  };

  const mostrarRejeitados = () => {
    const rejeitados = candidatos.filter((candidato) => candidato.status === 'rejeitado');
    setCandidatosExibidos(rejeitados);
  };

  const filtrarPorArea = (area) => {
    if (area === 'todos') {
      setCandidatosExibidos(candidatos);
    } else {
      const candidatosFiltrados = candidatos.filter((candidato) => candidato.area === area);
      setCandidatosExibidos(candidatosFiltrados);
    }
    setFiltroArea(area); // Atualiza o estado do filtro de área
  };

  const marcarEntrevista = (id, calendlyLink) => {
    const confirmar = window.confirm("Are you sure you want to schedule an interview with this candidate?");
    if (confirmar) {
      // Atualiza o status do candidato
      const candidatosAtualizados = candidatos.map((candidato) =>
        candidato.id === id ? { ...candidato, status: 'próxima entrevista' } : candidato
      );
      setCandidatos(candidatosAtualizados);
      setCandidatosExibidos(candidatosExibidos.map((candidato) =>
        candidato.id === id ? { ...candidato, status: 'próxima entrevista' } : candidato
      ));

      // Redireciona para o Calendly do candidato
      window.open(calendlyLink, '_blank');
    }
  };

  const rejeitar = (id) => {
    const confirmar = window.confirm("Are you sure you want to reject this candidate?");
    if (confirmar) {
      // Atualiza o status do candidato
      const candidatosAtualizados = candidatos.map((candidato) =>
        candidato.id === id ? { ...candidato, status: 'rejeitado' } : candidato
      );
      setCandidatos(candidatosAtualizados);
      setCandidatosExibidos(candidatosExibidos.map((candidato) =>
        candidato.id === id ? { ...candidato, status: 'rejeitado' } : candidato
      ));
    }
  };

  return (
    <div className="container">
      <MenuLateral
        mostrarBancoDeTalentos={mostrarBancoDeTalentos}
        mostrarProximasEntrevistas={mostrarProximasEntrevistas}
        mostrarRejeitados={mostrarRejeitados}
        filtroArea={filtroArea} // Passa o estado filtroArea como propriedade
        setFiltroArea={filtrarPorArea} // Passa a função filtrarPorArea para atualizar o estado filtroArea
      />
      <div className="talentos-container">
        {candidatosExibidos.map((talento) => (
          <TalentoCard
            key={talento.id}
            talento={talento}
            marcarEntrevista={() => marcarEntrevista(talento.id, talento.calendlyLink)}
            rejeitar={rejeitar}
          />
        ))}
      </div>
    </div>
  );
};

export default Filtro;
