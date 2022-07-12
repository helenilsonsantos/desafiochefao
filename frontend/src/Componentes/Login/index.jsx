import ConsultorioLogin from "../../Assets/fotoLogin.png";
import EmailLogin from "../../Assets/mail.svg";
import Lock from "../../Assets/lock.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {useFormik} from "formik";
import user from "../../Store/modules/user";
import {login} from "../../services/login"
import jwt_decode from "jwt-decode";
import {useDispatch} from "react-redux";
import {login as loginReducer} from "../../Store/modules/user/index"
import api from "../../services/api"

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			senha: ""
		},
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
	const navigateToCadastro = () => {
		navigate("/cadastro");
	};

	return (
		<section className="sessao-login">
			<img className="sessao-login-img" src={ConsultorioLogin} alt="imagem da página de login" />
			<div className="login-usuario">
				<h2>Acesse sua conta</h2>
				<form onSubmit={formik.handleSubmit}>
					<section className="input-login">
						<img src={EmailLogin} alt="ícone de email" />
					<input id="email" name="email" value={formik.values.email} onChange={formik.handleChange} type="email" placeholder="Insira seu e-mail" />
					</section>
					<section className="input-login">
                        <img src={Lock} alt="ícone de senha" />
						<input id="senha" name="senha" value={formik.values.senha} onChange={formik.handleChange} type="password" placeholder="Insira sua senha" />
					</section>
					<button type="submit" className="botao-login">Login</button>
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
