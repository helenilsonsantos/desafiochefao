import ConsultorioLogin from "../../Assets/fotoLogin.png";
import EmailLogin from "../../Assets/mail.svg";
import Lock from "../../Assets/lock.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
	const navigate = useNavigate();

	const navigateToCadastro = () => {
		navigate("/cadastro");
	};

	return (
		<section className="sessao-login">
			<img className="sessao-login-img" src={ConsultorioLogin} alt="imagem da página de login" />
			<div className="login-usuario">
				<h2>Acesse sua conta</h2>
				<form>
					<section className="input-login">
						<img src={EmailLogin} alt="ícone de email" />
						<input type="email" placeholder="Insira seu e-mail" />
					</section>
					<section className="input-login">
                        <img src={Lock} alt="ícone de senha" />
						<input type="password" placeholder="Insira sua senha" />
					</section>
				</form>
				<button className="botao-login">Login</button>
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
