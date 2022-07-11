import HeaderLogado from "../../Componentes/HeaderLogado";
import Quantidade from "../../Componentes/Quantidade";
import React from 'react'
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css"


function ConsultaProntuarioPages() {
    return (
    <div className="consulta-pagina">
      <HeaderLogado />
      <Sidebar />
      <Quantidade/>
    </div>
   
    );
}

export default ConsultaProntuarioPages;