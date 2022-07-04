import React from 'react';
import { Link } from 'react-router-dom';
import engrenagemImg from '../../Assets/engrenagem-header.png'
import './styles.css'

const HeaderLogado: React.FC = () => {
    return(
        <header>
            <div className='headerLogadoMenu'>    
                <div className='headerLogadoItens'>
                    <button>Sair</button>
                    <img src={engrenagemImg} alt='' />
                </div>
            </div>
        </header>
    )
}

export default HeaderLogado