import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import fotoCadastro from "../../Assets/foto-cadastro.png";
import setaVoltar from "../../Assets/seta-esquerda.png";
import FormCadastro from "../../Components/FormCadastro";
import "./styles.css";

const Cadastro = () => {
	return (
		<div className="container-pagina-cadastro">
			{/* Header */}

			<Container id="container-cadastro">
				<Card id="card-foto">
					<Button>
						<img src={setaVoltar} alt="ícone de voltar" />
						Voltar
					</Button>
					<img src={fotoCadastro} alt="foto da página de cadastro" id="foto" />
				</Card>

				<Card id="card-form-cadastro">
					<h3>Preencha seus dados</h3>
					<FormCadastro />
				</Card>
			</Container>
		</div>
	);
};

export default Cadastro;
