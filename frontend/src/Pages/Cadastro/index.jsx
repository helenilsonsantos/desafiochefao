import React from "react";
import { Container, Card } from "react-bootstrap";
import fotoCadastro from "../../Assets/foto-cadastro.png";
import FormCadastro from "../../Components/FormCadastro";
import "./styles.css";

const Cadastro = () => {
	return (
		<div>
			{/* Header */}

			<Container id="container-cadastro">
				<Card id="card-foto">
					<img src={fotoCadastro} alt="foto da página de cadastro" id="foto" />
				</Card>
				<Card id="card-form-cadastro">
					<div>
						<h3>Comece agora</h3>
						<h4>Organize sua clínica</h4>
					</div>

					<FormCadastro />
				</Card>
			</Container>
		</div>
	);
};

export default Cadastro;
