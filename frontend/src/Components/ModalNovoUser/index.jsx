import React from 'React';
import { useState } from 'react'
import Modal from 'react-modal'
import adicionar from '../../Assets/adicionar.png'

Modal.setAppElement('#root')

function ModalNovoUser() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal(){
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
             left: '50%',
             right: 'auto',
             bottom: 'auto',
             marginRight: '-50%',
             transform: 'translate(-50%, -50%)',
        }
    }

    return (
        <div className='containerModal'>
            
            <button className='modalButton' onClick={handleOpenModal}>
                <img src={adicionar} alt="adicionar um usuário" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <h2 className='tituloModal'>Cadastrar um novo usuário</h2>
                <form className='formModal'>
                    <label htmlFor="">Selecione o tipo de usuário</label>
                    <select name="select">
                        <option value="valor1">Administrador</option>
                        <option value="valor2" selected>Dentista</option>
                        <option value="valor3">Recepcionista</option>
                    </select>
                    <label htmlFor="">Nome de usuário</label>
                    <input type='text'/>

                    <label htmlFor="">E-mail</label>
                    <input type='email'/>

                    <label htmlFor="">Telefone/celular</label>
                    <input type='number'/>

                    <label htmlFor="">Senha</label>
                    <input type='password'/>

                    <label htmlFor="">Confirmar senha</label>
                    <input type='password'/>

                    <button type='submit'>Criar perfil</button>
                </form>
            </Modal>
        </div>
    );
}

export default ModalNovoUser