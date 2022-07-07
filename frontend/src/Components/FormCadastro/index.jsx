import React from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import "./styles.css";

const FormCadastro = () => {
	return (
		<div>
			<FormGroup className="mb-3 input">
				<FormControl type="text" placeholder="Nome da empresa" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="text" placeholder="CNPJ" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="text" placeholder="Administrador / Usuário" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="tel" placeholder="Telefone" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="email" placeholder="Email" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="password" placeholder="Senha" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormControl type="password" placeholder="Confirmar senha" id="input" />
			</FormGroup>

			<Button type="submit" id="button">
				Criar conta
			</Button>
		</div>
	);
};

export default FormCadastro;
