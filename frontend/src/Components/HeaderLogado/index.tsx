import React from 'react';
import { Link } from 'react-router-dom';
import engrenagemImg from '../../Assets/engrenagem-header.png'
import logo from '../../Assets/logo.png'
import './styles.css'

const HeaderLogado: React.FC = () => {
    return(
        <header>
            <div className='headerLogadoMenu'>
            <img src={logo} alt="Tech Dental"/>   
                <div className='headerLogadoItens'>
                    <button>Sair</button>
                    <img src={engrenagemImg} alt='Configurações'/>
                </div>
            </div>
        </header>
    )
}

export default HeaderLogado