import React from 'react';
import Container from '../../Components/Container'
import HeaderLogado from '../../Components/HeaderLogado';
import InfoPaciente from '../../Components/InfoPaciente';
import ModalNovoUser from '../../Components/ModalNovoUser';

const Paciente: React.FC = () => {

    return (
        <Container>
            <HeaderLogado />
            <InfoPaciente />
            <ModalNovoUser />
        </Container>
    )
}

export default Paciente