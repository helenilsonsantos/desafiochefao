import React from 'react';
import { useNavigate } from 'react-router-dom';
import engrenagemImg from '../../Assets/engrenagem-header.png'
import logo from '../../Assets/logo.png'
import './styles.css'
import {useDispatch} from "react-redux";
import {logout} from "../../Store/modules/user/index"

const HeaderLogado = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }


    return(
        <header>
            <div className='headerLogadoMenu'>
            <img src={logo} alt="Tech Dental"/>   
                <div className='headerLogadoItens'>
                    <button  onClick={handleLogout}>Sair</button>
                    <img src={engrenagemImg} alt='Configurações'/>
                </div>
            </div>
        </header>
    )
}

export default HeaderLogado