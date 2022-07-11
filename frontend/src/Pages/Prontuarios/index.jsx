import Header from "../../Componentes/Header";
import Prontuarios from "../../Componentes/Pontuarios"
import Consulta from "../../Componentes/Consultas"
import Historico from "../../Componentes/Historico"
import React from 'react'
import Sidebar from "../../Componentes/MenuLateral/Sidebar";


function ProntuarioPages() {
    return (
    <div>
      <Header />
      <Sidebar />
      <Prontuarios/>
      <Consulta/>
      <Historico/>
    </div>
   
    );
}

export default ProntuarioPages;