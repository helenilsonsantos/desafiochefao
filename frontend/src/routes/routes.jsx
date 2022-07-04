import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Erro from '../Pages/Erro/Erro';
import ConfigUser from '../Pages/ConfigUser/ConfigUser';

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Erro" element={<Erro />}/>
            <Route path="/ConfigUser" element={<ConfigUser />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas