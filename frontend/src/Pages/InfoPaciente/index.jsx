import React from 'react';
import '../../Components/Container/styles.css'
import HeaderLogado from '../../Components/HeaderLogado';
import InfoPaciente from '../../Components/InfoPaciente';
import ModalNovoUser from '../../Components/ModalNovoUser';

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