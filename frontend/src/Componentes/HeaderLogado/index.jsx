import React from 'react';
import { useNavigate } from 'react-router-dom';
import engrenagemImg from '../../Assets/engrenagem-header.png'
import logo from '../../Assets/logo.png'
import './styles.css'

const HeaderLogado = () => {
    const navigate = useNavigate()

    const Sair = () => {
        navigate("/")
    }

    return(
        <header>
            <div className='headerLogadoMenu'>
            <img src={logo} alt="Tech Dental"/>   
                <div className='headerLogadoItens'>
                    <button onClick={Sair}>Sair</button>
                    <img src={engrenagemImg} alt='Configurações'/>
                </div>
            </div>
        </header>
    )
}

export default HeaderLogado