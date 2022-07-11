import React from 'react';
import Erro from '../../Componentes/Erro/Erro';
import HeaderLogado from '../../Componentes/HeaderLogado';
import SideBar from '../../Componentes/MenuLateral/Sidebar'


function ErroPage(){
    return(
        <div>
            <HeaderLogado />
            <SideBar />
            <Erro />  
        </div>
    )
}

export default ErroPage