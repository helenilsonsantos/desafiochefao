import React from 'react';
import {Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconeDelete from "../../Assets/excluir.png";
import './DeleteModal.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header   closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modalText">
                <h1>Remover um usuário</h1>
                <p>Tem certeza que deseja remover este usuário? </p>  
            </div>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button  className="modalButton" onClick={props.onDelete}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function DeleteModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        {/* Colocar o botão aqui */}
        <Button variant="primary" onClick={() => setModalShow(true)}>
          <img src={iconeDelete} alt="" />
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onDelete={() => {
            props.onDelete()
            setModalShow(false)
          }}
        />
      </>
    );
  }
  
  
export default DeleteModal