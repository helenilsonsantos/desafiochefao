import React from 'react';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import NovoAtendimento from '../../Componentes/NovoAtendimento'

const CadastroAtendimento= () => {

    return (
        <div className='ContainerGeral'>
            <HeaderLogado />
            <NovoAtendimento />
        </div>
    )
}

export default CadastroAtendimento