import React from 'react';
import Container from '../../Components/Container'
import HeaderLogado from '../../Components/HeaderLogado';
import InfoPaciente from '../../Components/InfoPaciente';

const Paciente: React.FC = () => {

    return (
        <Container>
            <HeaderLogado />
            <InfoPaciente />
        </Container>
    )
}

export default Paciente