import "./style.css";
import React from 'react'
import {useNavigate} from "react-router-dom"

function Consultas(){
    const navigate = useNavigate()

    const navigateToAtendimento = () => {
        navigate("/novoatendimento")
    }

    return(
     <div className="container-prontuario">
        <h2>Consultas</h2>
        <button onClick={navigateToAtendimento} className="consultas">Adicionar consulta</button>
     </div>
    );
}

export default Consultas;