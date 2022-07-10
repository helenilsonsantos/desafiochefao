import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import HeaderLogado from "../../Componentes/HeaderLogado";
import Sidebar from "../../Componentes/MenuLateral/Sidebar";
import "./styles.css";
import InfoConta from "../../Componentes/InfoConta";
import InfoPlano from "../../Componentes/InfoPlano";
import ModalNovoUser from "../../Componentes/ModalNovoUser";
import DeleteModal from "../../Componentes/DeleteModal/DeleteModal";
import ModalEditUser from "../../Componentes/ModalEditUser/index";
import { criarUsuario, deletarUsuario,  listarUsuarios } from "../../services/usuarios";

function Home() {
  const [administradores, setAdministradores] = useState([]);
  const [dentistas, setDentistas] = useState([]);
  const [recepcionistas, setRecepcionistas] = useState([]);

  const listar = async () => {
    const response = await listarUsuarios();

    const ativos = response.data.filter((i) => i.situacao === "ativo");

    const admins = ativos.filter((i) => i.perfil === "administrador");
    const dentistas = ativos.filter((i) => i.perfil === "dentista");
    const secretarias = ativos.filter((i) => i.perfil === "secretaria");

    setAdministradores(admins);
    setDentistas(dentistas);
    setRecepcionistas(secretarias);
  };

  const excluirUsuario = async (id) => {
    await deletarUsuario(id);
    listar();
  };

  const cadastrarNovoUsuario = async (dados) => {
	await criarUsuario(dados);
	listar()

  }

  const atualizarUsuario = async(dados) => {
	await atualizarUsuario(dados);
	listar()
  }

  useEffect(() => {
    listar();
  }, []);

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
              <ModalNovoUser onSubmit={cadastrarNovoUsuario} />
            </Button>
            {/* Modal de adicionar usuário */}
          </section>

          <h2>Administrador(es):</h2>
          <Container className="container-admin">
            {administradores.map((admin) => (
              <span id="nome-adm">{admin.nome_completo}</span>
            ))}
          </Container>

          <hr />

          <h2>Dentista(s):</h2>
          <Container className="container-admin">
            {dentistas.map((dentista) => (
              <div className="section-botao" id="nome-dentista">
                <span>{dentista.nome_completo}s</span>

                <div className="nome-dentista-botao">
                  <Button>
                    <DeleteModal onDelete={() => excluirUsuario(dentista.id)} />
                  </Button>
                  <Button>
                    <ModalEditUser usuarioId={dentista.id} onUpdate={atualizarUsuario}/>
                  </Button>
                </div>
              </div>
            ))}
          </Container>

          <hr />

          <h2>Recepcionista(s):</h2>
          <Container className="container-admin">
				{recepcionistas.map((recepcionista) => (
					<div className="section-botao" id="nome-dentista">
					<span>{recepcionista.nome_completo}</span>
					<div className="nome-dentista-botao">
						<Button>
						<DeleteModal onDelete={() => excluirUsuario(recepcionista.id)} />
						</Button>
						<Button>
						<ModalEditUser usuarioId={recepcionista.id} onUpdate={atualizarUsuario}/>
						</Button>
					</div>
					</div>

				))}
			
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
