import React from 'react';
import './styles.css'

const InfoPaciente: React.FC = () => {
    return (
        <main className='containerFormPaciente'>
            <h2 className='pacienteTitulo'>Informações sobre o paciente</h2>
            <div className='formPaciente'>
                <div className='formPacienteEsq'>
                    <form className='infoEsq'>
                        <div className='divPacienteNome'>
                            <label htmlFor='pacienteNome'>Paciente</label><br/>
                            <input type='text' className='pacienteNome' name='pacienteNome' placeholder='Exemplo: José Vieira'></input>
                        </div>
                        
                        <div className='divPacienteCpf'>
                            <label htmlFor='pacienteCpf'>CPF</label><br/>
                            <input type='number' className='pacienteCpf' name='pacienteCpf' placeholder=''></input>
                        </div>
                        <div className='divPacienteEmail'>
                            <label htmlFor='pacienteEmail'>E-mail</label><br/>
                            <input type='email' className='pacienteEmail' name='pacienteEmail' placeholder=''></input>
                        </div>
                        
                        <div className='divPacienteCep'>
                            <label htmlFor='pacienteCep'>Cep</label><br/>
                            <input type='number' className='pacienteCep' name='pacienteCep' placeholder=''></input>
                        </div>
                        
                        <div className='divPacienteRua'>
                            <label htmlFor='pacienteRua'>Rua</label><br/>
                            <input type='text' className='pacienteRua' name='pacienteRua' placeholder=''></input>
                        </div>

                        <div className='divPacienteBairro'>
                            <label htmlFor='pacienteBairro'>Bairro</label><br/>
                            <input type='text' className='pacienteBairro' name='pacienteBairro' placeholder=''></input>
                        </div>

                        <div className='divPacienteObservacoes'>
                            <label htmlFor='pacienteObservacoes'>Observações</label><br/>
                            <textarea className='pacienteObservacoes' name='pacienteObservacoes' placeholder=''></textarea>
                        </div>

                    </form>
                </div>

                <div className='formPacienteDir'>
                    <form className='infoDir'>

                    <div className='divPacienteNascimento'>
                        <label htmlFor='pacienteNascimento'>Data de nascimento</label><br/>
                        <input type='date' className='pacienteNascimento' name='pacienteNascimento' placeholder=''></input>
                    </div>

                    <div className='divPacienteTelefone'>
                        <label htmlFor='pacienteTelefone'>Telefone</label><br/>
                        <input type='number' className='pacienteTelefone' name='pacienteTelefone' placeholder=''></input>
                    </div>
                    <div className='divNumeroComplemento'>
                        <div className='divPacienteNumero'>
                            <label htmlFor='pacienteNumero'>Número</label><br/>
                            <input type='number' className='pacienteNumero' name='pacienteNumero' placeholder=''></input>
                        </div>

                        <div className='divPacienteComplemento'>
                            <label htmlFor='pacienteComplemento'>Complemento</label><br/>
                            <input type='text' className='pacienteComplemento'  name='pacienteComplemento' placeholder=''></input>
                        </div>
                    </div>

                    <div className='divPacienteCidade'>
                        <label htmlFor='pacienteCidade'>Cidade</label><br/>
                        <input type='text' className='pacienteCidade' name='pacienteCidade' placeholder=''></input>
                    </div>

                    </form>
                </div>
            </div>
        </main>
    )
} 

export default InfoPaciente