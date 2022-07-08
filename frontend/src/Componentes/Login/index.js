import "./style.css";
import ConsultorioLogin from "../../Assets/fotoLogin.svg"
import EmailLogin from "../../Assets/mail.svg"
import Lock from "../../Assets/lock.svg"

function Login(){
    return(
        <section className="sessao-login">
            <img src={ConsultorioLogin} />
            <div className="login-usuario">
            <h2>Acesse sua conta</h2>
            <form>
                <img className="icones" src={EmailLogin} />
                <input type="" placeholder="Insira seu e-mail" />
                {/* <label>Senha</label> <br/><br/> */}
                <input className="senha" placeholder="Insira sua senha" />
                <img className="icone" src={Lock} />
            </form>
            <button>Login</button>
            <hr/>
            <p>Você ainda não é nosso cliente?</p>
            <button className="cadastrar">Cadastre seu  consultório</button>
            </div>
        </section>
    );
}

export default Login;