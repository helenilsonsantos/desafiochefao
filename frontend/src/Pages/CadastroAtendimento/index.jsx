import React from 'react';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import Sidebar from '../../Componentes/MenuLateral/Sidebar';
import NovoAtendimento from '../../Componentes/NovoAtendimento'
import "./styles.css"

const CadastroAtendimento= () => {

    return (
        <div className='atendimento-pagina'>
            <div className='ContainerGeral'>
                <HeaderLogado />
            </div>
                <Sidebar />
            <div className='ContainerGeral'>
                <NovoAtendimento />
            </div>
        </div>
    )
}

export default CadastroAtendimento