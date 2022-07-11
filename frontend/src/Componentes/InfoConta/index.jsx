import React from "react";
import { Container } from "react-bootstrap";
import "./infoconta.css"

function InfoConta(props) {
	return (
		<div>
			<Container id="container-info">
				<h1>Sua Conta</h1>
				<Container id="info-conta-adm">
					<span id="nome">{props.nome}</span>
					<span id="email">{props.email}</span>
					<span id="cnpj">{props.cnpj}</span>
				</Container>
			</Container>
		</div>
	);
}

export default InfoConta;