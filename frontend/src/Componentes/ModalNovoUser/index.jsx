import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import adicionar from "../../Assets/adicionar.png";
import "./styles.css";

function ModalNovoUser(props) {
  const [show, setShow] = useState(false);
  const [perfil, setPerfil] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateUser = async () => {
    try {
      if (senha !== confirmarSenha) {
        alert("Senha diferentes");
        return;
      }

      const dadosParaCadastro = {
        perfil: perfil,
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
      };

      await props.onSubmit(dadosParaCadastro);

      setShow(false);
    } catch {
      alert("Algum erro aconteceu");
    }
  };

  return (
    <>
      <Button variant="" onClick={handleShow}>
        <img src={adicionar} alt="Botão adicionar" />
      </Button>

      <Modal show={show} onHide={handleClose} id="ModalBody">
        <Modal.Header closeButton>
          <h4 id="TituloModalCadastrar">Cadastrar um novo usuário</h4>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Selecione o tipo de usuário</Form.Label>
              <Form.Select
                value={perfil}
                onChange={(event) => setPerfil(event.target.value)}
              >
                <option value=""></option>
                <option value="administrador">Administrador</option>
                <option value="dentista" selected>
                  Dentista
                </option>
                <option value="secretaria">Recepcionista</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                autoFocus
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira seu e-mail"
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefone/celular</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ex: 11990909090"
                autoFocus
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Sua senha min : 8 caracteres"
                autoFocus
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirmar senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme a senha min : 8 caracteres"
                autoFocus
                value={confirmarSenha}
                onChange={(event) => setConfirmarSenha(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="ContainerModalCadastrar">
          <button id="BotaoCriarPerfilModal" onClick={handleCreateUser}>
            Criar perfil
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNovoUser;
