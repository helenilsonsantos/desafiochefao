import React from "react";
import imgErro from "../../Assets/imgErro.png";
import { Stack, Image } from "react-bootstrap";
import "./Erro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Erro() {
	return (
		<div className="container-erro">
			<Stack direction="horizontal" gap={5} className="conteudo">
				<div>
					<Image className="imagem" alt="" src={imgErro} />
				</div>
				<div className="texto">
					<h1>404</h1>
					<h2>
						Página em desenvolvimento, <br /> voltar a{" "}
						<Link to="/home">home</Link>
					</h2>
					<h3>Agradecemos a compreensão e a preferência</h3>
				</div>
			</Stack>
		</div>
	);
}

export default Erro;
