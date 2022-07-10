import React from 'react';
import ConfigUser from '../../Componentes/ConfigUser/ConfigUser';
import HeaderLogado from '../../Componentes/HeaderLogado';
import Sidebar from '../../Componentes/MenuLateral/Sidebar';


function ConfigUserPage(){
    return(
        <div>
                <HeaderLogado/>
                   <Sidebar />
                  <ConfigUser />
        </div>
    )
}

export default ConfigUserPage