import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ConfigUserPage from '../Pages/ConfigUser';
import ErroPage from '../Pages/Erro';


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Erro" element={<ErroPage />}/>
            <Route path="/ConfigUser" element={<ConfigUserPage />}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas