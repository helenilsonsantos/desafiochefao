import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import LoginPages from "../Pages/Login";
import ProntuarioPages from "../Pages/Prontuarios";
import ConsultaProntuarioPages from "../Pages/ConsultaProntuarios"
import ConfigUserPage from '../Pages/ConfigUser';
import ErroPage from '../Pages/Erro';


function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/login" element={<LoginPages/>} />
                <Route path="/prontuario" element={<ProntuarioPages/>} />
                <Route path="/consultaprontuario" element={<ConsultaProntuarioPages/>} />
                <Route path="/Erro" element={<ErroPage />}/>
                <Route path="/ConfigUser" element={<ConfigUserPage />}/>
            </WrapperRoutes>
        </BrowserRouter>
    );
}

export default Routes;