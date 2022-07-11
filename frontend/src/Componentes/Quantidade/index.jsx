import "./style.css";
import React from 'react'


function Quantidade(){
    return(
        <div className="container-consulta-prontuario">
            <h1>Selecione o nome do paciente que deseja consultar o prontuário</h1>
            <div>
                <p>Selecione o nome do usuário</p>
                <select name="opcoes" id="select">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="outro">outro</option>
                </select>
            </div>
        </div>
    );
}

export default Quantidade;