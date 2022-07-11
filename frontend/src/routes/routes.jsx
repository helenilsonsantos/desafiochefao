import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import LoginPages from "../Pages/Login";
import ProntuarioPages from "../Pages/Prontuarios";
import ConsultaProntuarioPages from "../Pages/ConsultaProntuarios"
import ConfigUserPage from '../Pages/ConfigUser';
import ErroPage from '../Pages/Erro';
import CadastroAtendimento from "../Pages/CadastroAtendimento";
import InfoPaciente from "../Pages/InfoPaciente";
import React from 'react'
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";


const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Cadastro />;
};


function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoutes>
                    <Route path="*" element={<LoginPages/>} />
                    <Route path="/prontuario" element={<ProntuarioPages/>} />
                    <Route path="/consultaprontuario" element={<ConsultaProntuarioPages/>} />
                    <Route path="/erro" element={<ErroPage />}/>
                    <Route path="/configuser" element={<ConfigUserPage />}/>
		            <Route path='/infopaciente' element ={<InfoPaciente />}/>
		            <Route path='/novoatendimento' element ={<CadastroAtendimento />}/>
                    <Route path="/cadastro" element={<Cadastro />} />
				    <Route path="/home" element={< Home  />} />
                    <Route path="/" element={<LoginPages />} />
            </WrapperRoutes>
        </BrowserRouter>
    );
}

export default Routes;
