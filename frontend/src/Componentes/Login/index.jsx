import "./style.css";
import ConsultorioLogin from "../../Assets/fotoLogin.svg";
import EmailLogin from "../../Assets/mail.svg";
import Lock from "../../Assets/lock.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

	const navigateToCadastro = () => {
		navigate("/cadastro")
	}
	return (
		<section className="sessao-login">
			<img src={ConsultorioLogin} alt="" />
			<div className="login-usuario">
				<h2>Acesse sua conta</h2>
				<form>
					<img className="icones" src={EmailLogin} alt="" />
					<input type="" placeholder="Insira seu e-mail" />
					{/* <label>Senha</label> <br/><br/> */}
					<input className="senha" placeholder="Insira sua senha" />
					<img className="icone" src={Lock} alt="" />
				</form>
				<button>Login</button>
				<hr />
				<p>Você ainda não é nosso cliente?</p>
				<button onClick={navigateToCadastro} className="cadastrar">Cadastre seu consultório</button>
			</div>
		</section>
	);
}

export default Login;