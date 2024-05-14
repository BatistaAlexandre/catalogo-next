import React, { useState } from 'react';

const MenuLateral = ({ mostrarBancoDeTalentos, mostrarProximasEntrevistas, mostrarRejeitados, filtroArea, setFiltroArea }) => {
  const [botaoSelecionado, setBotaoSelecionado] = useState('todos'); // Estado para armazenar qual botão está selecionado
  const [filtroSelecionado, setFiltroSelecionado] = useState('todos'); // Estado para armazenar qual filtro está selecionado

  const handleFiltroChange = (e) => {
    const valorFiltro = e.target.value;
    setFiltroArea(valorFiltro);
    setFiltroSelecionado(valorFiltro);
    setBotaoSelecionado('todos'); // Reseta o botão selecionado quando um filtro é escolhido
  };

  return (
    <div className="menu-lateral">
      <img src="https://media.licdn.com/dms/image/sync/D4D27AQF-BCaRza6fbg/articleshare-shrink_800/0/1713472234001?e=2147483647&v=beta&t=_8WJDv3YOFE6blWuv_A_LNvDs7ZQv0eU_gKzfsB_4yo" alt="Logo da Empresa" />
      <div className="filtro-container">
        <select value={filtroSelecionado} onChange={handleFiltroChange}>
          <option value="todos">All</option>
          <option value="TI">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Vendas">Sales</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>
      <div className="menu-botoes">
        <button onClick={() => { mostrarBancoDeTalentos(); setBotaoSelecionado('banco'); setFiltroSelecionado('todos'); }} className={botaoSelecionado === 'banco' ? 'selecionado' : ''}>Banco de Talentos</button>
        <button onClick={() => { mostrarProximasEntrevistas(); setBotaoSelecionado('proximas'); setFiltroSelecionado('todos'); }} className={botaoSelecionado === 'proximas' ? 'selecionado' : ''}>Próximas Entrevistas</button>
        <button onClick={() => { mostrarRejeitados(); setBotaoSelecionado('rejeitados'); setFiltroSelecionado('todos'); }} className={botaoSelecionado === 'rejeitados' ? 'selecionado' : ''}>Rejeitados</button>
      </div>
    </div>
  );
};

export default MenuLateral;
