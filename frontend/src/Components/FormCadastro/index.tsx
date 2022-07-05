import React from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import "./styles.css";

const FormCadastro: React.FC = () => {
	return (
		<div>
			<FormGroup className="mb-3">
				<FormLabel>nome</FormLabel>
				<FormControl type="text" />
			</FormGroup>

			<FormGroup className="mb-3">
				<FormLabel>email</FormLabel>
				<FormControl type="email" />
			</FormGroup>

			<FormGroup className="mb-3">
				<FormLabel>senha</FormLabel>
				<FormControl type="password" />
			</FormGroup>

			<Button variant="primary" type="submit">
				cadastrar
			</Button>
		</div>
	);
};

export default FormCadastro;
