import React from 'react';
import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import CadastroAtendimento from "./Pages/CadastroAtendimento";
import InfoPaciente from "./Pages/InfoPaciente";
import Cadastro from './Pages/Cadastro'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
				<Route path='/infopaciente' element ={<InfoPaciente />}/>
				<Route path='/novoatendimento' element ={<CadastroAtendimento />}/>
				<Route path="/" element={<Cadastro />} />
            </WrapperRoutes>
		</BrowserRouter>
	);
}