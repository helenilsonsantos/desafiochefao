import React from "react";
import { Button, Container } from "react-bootstrap";
import iconeAdd from "../../Assets/icone-add.png";
import "./styles.css";

function Home() {
	return (
		<div>
			{/* Header */}

			{/* Barra Lateral */}

			<Container id="config-adm">
				<Container id="container">
					<h1>Sua Conta</h1>
					<Container id="info-conta-adm">
						<span id="nome">Beatriz Neves</span>
						<span id="email">beatriz.neves@bol.com.br</span>
						<span id="cnpj">XX. XXX. XXX/0001-XX</span>
					</Container>
				</Container>

				<hr />

				<Container id="container">
					<h1>Seu Plano</h1>
					<Container id="seu-plano">
						<span id="nome-plano">Plano anual Dental Platinum PRO</span>
						<span id="info-plano">Consultar informações sobre meu plano</span>
						<span id="id-consultorio-adm">Id do consultório: xxxxxxx</span>
					</Container>
				</Container>

				<hr />

				<Container id="container">
					<section className="section-botao">
						<h1>Lista de usuários</h1>
						<Button>
							<img src={iconeAdd} alt="ícone de adicionar usuário" />
							Adicionar usuário
						</Button>
						{/* Modal de adicionar usuário */}
					</section>

					<h2>Administrador(es):</h2>
					<Container className="container-admin">
						<span id="nome-adm">Beatriz Neves</span>
						<span id="nome-adm">Beatriz Neves</span>
					</Container>
					<hr />

					<h2>Dentista(s):</h2>
					<Container className="container-admin">
						<span id="nome-dentista">Beatriz Neves</span>
						<span id="nome-dentista">Beatriz Neves</span>
						<span id="nome-dentista">Beatriz Neves</span>
					</Container>
					<hr />

					<h2>Recepcionista(s):</h2>
					<Container className="container-admin">
						<span id="nome-recepionista">Beatriz Neves</span>
						<span id="nome-recepionista">Beatriz Neves</span>
						<span id="nome-recepionista">Beatriz Neves</span>
					</Container>
				</Container>
			</Container>
		</div>
	);
}

export default Home;
