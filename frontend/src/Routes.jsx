import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";

export default function Routes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/home" element={<Home />} />


			</WrapperRoutes>
		</BrowserRouter>
	);
}
