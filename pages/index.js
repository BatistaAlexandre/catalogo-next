import { useState } from 'react';
import TalentoCard from '../components/TalentoCard';
import MenuLateral from '../components/MenuLateral';
import candidatosData from '../candidatos.json';

const Index = () => {
  const [candidatos, setCandidatos] = useState(candidatosData);
  const [proximasEntrevistas, setProximasEntrevistas] = useState([]);
  const [rejeitados, setRejeitados] = useState([]);

  const marcarEntrevista = (id) => {
    // Lógica para mover o candidato para a lista de próximas entrevistas
    // Atualize o estado de 'proximasEntrevistas'
  };

  const rejeitar = (id) => {
    // Lógica para mover o candidato para a lista de rejeitados
    // Atualize o estado de 'rejeitados'
  };

  return (
    <div className="container">
      <MenuLateral />
      <div className="talentos-container">
        {candidatos.map((talento) => (
          <TalentoCard
            key={talento.id}
            talento={talento}
            marcarEntrevista={marcarEntrevista}
            rejeitar={rejeitar}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
