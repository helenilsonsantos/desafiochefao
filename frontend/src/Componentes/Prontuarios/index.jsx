import Envelope from "../../Assets/Envelope.svg";
import Mobile from "../../Assets/Mobile.svg";
import React from "react";
import "./style.css";

function Prontuarios() {
	return (
		<div className="container-prontuario">
			<h1>Prontuários</h1>
			<section className="prontuario">
				<div className="sobre">
					<h2>Sobre</h2>
					<input placeholder="Nome"></input>
					<input placeholder="Data de Nascimento"></input>
					<input placeholder="CPF"></input>
				</div>
				<div className="teste">
					<h2>Contato</h2>
					<div className="contato">
						<div className="contato-input">
							<img
								className="icones email"
								src={Mobile}
								alt="ícone de telefone"
							/>
							<input placeholder="Celular" />
						</div>

						<div className="contato-input">
							<img
								className="icones email"
								src={Envelope}
								alt="ícone de email"
							/>
							<input type="email" placeholder="Email" />
						</div>
					</div>
				</div>
			</section>
			<div className="gambia">
				<p>Observações:</p>
				<textarea name="story"/>
			</div>
		</div>
	);
}

export default Prontuarios;
