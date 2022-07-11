import HeaderLogado from "../../Componentes/HeaderLogado";
import Prontuarios from "../../Componentes/Prontuarios";
import Consulta from "../../Componentes/Consultas";
import Historico from "../../Componentes/Historico";
import React from "react";
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css";

function ProntuarioPages() {
	return (
		<div className="prontuario-pagina">
			<HeaderLogado />
			<Sidebar />
			<div className="container-prontuario-pagina">
				<Prontuarios />
				<hr />
				<Consulta />
				<hr />
				<Historico />
			</div>
		</div>
	);
}

export default ProntuarioPages;
