import "./style.css";
import React from 'react'


function Quantidade(){
    return(
        <div>
            <h1>Digite o nome do paciente que deseja consultar o prontuário</h1>
            <div>
                <p>Digite o nome do usuário</p>
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