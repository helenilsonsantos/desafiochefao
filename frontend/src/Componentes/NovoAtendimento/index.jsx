import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'

const NovoAtendimento = () => {
    const navigate = useNavigate();

	const navigateCancelar = () => {
		navigate("/home");
	};
    return(
        <main className='containerNovoAtendimento'>
            <h2 className='novoAtendimentoTitulo'>Cadastro de atendimento</h2>
            <div className='novoAtendimentoForm'>
                <div className='formNovoAtendimentoEsq'>
                    <form className='NovoAtendimentoEsq'>

                        <div className='divNovoPacienteNome'>

                            <label htmlFor='novoPacienteNome'>Paciente</label><br/>
                            <input type='text' className='novoPacienteNome' name='pacienteNome' placeholder='Exemplo: José Vieira'></input>

                        </div>

                        <div className='divNovoNomeDentista'>
                            <label htmlFor='novoNomeDentista'>Nome dentista</label><br/>
                            <input type='text' className='novoNomeDentista' name='dentistaNome' placeholder=''></input>
                        </div>
                
                        <div className='divDataHora'>

                            <div className='divNovaData'>
                                <label htmlFor='novoAtendimentoData'>Data</label><br/>
                                <input type='date' className='novoAtendimentoData' name='novoAtendimentoData' placeholder=''></input>
                            </div>

                            <div className='divNovoHorario'>
                                <label htmlFor='novoAtendimentoHora'>Hora</label><br/>
                                <input type='time' className='novoAtendimentoHora'  name='novoAtendimentoHora' placeholder=''></input>
                            </div>

                        </div>

                        <div className='divNovoAtendimentoObservacoes'>
                            <label htmlFor='novoAtendimentoObservacoes'>Observações</label><br/>
                            <textarea className='novoAtendimentoObservacoes' name='novoAtendimentoObservacoes' placeholder=''></textarea>
                        </div>
                    </form>
                </div>

                <div className='formNovoAtendimentoDir'>
                    <form className='NovoAtendimentoDir'>
                        <div className='divNovoAtendimentoAnotacoes'>

                            <label htmlFor='novoAtendimentoAnotacoes'>Anotações</label><br/>
                            <textarea className='novoAtendimentoAnotacoes' name='novoAtendimentoAnotacoes' placeholder=''></textarea>

                        </div>
                    </form>
                </div>

            </div>
            <div className="botoes-pacientes">
				<button
					onClick={navigateCancelar}
					className="botoes-pacientes-cancelar"
				>
					Cancelar
				</button>

				<button type="submit" className="botoes-pacientes-inserir">
					Inserir entrada
				</button>
			</div>
        </main>
    )
}

export default NovoAtendimento