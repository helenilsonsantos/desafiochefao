import React from 'react';
import '../../Componentes/Container/styles.css'
import HeaderLogado from '../../Componentes/HeaderLogado';
import InfoPaciente from '../../Componentes/InfoPaciente';
import Sidebar from '../../Componentes/MenuLateral/Sidebar';
import "./styles.css"

const Paciente = () => {
	return (
		<div className="info-pagina">
			<div className="ContainerGeral">
				<HeaderLogado />
			</div>
			<Sidebar />
			<div className="ContainerGeral">
				<InfoPaciente />
				<ModalNovoUser />
				<ModalEditUser />
			</div>
		</div>
	);
};

export default Paciente;