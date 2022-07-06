import React from 'react';
import ConfigUser from '../../Componentes/ConfigUser/ConfigUser';
import Sidebar from '../../Componentes/MenuLateral/Sidebar';

function ConfigUserPage(){
    return(
        <div>
            <Sidebar />
            <ConfigUser />     
        </div>
    )
}

export default ConfigUserPage