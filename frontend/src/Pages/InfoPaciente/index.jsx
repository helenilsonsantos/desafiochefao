import React from 'react';
import ModalNovoUser from '../../Componentes/ModalNovoUser';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import InfoPaciente from '../../Componentes/InfoPaciente';
import ModalEditUser from '../../Componentes/ModalEditUser';

const Paciente= () => {

    return (
        <div className='ContainerGeral'>
            <HeaderLogado />
            <InfoPaciente />
            <ModalNovoUser />
            <ModalEditUser />
        </div>
    )
}

export default Paciente