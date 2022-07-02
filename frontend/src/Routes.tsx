import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";

export default function Routes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
                {/* <Route path="" element={} /> */}
            </WrapperRoutes>
		</BrowserRouter>
	);
}
