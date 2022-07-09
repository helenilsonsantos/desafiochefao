import React from "react";
import { Button, Container } from "react-bootstrap";
import iconeAdd from "../../Assets/adicionar.png";
import iconeDelete from "../../Assets/excluir.png";
import iconeEdit from "../../Assets/editar.png";
import HeaderLogado from "../../Componentes/HeaderLogado";
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css";
import InfoConta from "../../Componentes/InfoConta";
import InfoPlano from "../../Componentes/InfoPlano";

function Home() {
	return (
		<div>
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
					</Container>

					<hr />

					<h2>Dentista(s):</h2>
					<Container className="container-admin">
						<div className="section-botao" id="nome-dentista">
							<span>Beatriz Neves</span>
							<div className="nome-dentista-botao">
								<Button>
									<img src={iconeDelete} alt="ícone de deletar" />
								</Button>
								<Button>
									<img src={iconeEdit} alt="ícone de editar" />
								</Button>
							</div>
						</div>
						<div className="section-botao" id="nome-dentista">
							<span>Juliana Santana</span>
							<div className="nome-dentista-botao">
								<Button>
									<img src={iconeDelete} alt="ícone de deletar" />
								</Button>
								<Button>
									<img src={iconeEdit} alt="ícone de editar" />
								</Button>
							</div>
						</div>
						<div className="section-botao" id="nome-dentista">
							<span>Barbara Andrade</span>
							<div className="nome-dentista-botao">
								<Button>
									<img src={iconeDelete} alt="ícone de deletar" />
								</Button>
								<Button>
									<img src={iconeEdit} alt="ícone de editar" />
								</Button>
							</div>
						</div>
					</Container>
					
					<hr />

					<h2>Recepcionista(s):</h2>
					<Container className="container-admin">
						<div className="section-botao" id="nome-dentista">
							<span>Maria do Carmo</span>
							<div className="nome-dentista-botao">
								<Button>
									<img src={iconeDelete} alt="ícone de deletar" />
								</Button>
								<Button>
									<img src={iconeEdit} alt="ícone de editar" />
								</Button>
							</div>
						</div>
						<div className="section-botao" id="nome-dentista">
							<span>Julia Neves</span>
							<div className="nome-dentista-botao">
								<Button>
									<img src={iconeDelete} alt="ícone de deletar" />
								</Button>
								<Button>
									<img src={iconeEdit} alt="ícone de editar" />
								</Button>
							</div>
						</div>
					</Container>
				</Container>
			</Container>
		</div>
	);
}

export default Home;
