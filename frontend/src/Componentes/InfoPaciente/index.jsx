import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Utilize um email válido")
		.required("Insira seu email"),
	nome: Yup.string().required("Insira o nome do paciente"),
	cpf: Yup.string().required("Insira seu CPF"),
	data_nascimento: Yup.date().required("Insira sua data de nascimento"),
	telefone: Yup.string().required("Insira seu número de telefone"),
	observacoes: Yup.string().required("Insira as observações"),
	rua: Yup.string().required("Insira sua rua"),
	numero: Yup.string().required("Insira o número da residência"),
	bairro: Yup.string().required("Insira o seu bairro"),
	cep: Yup.string().required("Insira seu CEP"),
	complemento: Yup.string().required("Insira o complemento do seu endereço"),
	cidade: Yup.string().required("Insira sua cidade"),
	estado: Yup.string()
		.required("Insira a sigla do seu Estado")
		.max(2, "Insira a sigla"),
});

const InfoPaciente = () => {
	const navigate = useNavigate();

	const navigateCancelar = () => {
		navigate("/home");
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			nome: "",
			cpf: "",
			data_nascimento: "",
			telefone: "",
			observacoes: "",
			rua: "",
			numero: "",
			bairro: "",
			cep: "",
			complemento: "",
			cidade: "",
			estado: "",
		},
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			const a = await cadastrarPaciente({
				email: values.email,
				nome: values.nome,
				cpf: values.cpf,
				data_nascimento: values.data_nascimento,
				telefone: values.telefone,
				observacoes: values.observacoes,
				rua: values.rua,
				numero: values.numero,
				bairro: values.bairro,
				cep: values.cep,
				complemento: values.complemento,
				cidade: values.cidade,
				estado: values.estado,
			});
			console.log(a);
			resetForm({ values: "" });
		},
	});

	return (
		<main className="containerFormPaciente">
			<h2 className="pacienteTitulo">Informações sobre o paciente</h2>
			<form >
				<div className="formPaciente">
					<div className="formPacienteEsq">
						<div className="infoEsq">
							<div className="divPacienteNome input-paciente">
								<label htmlFor="pacienteNome">Paciente</label>
								<br />
								<input
									id="nome"
									type="text"
									className="pacienteNome"
									placeholder="Ex: José Vieira"
									value={formik.values.nome}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>

								{formik.touched.nome && formik.errors.nome ? (
									<span className="formik-erro formik-erro-paciente">
										{formik.errors.nome}
									</span>
								) : null}
							</div>

							<div className="divPacienteCpf input-paciente">
								<label htmlFor="pacienteCpf">CPF</label>
								<br />
								<input
									id="cpf"
									type="text"
									className="pacienteCpf"
									placeholder="Ex: 999.999.999-99"
									value={formik.values.cpf}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>
								<br />
								{formik.touched.cpf && formik.errors.cpf ? (
									<span className="formik-erro formik-erro-paciente">
										{formik.errors.cpf}
									</span>
								) : null}
							</div>
							<div className="divPacienteEmail input-paciente">
								<label htmlFor="pacienteEmail">E-mail</label>
								<br />
								<input
									id="email"
									type="email"
									className="pacienteEmail"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>
								{formik.touched.email && formik.errors.email ? (
									<span className="formik-erro formik-erro-paciente">
										{formik.errors.email}
									</span>
								) : null}
							</div>

							<div className="divPacienteCep input-paciente">
								<label htmlFor="pacienteCep">Cep</label>
								<br />
								<input
									id="cep"
									type="text"
									className="pacienteCep"
									placeholder="Ex: 99999-999"
									value={formik.values.cep}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>
							</div>
							{formik.touched.cep && formik.errors.cep ? (
								<span className="formik-erro formik-erro-paciente">
									{formik.errors.cep}
								</span>
							) : null}

							<div className="divPacienteRua input-paciente">
								<label htmlFor="pacienteRua">Rua</label>
								<br />
								<input
									id="rua"
									type="text"
									className="pacienteRua"
									value={formik.values.rua}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>
								{formik.touched.rua && formik.errors.rua ? (
									<span className="formik-erro formik-erro-paciente">
										{formik.errors.rua}
									</span>
								) : null}
							</div>

							<div className="divPacienteBairro input-paciente">
								<label htmlFor="pacienteBairro">Bairro</label>
								<br />
								<input
									id="bairro"
									type="text"
									className="pacienteBairro"
									value={formik.values.bairro}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								></input>
								{formik.touched.bairro && formik.errors.bairro ? (
									<span className="formik-erro formik-erro-paciente">
										{formik.errors.bairro}
									</span>
								) : null}
							</div>
						</div>
					</div>

					<div className="formPacienteDir">
						<div className="infoDir">
							<div className="divDataTel">
								<div className="divPacienteNascimento input-paciente">
									<label htmlFor="pacienteNascimento">Data de nascimento</label>
									<br />
									<input
										id="data_nascimento"
										type="date"
										className="pacienteNascimento"
										value={formik.values.data_nascimento}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									></input>
									<br />
									{formik.touched.data_nascimento &&
									formik.errors.data_nascimento ? (
										<span className="formik-erro formik-erro-paciente">
											{formik.errors.data_nascimento}
										</span>
									) : null}
								</div>

								<div className="divPacienteTelefone input-paciente">
									<label htmlFor="pacienteTelefone">Telefone</label>
									<br />
									<input
										id="telefone"
										type="number"
										className="pacienteTelefone"
										value={formik.values.telefone}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									></input>
									<br />
									{formik.touched.telefone && formik.errors.telefone ? (
										<span className="formik-erro formik-erro-paciente">
											{formik.errors.telefone}
										</span>
									) : null}
								</div>
							</div>
							<div className="divNumCompCid">
								<div className="divNumeroComplemento">
									<div className="divPacienteNumero input-paciente">
										<label htmlFor="pacienteNumero">Número</label>
										<br />
										<input
											id="numero"
											type="number"
											className="pacienteNumero"
											value={formik.values.numero}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										></input>
										<br />
										{formik.touched.numero && formik.errors.numero ? (
											<span className="formik-erro formik-erro-paciente">
												{formik.errors.numero}
											</span>
										) : null}
									</div>

									<div className="divPacienteComplemento input-paciente">
										<label htmlFor="pacienteComplemento">Complemento</label>
										<br />
										<input
											id="complemento"
											type="text"
											className="pacienteComplemento"
											value={formik.values.complemento}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										></input>
										<br />
										{formik.touched.complemento && formik.errors.complemento ? (
											<span className="formik-erro formik-erro-paciente">
												{formik.errors.complemento}
											</span>
										) : null}
									</div>
								</div>

								<div className="divPacienteCidade input-paciente">
									<label htmlFor="pacienteCidade">Cidade</label>
									<br />
									<input
										id="cidade"
										type="text"
										className="pacienteCidade"
										value={formik.values.cidade}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									></input>
									<br />
									{formik.touched.cidade && formik.errors.cidade ? (
										<span className="formik-erro formik-erro-paciente">
											{formik.errors.cidade}
										</span>
									) : null}
								</div>

								<div className="divPacienteCidade input-paciente">
									<label htmlFor="pacienteCidade">Estado</label>
									<br />
									<input
										id="estado"
										type="text"
										className="pacienteCidade"
										placeholder="Ex: RJ"
										value={formik.values.estado}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									></input>
									<br />
									{formik.touched.estado && formik.errors.estado ? (
										<span className="formik-erro formik-erro-paciente">
											{formik.errors.estado}
										</span>
									) : null}
								</div>
							</div>
						</div>
						<div className="divPacienteObservacoes input-paciente">
							<label htmlFor="pacienteObservacoes">Observações</label>
							<br />
							<textarea
								id="observacoes"
								className="pacienteObservacoes"
								value={formik.values.observacoes}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							></textarea>
							<br />
							{formik.touched.observacoes && formik.errors.observacoes ? (
								<span className="formik-erro formik-erro-paciente">
									{formik.errors.observacoes}
								</span>
							) : null}
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

					<button type="submit" className="botoes-pacientes-inserir">
						Inserir entrada
					</button>
				</div>
			</form>
		</main>
	);
};

export default InfoPaciente;
