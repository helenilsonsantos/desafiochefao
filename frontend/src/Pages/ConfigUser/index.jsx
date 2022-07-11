import React from "react";
import ConfigUser from "../../Componentes/ConfigUser/ConfigUser";
import InfoConta from "../../Componentes/InfoConta";
import InfoPlano from "../../Componentes/InfoPlano";
import HeaderLogado from "../../Componentes/HeaderLogado";
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css";
import { Container } from "react-bootstrap";

function ConfigUserPage() {
	return (
		<div className="config-pagina">
			<HeaderLogado />
			<Sidebar />
			<Container id="config-adm">
				<InfoConta
					nome="Beatriz Neves"
					email="beatriz.neves@bol.com.br"
					cnpj="XX. XXX. XXX/0001-XX"
				/>

				<hr />

				<InfoPlano
					nomePlano="Plano anual Dental Platinum PRO"
					infoPlano="Consultar informações sobre meu plano"
					idConsultorio="xxxxxxx"
				/>
			</Container>
		</div>
	);
}

export default ConfigUserPage;
