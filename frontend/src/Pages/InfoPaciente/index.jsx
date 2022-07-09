import React from 'react';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import InfoPaciente from '../../Componentes/InfoPaciente';
import ModalNovoUser from '../../Componentes/ModalNovoUser';

const Paciente= () => {

    return (
        <div className='ContainerGeral'>
            <HeaderLogado />
            <InfoPaciente />
            <ModalNovoUser />
        </div>
    )
}

export default Paciente