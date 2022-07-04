import React from 'react';
import Container from '../../Components/Container'
import HeaderLogado from '../../Components/HeaderLogado';
import NovoAtendimento from '../../Components/NovoAtendimento'

const CadastroAtendimento: React.FC = () => {

    return (
        <Container>
            <HeaderLogado />
            <NovoAtendimento />
        </Container>
    )
}

export default CadastroAtendimento