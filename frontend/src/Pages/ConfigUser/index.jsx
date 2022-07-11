import React from "react";
import ConfigUser from "../../Componentes/ConfigUser/ConfigUser";
import HeaderLogado from "../../Componentes/HeaderLogado";
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css"

function ConfigUserPage() {
	return (
		<div className="config-pagina">
			<HeaderLogado />
			<Sidebar />
			<ConfigUser />
		</div>
	);
}

export default ConfigUserPage;
