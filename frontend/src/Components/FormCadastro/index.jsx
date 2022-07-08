import React from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import "./styles.css";

const FormCadastro = () => {
	return (
		<div>
			<FormGroup className="mb-3 input">
				<FormLabel className="label">E-mail</FormLabel>
				<FormControl type="email" placeholder="Insira seu e-mail" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">CNPJ</FormLabel>
				<FormControl type="text" placeholder="Informe seu CNPJ" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Nome de Usuário</FormLabel>
				<FormControl type="text" placeholder="Digite seu nome" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Telefone / Celular</FormLabel>
				<FormControl type="tel" placeholder="Ex: 11990909090" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Senha</FormLabel>
				<FormControl type="password" placeholder="Sua senha" id="input" />
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Confirmar senha</FormLabel>
				<FormControl type="password" placeholder="Confirme a senha" id="input" />
			</FormGroup>

			<Button type="submit" id="button">
				Criar conta
			</Button>
		</div>
	);
};

export default FormCadastro;
