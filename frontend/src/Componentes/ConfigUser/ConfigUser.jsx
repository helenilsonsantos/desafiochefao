import React from 'react';
import './ConfigUser.css';
import icone from '../../Assets/icone.png';


function ConfigUser(){
    return(
        <div className="app">
            <h1 className='titulo'>Sua conta</h1>
            <div className="informacoes">
                <div><img alt=""src={icone}/></div>
                <div>
                    <p>Nome</p>
                    <p>Email</p>
                    <p>XX. XXX. XXX/0001-XX</p>
                </div>
            </div>
            <hr />
            <div className="plano">
                <h1>Seu plano</h1>
                <p>Plano anual Dental Platinum PRO</p>
                <p>Consultar informações sobre meu plano</p>
            </div>
        </div>
    )
}

export default ConfigUser