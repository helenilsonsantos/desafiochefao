import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import InfoPaciente from "./Pages/InfoPaciente";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
				<Route path='/infopaciente' element ={<InfoPaciente />}/>
            </WrapperRoutes>
		</BrowserRouter>
	);
}