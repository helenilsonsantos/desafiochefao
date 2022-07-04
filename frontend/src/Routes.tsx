import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import CadastroAtendimento from "./Pages/CadastroAtendimento";
import InfoPaciente from "./Pages/InfoPaciente";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
				<Route path='/infopaciente' element ={<InfoPaciente />}/>
				<Route path='/novoatendimento' element ={<CadastroAtendimento />}/>
            </WrapperRoutes>
		</BrowserRouter>
	);
}