import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import editar from '../../Assets/editar.png'
import './styles.css'

function ModalEditUser() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="" onClick={handleShow}>
         <img src={editar} alt="Botão adicionar" />
        </Button>
  
        <Modal show={show} onHide={handleClose} id="ModalBody">
          <Modal.Header closeButton>
            <h4 id='TituloModalCadastrar'>Editar um usuário</h4>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Selecione o tipo de usuário</Form.Label>
                    <Form.Select>
                        <option value='valor1'>Administrador</option>
                        <option value='valor2' selected>Dentista</option>
                        <option value='valor3'>Recepcionista</option>
                    </Form.Select>
              </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome de usuário</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Digite seu nome"
                    autoFocus
                    />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>E-mail</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Insira seu e-mail"
                    autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefone/celular</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Ex: 11990909090"
                        autoFocus
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Senha</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Sua senha"
                        autoFocus
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirmar senha</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Confirme a senha"
                        autoFocus
                        />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer id="ContainerModalCadastrar">
            <button id="BotaoCriarPerfilModal" onClick={handleClose} >
              Criar perfil
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalEditUser