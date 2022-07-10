import React from 'react';
import ModalNovoUser from '../../Componentes/ModalNovoUser';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import InfoPaciente from '../../Componentes/InfoPaciente';
import ModalEditUser from '../../Componentes/ModalEditUser';
import Sidebar from '../../Componentes/MenuLateral/Sidebar';

const Paciente= () => {

    return (
        <div>
            <div className='ContainerGeral'>
                <HeaderLogado />
            </div>
                <Sidebar />
            <div className='ContainerGeral'>
                <InfoPaciente />
            </div>
        </div>
    )
}

export default Paciente