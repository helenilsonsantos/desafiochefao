import Header from "../../Componentes/Header";
import Quantidade from "../../Componentes/Quantidade";
import React from 'react'
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css"


function ConsultaProntuarioPages() {
    return (
    <div className="consulta-pagina">
      <Header />
      <Sidebar />
      <Quantidade/>
    </div>
   
    );
}

export default ConsultaProntuarioPages;