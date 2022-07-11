import "./style.css";
import Pontos from "../../Assets/pontos.svg";
import React from "react";

function Historico() {
	return (
		<div className="container-prontuario">
			<h2>Histórico</h2>
			<div className="historico-img">
				<div className="info-pacientes">
					<b>Clareamento</b>
					<p>15/05/2021</p>
				</div>
				<img className="pontos" src={Pontos} alt="ícone de três pontos" />
			</div>
		</div>
	);
}

export default Historico;
