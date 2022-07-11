import Header from "../../Componentes/Header";
import Prontuarios from "../../Componentes/Prontuarios"
import Consulta from "../../Componentes/Consultas"
import Historico from "../../Componentes/Historico"
import React from 'react'
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css"


function ProntuarioPages() {
    return (
    <div className="prontuario-pagina">
      <Header />
      <Sidebar />
      <Prontuarios/>
      <Consulta/>
      <Historico/>
    </div>
   
    );
}

export default ProntuarioPages;