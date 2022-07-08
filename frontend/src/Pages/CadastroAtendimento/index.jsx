import React from 'react';
import '../../Components/Container/styles.css'
import HeaderLogado from '../../Components/HeaderLogado';
import NovoAtendimento from '../../Components/NovoAtendimento'

const CadastroAtendimento= () => {

    return (
        <div className='ContainerGeral'>
            <HeaderLogado />
            <NovoAtendimento />
        </div>
    )
}

export default CadastroAtendimento