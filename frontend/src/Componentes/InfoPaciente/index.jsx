import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarPaciente } from "../../services/pacientes";
import "./styles.css";

const InfoPaciente = () => {

	const [paciente, setPaciente] = useState("");
	const [cpf, setCpf] = useState("");
	const [email, setEmail] = useState("");
	const [cep, setCep] = useState("");
	const [rua, setRua] = useState("");
	const [bairro, setBairro] = useState("");
	const [data, setData] = useState(Date);
	const [telefone, setTelefone] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade, setCidade] = useState("");
	const [observacoes, setObservacoes] = useState("");

	const cadastrarPaciente = async (dados) => {
		await criarPaciente(dados);
	};

	const navigate = useNavigate();

	const navigateCancelar = () => {
		navigate("/home");
	};
	return (
		<main className="containerFormPaciente">
			<h2 className="pacienteTitulo">Informações sobre o paciente</h2>
			<div className="formPaciente">
				<div className="formPacienteEsq">
					<form className="infoEsq">
						<div className="divPacienteNome">
							<label htmlFor="pacienteNome">Paciente</label>
							<br />
							<input
								type="text"
								className="pacienteNome"
								name="pacienteNome"
								placeholder="Exemplo: José Vieira"
								value={paciente}
								onChange={(event) => setPaciente(event.target.value)}
							></input>
						</div>

						<div className="divPacienteCpf">
							<label htmlFor="pacienteCpf">CPF</label>
							<br />
							<input
								type="number"
								className="pacienteCpf"
								name="pacienteCpf"
								placeholder=""
								value={cpf}
								onChange={(event) => setCpf(event.target.value)}
							></input>
						</div>
						<div className="divPacienteEmail">
							<label htmlFor="pacienteEmail">E-mail</label>
							<br />
							<input
								type="email"
								className="pacienteEmail"
								name="pacienteEmail"
								placeholder=""
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							></input>
						</div>

						<div className="divPacienteCep">
							<label htmlFor="pacienteCep">Cep</label>
							<br />
							<input
								type="number"
								className="pacienteCep"
								name="pacienteCep"
								placeholder=""
								value={cep}
								onChange={(event) => setCep(event.target.value)}
							></input>
						</div>

						<div className="divPacienteRua">
							<label htmlFor="pacienteRua">Rua</label>
							<br />
							<input
								type="text"
								className="pacienteRua"
								name="pacienteRua"
								placeholder=""
								value={rua}
								onChange={(event) => setRua(event.target.value)}
							></input>
						</div>

						<div className="divPacienteBairro">
							<label htmlFor="pacienteBairro">Bairro</label>
							<br />
							<input
								type="text"
								className="pacienteBairro"
								name="pacienteBairro"
								placeholder=""
								value={bairro}
								onChange={(event) => setBairro(event.target.value)}
							></input>
						</div>
					</form>
				</div>

				<div className="formPacienteDir">
					<form className="infoDir">
						<div className="divDataTel">
							<div className="divPacienteNascimento">
								<label htmlFor="pacienteNascimento">Data de nascimento</label>
								<br />
								<input
									type="date"
									className="pacienteNascimento"
									name="pacienteNascimento"
									placeholder=""
									value={data}
									onChange={(event) => setData(event.target.value)}
								></input>
							</div>

							<div className="divPacienteTelefone">
								<label htmlFor="pacienteTelefone">Telefone</label>
								<br />
								<input
									type="number"
									className="pacienteTelefone"
									name="pacienteTelefone"
									placeholder=""
									value={telefone}
									onChange={(event) => setTelefone(event.target.value)}
								></input>
							</div>
						</div>
						<div className="divNumCompCid">
							<div className="divNumeroComplemento">
								<div className="divPacienteNumero">
									<label htmlFor="pacienteNumero">Número</label>
									<br />
									<input
										type="number"
										className="pacienteNumero"
										name="pacienteNumero"
										placeholder=""
										value={numero}
										onChange={(event) => setNumero(event.target.value)}
									></input>
								</div>

								<div className="divPacienteComplemento">
									<label htmlFor="pacienteComplemento">Complemento</label>
									<br />
									<input
										type="text"
										className="pacienteComplemento"
										name="pacienteComplemento"
										placeholder=""
										value={complemento}
										onChange={(event) => setComplemento(event.target.value)}
									></input>
								</div>
							</div>

							<div className="divPacienteCidade">
								<label htmlFor="pacienteCidade">Cidade</label>
								<br />
								<input
									type="text"
									className="pacienteCidade"
									name="pacienteCidade"
									placeholder=""
									value={cidade}
									onChange={(event) => setCidade(event.target.value)}
								></input>
							</div>
						</div>
					</form>
					<div className="divPacienteObservacoes">
						<label htmlFor="pacienteObservacoes">Observações</label>
						<br />
						<textarea
							className="pacienteObservacoes"
							name="pacienteObservacoes"
							placeholder=""
							value={observacoes}
							onChange={(event) => setObservacoes(event.target.value)}
						></textarea>
					</div>
				</div>
			</div>
			<div className="botoes-pacientes">
				<button
					onClick={navigateCancelar}
					className="botoes-pacientes-cancelar"
				>
					Cancelar
				</button>

				<button type="submit" className="botoes-pacientes-inserir" onSubmit={cadastrarPaciente}>
					Inserir entrada
				</button>
			</div>
		</main>
	);
};

export default InfoPaciente;
