import React from "react";
import { Container } from "react-bootstrap";
import "./infoplano.css";

const InfoPlano = (props) => {
	return (
		<Container id="container">
			<h1>Seu Plano</h1>
			<Container id="seu-plano">
				<span id="nome-plano">{props.nomePlano}</span>
				<span id="info-plano">{props.infoPlano}</span>
				<span id="id-consultorio-adm">Id do consultório: {props.idConsultorio}</span>
			</Container>
		</Container>
	);
};

export default InfoPlano;
