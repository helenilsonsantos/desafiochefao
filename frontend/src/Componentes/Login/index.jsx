import ConsultorioLogin from "../../Assets/fotoLogin.png";
import EmailLogin from "../../Assets/mail.svg";
import Lock from "../../Assets/lock.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import {useDispatch} from "react-redux";
import {login as loginReducer} from "../../Store/modules/user/index"
import api from "../../services/api"
import { login } from "../../services/login";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Utilize um email válido")
		.required("Insira seu email"),
	senha: Yup.string()
		.required("Insira sua senha")
		.min(8, "Sua senha deve ter no mínimo 8 caracteres")
		.max(12, "Sua senha deve ter no máximo 12 caracteres"),
});

function Login() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const navigateToCadastro = () => {
		navigate("/cadastro");
	};

	const alerta = () => {
		return (
			<Alert variant="danger">
				E-mail ou senha inseridos não cadastrado, tente novamente!
			</Alert>
		);
	};
	
	const formik = useFormik({
		initialValues: {
			email: "",
			senha: ""
		},
		validationSchema,
		onSubmit: async values => {
			const token = await login(values)
			const decode = jwt_decode(token)
			dispatch(loginReducer({
				token,
				decode
			})) 
			api.defaults.headers.common.Authorization = `Bearer ${token}`
			navigate("/home")
		}
	})
	

	return (
		<section className="sessao-login">
			<img
				className="sessao-login-img"
				src={ConsultorioLogin}
				alt="imagem da página de login"
			/>
			<div className="login-usuario">
				<h2>Acesse sua conta</h2>
				<form onSubmit={formik.handleSubmit}>
					<section className="input-login">
						<img src={EmailLogin} alt="ícone de email" />
						<input
							id="email"
							type="email"
							placeholder="Insira seu e-mail"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</section>
					{formik.touched.email && formik.errors.email ? (
						<span className="formik-erro">{formik.errors.email}</span>
					) : null}
					<section className="input-login">
						<img src={Lock} alt="ícone de senha" />
						<input
							id="senha"
							type="password"
							placeholder="Insira sua senha"
							value={formik.values.senha}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</section>
					{formik.touched.senha && formik.errors.senha ? (
						<span className="formik-erro">{formik.errors.senha}</span>
					) : null}
					<br />
					<button type="submit" className="botao-login">
						Login
					</button>
				</form>
				<hr />
				<p>Você ainda não é nosso cliente?</p>
				<button onClick={navigateToCadastro} className="botao-cadastrar">
					Cadastre seu consultório
				</button>
			</div>
		</section>
	);
}

export default Login;
