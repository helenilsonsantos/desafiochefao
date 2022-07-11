import React from 'react';
import Erro from '../../Componentes/Erro/Erro';
import HeaderLogado from '../../Componentes/HeaderLogado';
import SideBar from '../../Componentes/MenuLateral/Sidebar'
import "./styles.css"


function ErroPage(){
    return(
        <div className='erro-pagina'>
            <HeaderLogado />
            <SideBar />
            <Erro />  
        </div>
    )
}

export default ErroPage