import React from "react";
import { Container, Card } from "react-bootstrap";
import FormCadastro from "../../Components/FormCadastro";
import fotoCadastro from "../../Assets/foto-cadastro.png";
import "./styles.css";

const Cadastro: React.FC = () => {
	return (
		<div>
			<h1>oi</h1>

			<Container id="container">
				<Card id="card-foto">
					<img src={fotoCadastro} alt="foto da página de cadastro" id="foto" />
				</Card>

				<Card id="card-form">
					<FormCadastro />
				</Card>
			</Container>
		</div>
	);
};

export default Cadastro;
